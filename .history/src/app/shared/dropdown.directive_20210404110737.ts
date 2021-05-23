import { Directive, ElementRef, HostListener, Renderer2 } from "@angular/core";

@Directive({
  selector: '[appDropDown]'
})

export class DropDownDirective {
  constructor(private elemRef: ElementRef, private rndr: Renderer2){};

  openState: boolean = false;

  @HostListener('click') click(eventData: Event){
    if(this.openState){
      this.rndr.removeClass('open')
    } else {
      this.rndr.addClass('open')
    }
  }
}