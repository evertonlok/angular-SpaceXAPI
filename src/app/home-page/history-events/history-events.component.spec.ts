import { HttpClientModule } from '@angular/common/http'
import { ComponentFixture, TestBed } from '@angular/core/testing'
import { MatButtonModule } from '@angular/material/button'
import { MatCardModule } from '@angular/material/card'
import { MatIconModule } from '@angular/material/icon'
import { HistoryService } from 'src/app/services/history/history.service'
import { ComponentFixtureAutoDetect } from '@angular/core/testing'

import { HistoryEventsComponent } from './history-events.component'

describe('HistoryEventsComponent', () => {
  let component: HistoryEventsComponent
  let fixture: ComponentFixture<HistoryEventsComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:
        [
          HttpClientModule,
          MatCardModule,
          MatButtonModule,
          MatIconModule
        ],
      declarations: [ HistoryEventsComponent ],
      providers: [ HistoryService, { provide: ComponentFixtureAutoDetect, useValue: true } ]
    }).compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoryEventsComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  it('should render at least one card', async () => {
    await fixture.whenStable()
    const componentElement: HTMLElement = fixture.nativeElement
    const wrapper = componentElement.querySelector('#wrapper')
    expect(Array.from(wrapper.querySelectorAll('.mat-card')).length).toBeGreaterThan(0)
  })
})
