import { Component, Inject, OnInit } from '@angular/core'
import { MAT_DIALOG_DATA } from '@angular/material/dialog'
import { Crew, CrewStatus } from 'src/app/models/crew'

import { CrewService } from 'src/app/services/crew/crew.service'

@Component({
  selector: 'app-crew-dialog',
  templateUrl: './crew-dialog.component.html',
  styleUrls: ['./crew-dialog.component.scss']
})
export class CrewDialogComponent implements OnInit {

  public crew: Crew[]
  constructor (
  @Inject(MAT_DIALOG_DATA) public data: { ids: string[] },
    private crewService: CrewService
  ) {
  }

  ngOnInit (): void {
    this.crewService.findByIds(this.data.ids).subscribe((crew: Crew[]) => {
      this.crew = crew
    })
  }

  public getStatus (type: CrewStatus): string {
    switch(type) {
      case 'active': return 'Active'
      case 'inactive': return 'Inactive'
      case 'retired': return 'Retired'
      default: return 'Unknown'
    }
  }

}
