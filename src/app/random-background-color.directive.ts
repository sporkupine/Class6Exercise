import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appRandomBackgroundColor]'
})
export class RandomBackgroundColorDirective implements OnInit {
  @Input() defaultColor: string = 'transparent';
  @HostBinding('style.backgroundColor') backgroundColor: string;
  constructor(private elRef: ElementRef, private renderer: Renderer2) { }
  ngOnInit() {
    this.backgroundColor='hsla(' + (Math.floor(Math.random()*360) + ', 100%, 70%, 1)');
  }

  @HostListener('mouseenter') mouseover(eventdata: Event) {
    this.backgroundColor='hsla(' + (Math.floor(Math.random()*360) + ', 100%, 70%, 1)');
  }

}
