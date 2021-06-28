import { HttpClientModule } from '@angular/common/http'
import { ComponentFixture, ComponentFixtureAutoDetect, TestBed } from '@angular/core/testing'
import { MatAutocompleteModule } from '@angular/material/autocomplete'
import { MatButtonModule } from '@angular/material/button'
import { MatButtonToggleModule } from '@angular/material/button-toggle'
import { MatCardModule } from '@angular/material/card'
import { MatDialogModule } from '@angular/material/dialog'
import { MatIcon, MatIconModule } from '@angular/material/icon'
import { MatPaginatorIntl, MatPaginatorModule } from '@angular/material/paginator'
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'
import { MatTableModule } from '@angular/material/table'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { HistoryEventsComponent } from './history-events/history-events.component'

import { HomePageComponent } from './home-page.component'
import { RocketListComponent } from './rocket-list/rocket-list.component'

describe('HomePageComponent', () => {
  let component: HomePageComponent
  let fixture: ComponentFixture<HomePageComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        MatDialogModule,
        HttpClientModule,
        MatTableModule,
        MatPaginatorModule,
        MatProgressSpinnerModule,
        BrowserAnimationsModule,
        MatIconModule,
        MatButtonModule,
        MatButtonToggleModule,
        MatAutocompleteModule,
        MatCardModule
      ],
      declarations: [ HomePageComponent, RocketListComponent, HistoryEventsComponent ],
      providers: [ { provide: ComponentFixtureAutoDetect, useValue: true }]
    })
      .compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePageComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  it('should render the table with at least one record', async () => {
    await fixture.whenStable()
    const componentElement: HTMLElement = fixture.nativeElement
    expect(Array.from(componentElement.querySelectorAll('table tbody tr')).length).toBeGreaterThan(0)
  })
})
