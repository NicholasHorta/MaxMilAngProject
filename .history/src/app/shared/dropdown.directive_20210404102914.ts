import { Directive, ElementRef, HostListener, Renderer2 } from "@angular/core";

@Directive({
  selector: '[appDropDown]'
})

export class DropDownDirective {
  constructor(private elemRef: ElementRef, private rndr: Renderer2){};

  @HostListener('mouseover') mouseover(eventData: Event){
    this.elemRef.nativeElement
  }
}