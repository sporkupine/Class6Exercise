import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appRandomBackgroundColor]'
})
export class RandomBackgroundColorDirective implements OnInit {
  @Input() defaultColor: string = 'transparent';
  @HostBinding('style.backgroundColor') backgroundColor: string;
  constructor(private elRef: ElementRef, private renderer: Renderer2) { }
  randomColor = 'hsla(' + (Math.floor(Math.random()*360) + ', 100%, 70%, 1)')
  randomColor2 = 'hsla(' + (Math.floor(Math.random()*360) + ', 100%, 70%, 1)')
  ngOnInit() {
    this.backgroundColor=this.randomColor;
  }

  // @HostListener()

  @HostListener('mouseenter') mouseover(eventdata: Event) {
    this.backgroundColor=this.randomColor2;
  }
  @HostListener('mouseleave') mouseleave(eventdata: Event) {
    this.backgroundColor=this.randomColor;
  }

}
