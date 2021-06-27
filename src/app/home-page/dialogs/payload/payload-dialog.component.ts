import { Component, Inject, OnInit } from '@angular/core'
import { MAT_DIALOG_DATA } from '@angular/material/dialog'
import { Payload } from 'src/app/models/payload'

import { PayloadService } from 'src/app/services/payload/payload.service'

@Component({
  selector: 'app-payload-dialog',
  templateUrl: './payload-dialog.component.html',
  styleUrls: ['./payload-dialog.component.scss']
})
export class PayloadDialogComponent implements OnInit {

  public payloads: Payload[]
  constructor (
    @Inject(MAT_DIALOG_DATA) public data: { ids: string[] },
    private payloadService: PayloadService
  ) { }

  ngOnInit (): void {
    this.payloadService.findByIds(this.data.ids).subscribe((payloads: Payload[]) => {
      this.payloads = payloads
    })
  }

}
