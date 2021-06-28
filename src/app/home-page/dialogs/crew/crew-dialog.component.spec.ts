import { HttpClientModule } from '@angular/common/http'
import { ComponentFixture, TestBed } from '@angular/core/testing'
import { MatDialogModule, MAT_DIALOG_DATA } from '@angular/material/dialog'

import { CrewDialogComponent } from './crew-dialog.component'

describe('CrewDialogComponent', () => {
  let component: CrewDialogComponent
  let fixture: ComponentFixture<CrewDialogComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        MatDialogModule,
        HttpClientModule
      ],
      providers: [ { provide: MAT_DIALOG_DATA, useValue: {} } ],
      declarations: [ CrewDialogComponent ]
    })
      .compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(CrewDialogComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
