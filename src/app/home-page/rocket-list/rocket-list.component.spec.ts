import { HttpClientModule } from '@angular/common/http'
import { ComponentFixture, ComponentFixtureAutoDetect, TestBed } from '@angular/core/testing'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { MatAutocompleteModule } from '@angular/material/autocomplete'
import { MatCardModule } from '@angular/material/card'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatIconModule } from '@angular/material/icon'
import { MatInputModule } from '@angular/material/input'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { RocketListComponent } from './rocket-list.component'

describe('RocketListComponent', () => {
  let component: RocketListComponent
  let fixture: ComponentFixture<RocketListComponent>
  let componentElement: HTMLElement

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        MatAutocompleteModule,
        FormsModule,
        MatFormFieldModule,
        ReactiveFormsModule,
        MatInputModule,
        BrowserAnimationsModule,
        MatCardModule,
        MatIconModule
      ],
      declarations: [ RocketListComponent ],
      providers: [ { provide: ComponentFixtureAutoDetect, useValue: true }]
    })
      .compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(RocketListComponent)
    component = fixture.componentInstance
    componentElement = fixture.nativeElement
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  it('should render the autocomplete', () => {
    const autocomplete = componentElement.querySelector('mat-form-field')
    expect(autocomplete).toBeTruthy()
  })

  it('should render one rocket card', async () => {
    await fixture.whenStable()
    const card = componentElement.querySelector('mat-card')
    expect(card).toBeTruthy()
  })
})
