import doc from "@/../doc.json";
import { cn } from "@/util/cn";
import { $, component$ } from "@builder.io/qwik";

type Props = {
    name: string;
};

export const TypeLink = component$(({ name }: Props) => {
    const docEntry = (doc as any).types[name] ?? null;
    const isStyled = Boolean(docEntry);

    const handleClick = $((e: PointerEvent) => {
        const target = e.target as HTMLElement;
        const linkType = target.dataset.linkType;
        const typeModal = document.querySelector<HTMLDialogElement>(
            "#type-modal",
        );

        if (linkType) {
            document.dispatchEvent(
                new CustomEvent("onSetDocPreview", { detail: linkType }),
            );
        }

        if (typeModal) {
            typeModal.showModal();
        }
    });

    return (
        <span
            class={cn("type-btn cursor-pointer", {
                "decoration-current underline decoration-dashed": isStyled,
            })}
            data-link-type={name}
            data-is-type={docEntry ? "true" : "false"}
            onClick$={handleClick}
        >
            {name}
        </span>
    );
});
