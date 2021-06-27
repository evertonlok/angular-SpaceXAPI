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

  public crews: Crew[]
  constructor (
  @Inject(MAT_DIALOG_DATA) public data: { ids: string[] },
    private crewService: CrewService
  ) {
  }

  ngOnInit (): void {
    this.crewService.findByIds(this.data.ids).subscribe((crews: Crew[]) => {
      this.crews = crews
    })
  }

  public getStatus (type: CrewStatus): string {
    switch(type) {
      case 'active': return 'Ativo'
      case 'inactive': return 'Inativo'
      case 'retired': return 'Aposentado'
      default: return 'Desconhecido'
    }
  }

}
