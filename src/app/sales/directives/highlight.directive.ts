import { Directive, Input, SimpleChanges, Renderer2, ElementRef, OnChanges } from '@angular/core';

@Directive({
    selector: '[appHighlight]'
})

export class HighlightDirective implements OnChanges {

    @Input() searchedWord: string; // searchText
    @Input() content: string; // HTML content
    @Input() classToApply: string; //class to apply for highlighting

    constructor(private el: ElementRef, private renderer: Renderer2) { }

    ngOnChanges(changes: SimpleChanges): void {
        if (!this.content) {
            return;
        }

        if (!this.searchedWord || !this.searchedWord.length || !this.classToApply) {
            //@ts-ignore
            this.renderer.setProperty(this.el.nativeElement, 'innerHTML', this.content.title);
            return;
        }

        this.renderer.setProperty(
            this.el.nativeElement,
            'innerHTML',
            this.getFormattedText()
        );
    }

    getFormattedText() {
        const re = new RegExp(`(${this.searchedWord})`, 'gi');
        //@ts-ignore
        return this.content.title.replace(re, `<span class="${this.classToApply}">$1</span>`);
    }

}