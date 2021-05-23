import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from "@angular/core";

@Directive({
  selector: '[appDropDown]'
})

export class DropDownDirective {

  // @HostBinding('class.open') isOpen: boolean = false;

  // @HostListener('click') toggleOpen(){
  //   this.isOpen = !this.isOpen
  // }

  @HostBinding('disabled') isDisabled: boolean = false

  //- My Solution 
  // constructor(private elemRef: ElementRef, private rndr: Renderer2){};

  // openState: boolean = false;

  // @HostListener('click') click(eventData: Event){
  //   console.log(this.openState)
  //   if(this.openState){
  //     this.rndr.removeClass(this.elemRef.nativeElement, 'open')
  //   } else {
  //     this.rndr.addClass(this.elemRef.nativeElement,'open')
  //   }
  //   this.openState = !this.openState
  // }
}