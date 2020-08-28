import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appAppHighlightDirective]'
})
export class AppHighlightDirectiveDirective {

  constructor(private elementReference: ElementRef) { }

  @HostListener('mouseover') onMouseOver() {  
    this.changeBackgroundColor('yellow');  
  }  
  @HostListener('mouseleave') onMouseLeave() {  
    this.changeBackgroundColor('white');  
  }  
  private changeBackgroundColor(color: string) {  
    this.elementReference.nativeElement.style.backgroundColor = color;  
  }  

}
