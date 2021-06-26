import { Component, Inject, OnInit } from '@angular/core'
import { MAT_DIALOG_DATA } from '@angular/material/dialog'
import { Observable } from 'rxjs'
import { Crew } from 'src/app/models/crew'

import { CrewService } from 'src/app/services/crew/crew.service'

@Component({
  selector: 'app-crew-dialog',
  templateUrl: './crew-dialog.component.html',
  styleUrls: ['./crew-dialog.component.scss']
})
export class CrewDialogComponent implements OnInit {

  public crews$: any
  constructor (
    @Inject(MAT_DIALOG_DATA) public data: { ids: string[] },
    private crewService: CrewService
  ) {
  }

  ngOnInit (): void {
    this.crewService.findByIds(this.data.ids).subscribe(({ docs: crews }) => {
      this.crews$ = crews
    })
  }

}
