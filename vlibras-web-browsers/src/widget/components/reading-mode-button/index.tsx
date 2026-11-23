import { Button } from "@/widget/components/ui/button";
import { Icon } from "@/widget/components/ui/icon";
import { Tooltip } from "@/widget/components/ui/tooltip";
import { useWidgetStore } from "@/widget/stores/use-widget.store";
import { useMobile } from "@/common/hooks";

export const ReadingModeButton = () => {
    const isMobile = useMobile();
    const isReading = useWidgetStore((s) => s.cursorMode === "read");
    const toggle = useWidgetStore((s) => s.toggleCursorMode);

    const label = isReading
        ? "Sair do modo de leitura (L)"
        : "Modo de leitura";

    return (
        <Tooltip
            className="whitespace-nowrap"
            offset={8}
            align="end"
            content={label}
            placement="top"
            arrow={{ position: "bottom-right" }}
            visualOnly
        >
            <Button
                type="button"
                variant="ghost-gov"
                size={isMobile ? "icon-sm" : "icon"}
                aria-label={label}
                aria-pressed={isReading}
                onClick={toggle}
            >
                <Icon name={isReading ? "eye-slash" : "eye"} />
            </Button>
        </Tooltip>
    );
};