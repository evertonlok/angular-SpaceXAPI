import { Directive, ElementRef, HostListener } from '@angular/core'

@Directive({
  selector: '[appShowcase]'
})
export class ShowcaseDirective {
  private isDown = false
  private startX = 0
  private scrollLeft = 0

  constructor (private el: ElementRef) {
  }

  @HostListener('mousedown', ['$event']) onMouseDown (e: MouseEvent): void {
    this.isDown = true
    this.el.nativeElement.classList.add('active')
    this.startX = e.pageX - this.el.nativeElement.offsetLeft
    this.scrollLeft = this.el.nativeElement.scrollLeft
  }

  @HostListener('mouseleave', ['$event']) onMouseLeave (e: MouseEvent): void {
    this.isDown = false
    this.el.nativeElement.classList.remove('active')
  }

  @HostListener('mouseup', ['$event']) onMouseUp (e: MouseEvent): void {
    this.isDown = false
    this.el.nativeElement.classList.remove('active')
  }

  @HostListener('mousemove', ['$event']) onMouseMove (e: MouseEvent): void {
    if(!this.isDown) return

    e.preventDefault()

    const x = e.pageX - this.el.nativeElement.offsetLeft
    const steps = (x - this.startX) * 1
    this.el.nativeElement.scrollLeft = this.scrollLeft - steps
  }
}
