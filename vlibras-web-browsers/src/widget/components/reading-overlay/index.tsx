import { useEffect, useRef } from "preact/hooks";
import { play, stop } from "@/player/actions";
import { useTranslate } from "@/widget/hooks/use-translate";
import { resetCallback } from "@/widget/stores/use-callback.store";
import { tooltipStore } from "@/widget/stores/use-tooltip.store";
import { useWidgetStore } from "@/widget/stores/use-widget.store";
import { getAssetUrl } from "@/common/utils";

type CaretPoint = { node: Node; offset: number };

const caretFromPoint = (x: number, y: number): CaretPoint | null => {
	if (document.caretPositionFromPoint) {
		const p = document.caretPositionFromPoint(x, y);
		return p ? { node: p.offsetNode, offset: p.offset } : null;
	}
	const r = document.caretRangeFromPoint?.(x, y);
	return r ? { node: r.startContainer, offset: r.startOffset } : null;
};

export function ReadingOverlay() {
	const mode = useWidgetStore((s) => s.cursorMode);
	const setMode = useWidgetStore((s) => s.setCursorMode);
	const { mutateAsync: translate } = useTranslate();
	const overlayRef = useRef<HTMLDivElement>(null);
	const anchor = useRef<CaretPoint | null>(null);

    useEffect(() => {
        if (mode !== "read") return;

        const onKey = (e: KeyboardEvent) => {
            const target = e.target as HTMLElement;

            if (
                e.key.toLowerCase() === "l" &&
                !target.isContentEditable &&
                !["INPUT", "TEXTAREA", "SELECT"].includes(target.tagName)
            ) {
                setMode("navigate");
            }
        };

        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, [mode, setMode]);

    const isOpen = useWidgetStore((s) => s.isOpen);

    if (mode !== "read" || !isOpen || __IS_EXTENSION__) return null;

	const hitTest = (x: number, y: number) => {
		const el = overlayRef.current;
		if (!el) return null;
		el.style.pointerEvents = "none";
		const caret = caretFromPoint(x, y);
		el.style.pointerEvents = "";
		return caret;
	};

	const translateSelection = async () => {
		const text = window.getSelection()?.toString().trim();
		if (!text) return;

		tooltipStore.set({ isActive: false });

		try {
			stop();
			const gloss = await translate(text);
			resetCallback();
			play(gloss || text);
		} catch (error) {
			console.error("Falha ao traduzir/reproduzir a seleção: ", error);
		}
	};

	const onPointerDown = (e: PointerEvent) => {
		e.preventDefault();
		(e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
		anchor.current = hitTest(e.clientX, e.clientY);
		window.getSelection()?.removeAllRanges();
	};

	const onPointerMove = (e: PointerEvent) => {
		const a = anchor.current;
		if (!a || !(e.buttons & 1)) return;
		const focus = hitTest(e.clientX, e.clientY);
		if (!focus) return;
		window.getSelection()?.setBaseAndExtent(a.node, a.offset, focus.node, focus.offset);
	};

	const onPointerUp = () => {
		anchor.current = null;
		translateSelection();
	};

	const onDoubleClick = (e: MouseEvent) => {
		const caret = hitTest(e.clientX, e.clientY);
		if (!caret) return;
		const sel = window.getSelection() as any;
		sel?.collapse(caret.node, caret.offset);
		sel?.modify("move", "backward", "word");
		sel?.modify("extend", "forward", "word");
		translateSelection();
	};

    const readingCursor = `url("${getAssetUrl("cursors/reading-mode.png")}") 16 16, text`;

	return (
		<div
			ref={overlayRef}
			data-slot="reading-overlay"
			onPointerDown={onPointerDown}
			onPointerMove={onPointerMove}
			onPointerUp={onPointerUp}
			onDblClick={onDoubleClick}
            style={{
                position: "fixed",
                inset: 0,
                zIndex: 2147483646,
                cursor: `url("${getAssetUrl("cursors/reading-mode.png")}") 16 16, text`,
                touchAction: "none",
            }}
		/>
	);
}