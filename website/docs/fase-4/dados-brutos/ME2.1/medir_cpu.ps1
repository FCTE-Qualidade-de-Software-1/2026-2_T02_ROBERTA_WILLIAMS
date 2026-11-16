param([string]$Nav = "chrome", [int]$Seg = 120, [int]$Nucleos = 0, [string]$Saida = "cpu_rodada.csv")
if ($Nucleos -le 0) { $Nucleos = [Environment]::ProcessorCount }
function CpuSeg { (Get-Process $Nav -ErrorAction SilentlyContinue |
    ForEach-Object { $_.TotalProcessorTime.TotalSeconds } | Measure-Object -Sum).Sum }

Write-Host "Medindo '$Nav' por $Seg s usando $Nucleos nucleos..." -ForegroundColor Cyan
$amostras = @()
$inicio = Get-Date; $cpuInicio = CpuSeg
$cpuAnt = $cpuInicio; $tAnt = $inicio
for ($i = 1; $i -le $Seg; $i++) {
    Start-Sleep -Seconds 1
    $cpu = CpuSeg; $t = Get-Date
    $pct = [math]::Round(($cpu - $cpuAnt) / (($t - $tAnt).TotalSeconds * $Nucleos) * 100, 1)
    Write-Host ("[{0,3}s] CPU: {1,5}%" -f $i, $pct)
    $amostras += [pscustomobject]@{ segundo = $i; cpu_pct = $pct }
    $cpuAnt = $cpu; $tAnt = $t
}
$A = ((Get-Date) - $inicio).TotalSeconds
$B = (CpuSeg) - $cpuInicio
$media = [math]::Round($B / ($A * $Nucleos) * 100, 1)
$pico = ($amostras.cpu_pct | Measure-Object -Maximum).Maximum
$amostras | Export-Csv $Saida -NoTypeInformation
Write-Host ""
$resumo = "A (tempo) = $([math]::Round($A,1)) s | B (CPU usada) = $([math]::Round($B,1)) s"
Write-Host $resumo -ForegroundColor Yellow
Write-Host "MEDIA = $media%   PICO = $pico%" -ForegroundColor Green
Write-Host "Dados salvos em $Saida"
