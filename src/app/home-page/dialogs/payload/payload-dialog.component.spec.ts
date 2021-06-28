import { HttpClientModule } from '@angular/common/http'
import { ComponentFixture, TestBed } from '@angular/core/testing'
import { MatDialogModule, MAT_DIALOG_DATA } from '@angular/material/dialog'

import { PayloadDialogComponent } from './payload-dialog.component'

describe('PayloadDialogComponent', () => {
  let component: PayloadDialogComponent
  let fixture: ComponentFixture<PayloadDialogComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        MatDialogModule,
        HttpClientModule
      ],
      providers: [ { provide: MAT_DIALOG_DATA, useValue: {} } ],
      declarations: [ PayloadDialogComponent ]
    })
      .compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(PayloadDialogComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
