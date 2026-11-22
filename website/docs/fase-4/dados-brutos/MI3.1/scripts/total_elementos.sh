const TELA = 'Tradutor';   // nome muda a cada tela
const host = document.querySelector('#vlibras-app-root');
const root = host.shadowRoot || host;
const vis = e => { const r = e.getBoundingClientRect(), s = getComputedStyle(e);
  return r.width > 0 && r.height > 0 && s.visibility !== 'hidden' && s.display !== 'none' && +s.opacity > 0; };
const hasText = e => [...e.childNodes].some(n => n.nodeType === 3 && n.textContent.trim());
const isCtl  = e => e.matches('button,a[href],input,select,textarea,[role=button],[role=switch],[role=slider],[role=tab],[role=checkbox],[role=progressbar]');
const isIcon = e => e.matches('svg,img') && !e.parentElement.closest('svg');
const rows = [...root.querySelectorAll('*')]
  .filter(e => e.tagName !== 'CANVAS' && !e.closest('canvas') && vis(e))
  .map(e => {
    const tipos = [];
    if (hasText(e)) tipos.push('texto');
    if (isCtl(e))   tipos.push('controle');
    if (isIcon(e))  tipos.push('icone');
    if (!tipos.length) return null;
    return { tela: TELA, tipo: tipos.join('+'), tag: e.tagName.toLowerCase(),
             texto: (e.innerText || e.getAttribute('aria-label') || e.getAttribute('title') || '').trim().slice(0, 40),
             id: e.id || '', classe: (e.className && e.className.baseVal === undefined ? e.className : '').toString().slice(0, 40) };
  }).filter(Boolean);
window.__univ = rows;
console.table(rows);
console.log('Total:', rows.length, '| texto:', rows.filter(r => r.tipo.includes('texto')).length,
  '| controle:', rows.filter(r => r.tipo.includes('controle')).length,
  '| icone:', rows.filter(r => r.tipo.includes('icone')).length);