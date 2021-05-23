import { Directive, ElementRef, HostListener, Renderer2 } from "@angular/core";

@Directive({
  selector: '[appDropDown]'
})

export class DropDownDirective {
  constructor(private elemRef: ElementRef, private rndr: Renderer2){};

  openState: boolean = false;

  @HostListener('click') click(eventData: Event){
    console.log(this.openState)
    if(this.openState){
      this.rndr.removeClass(this.elemRef.nativeElement, 'open')
    } else {
      this.rndr.addClass(this.elemRef.nativeElement,'open')
    }
  }
}