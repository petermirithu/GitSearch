import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[appHover]'
})
export class HoverDirective {

  constructor(private elementRef:ElementRef,private renderer:Renderer2) { }

  @HostListener('mouseenter') mouseover(){
    this.renderer.setStyle(this.elementRef.nativeElement, 'color', 'red');
  }
  @HostListener('mouseleave') mouseleave(){
    this.renderer.setStyle(this.elementRef.nativeElement, 'color', 'black');
    
  }
}

