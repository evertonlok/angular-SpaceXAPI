import { Component, ElementRef, OnInit, ViewChild } from '@angular/core'
import { Observable } from 'rxjs'
import { History } from 'src/app/models/history'
import { HistoryService } from 'src/app/services/history/history.service'

@Component({
  selector: 'app-history-events',
  templateUrl: './history-events.component.html',
  styleUrls: ['./history-events.component.scss']
})
export class HistoryEventsComponent implements OnInit {
  @ViewChild('wrapper') wrapper: ElementRef
  public historialEvents$: any
  private isDown = false
  private startX: number
  private scrollLeft: number

  constructor (
    private historyService: HistoryService
  ) { }

  ngOnInit (): void {
    this.historyService.getAll().subscribe((historialEvents) => {
      this.historialEvents$ = historialEvents
    })
  }

  ngAfterViewInit (): void {
    this.wrapper.nativeElement.addEventListener('mousedown', (e: any) => {
      this.isDown = true
      this.wrapper.nativeElement.classList.add('active')
      this.startX = e.pageX - this.wrapper.nativeElement.offsetLeft
      this.scrollLeft = this.wrapper.nativeElement.scrollLeft
    })

    this.wrapper.nativeElement.addEventListener('mouseleave', () => {
      this.isDown = false
      this.wrapper.nativeElement.classList.remove('active')
    })

    this.wrapper.nativeElement.addEventListener('mouseup', () => {
      this.isDown = false
      this.wrapper.nativeElement.classList.remove('active')
    })

    this.wrapper.nativeElement.addEventListener('mousemove', (e: any) => {
      if(!this.isDown) return
      e.preventDefault()
      const x = e.pageX - this.wrapper.nativeElement.offsetLeft
      const steps = (x - this.startX) * 1
      this.wrapper.nativeElement.scrollLeft = this.scrollLeft - steps
    })
  }
}
