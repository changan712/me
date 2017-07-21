import {Directive, HostListener, ElementRef, EventEmitter, Output} from '@angular/core';
import {EventsService} from "../../app/core/event.service";

/**
 * Generated class for the AutoHeightDirective directive.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/DirectiveMetadata-class.html
 * for more info on Angular Directives.
 */
@Directive({
    selector: 'ion-textarea[auto-height]' // Attribute selector
})
export class AutoHeightDirective {

    @HostListener("input", ["$event.target"])
    onInput(textArea: HTMLTextAreaElement): void {
        this.adjust();
    }

    @Output() onHeightChange: EventEmitter<any> = new EventEmitter();

    constructor(public element: ElementRef, private eventSv: EventsService) {
    }

    ngOnInit(): void {
        this.adjust();
    }

    adjust(): void {
        let ta = this.element.nativeElement.querySelector("textarea");
        if (ta) {
            ta.style.height = "auto";
            let scrollHeight = ta.scrollHeight;
            ta.style.height = scrollHeight + "px";
            this.onHeightChange.emit(scrollHeight);
            this.eventSv.broadcast('autoHeightChange', {height: scrollHeight})
        }

    }

}
