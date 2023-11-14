import { Component, OnInit, ViewChild } from '@angular/core'
import { MatPaginator } from '@angular/material/paginator'
import { MatSort } from '@angular/material/sort'
import { MatTableDataSource } from '@angular/material/table'
import { MatDialog } from '@angular/material/dialog'

import { CrewDialogComponent } from './dialogs/crew/crew-dialog.component'
import { PayloadDialogComponent } from './dialogs/payload/payload-dialog.component'

import { LaunchService } from '../services/launch/launch.service'
import { ComponentType } from '@angular/cdk/portal'
import { Launch, LaunchesType } from '../models/launch'

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  constructor () {}

  ngOnInit (): void {

  }
}
