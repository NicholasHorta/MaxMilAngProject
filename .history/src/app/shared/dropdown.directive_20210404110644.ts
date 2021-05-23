import { Directive, ElementRef, HostListener, Renderer2 } from "@angular/core";

@Directive({
  selector: '[appDropDown]'
})

export class DropDownDirective {
  constructor(private elemRef: ElementRef, private rndr: Renderer2){};

  openProp: boolean = false;

  @HostListener('click') click(eventData: Event){
    this.rndr.addClass('open')
  }
}