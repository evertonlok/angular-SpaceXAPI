import { Component, ElementRef, OnInit, ViewChild } from '@angular/core'
import { History } from 'src/app/models/history'
import { HistoryService } from 'src/app/services/history/history.service'

@Component({
  selector: 'app-history-events',
  templateUrl: './history-events.component.html',
  styleUrls: ['./history-events.component.scss']
})
export class HistoryEventsComponent implements OnInit {
  @ViewChild('wrapper') wrapper: ElementRef
  public historialEvents: History[]

  constructor (
    public historyService: HistoryService
  ) { }

  ngOnInit (): void {
    this.historyService.getAll().subscribe((historialEvents: History[]) => {
      this.historialEvents = historialEvents
    })
  }
}
