import { Directive, Input, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[sysBadge]'
})
export class CustomBadgeDirective {
  @Input('sysBadge') badgeContent: string;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {
    this.setBadgeContent();
  }

  private setBadgeContent(): void {
    const badge = this.renderer.createElement('span');
    const text = this.renderer.createText(this.badgeContent);
    this.renderer.appendChild(badge, text);
    this.renderer.addClass(badge, 'sys-badge-content');
    this.renderer.appendChild(this.el.nativeElement, badge);
  }
}
