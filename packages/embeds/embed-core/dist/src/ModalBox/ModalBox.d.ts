type ShadowRootWithStyle = ShadowRoot & {
    host: HTMLElement & {
        style: CSSStyleDeclaration;
    };
};
export declare class ModalBox extends HTMLElement {
    static htmlOverflow: string;
    static get observedAttributes(): string[];
    assertHasShadowRoot(): asserts this is HTMLElement & {
        shadowRoot: ShadowRootWithStyle;
    };
    show(show: boolean): void;
    open(): void;
    private isLoaderRunning;
    private explicitClose;
    close(): void;
    hideIframe(): void;
    showIframe(): void;
    getLoaderElement(): HTMLElement;
    getErrorElement(): HTMLElement;
    attributeChangedCallback(name: string, oldValue: string, newValue: string): void;
    connectedCallback(): void;
    constructor();
}
export {};
//# sourceMappingURL=ModalBox.d.ts.map