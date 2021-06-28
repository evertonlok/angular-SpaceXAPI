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
  public launchType: LaunchesType= 'past'
  public isLoadingResults = true;
  public displayedColumns: string[] = ['name', 'date', 'success', 'payload', 'crew'];
  public dataSource: MatTableDataSource<Launch>;

  @ViewChild(MatPaginator) paginator: MatPaginator
  @ViewChild(MatSort) sort: MatSort
  constructor (
    private launchService: LaunchService,
    private dialog: MatDialog
  ) {
  }

  ngOnInit (): void {
    this.launchService.get().subscribe((launches: Launch[]) => {
      this.dataSource = new MatTableDataSource(launches)
      this.dataSource.paginator = this.paginator
      this.dataSource.sort = this.sort
      this.isLoadingResults = false
    })
  }

  updateTable (): void {
    this.isLoadingResults = true
    this.launchService.get(this.launchType).subscribe((launches: Launch[]) => {
      this.dataSource = new MatTableDataSource(launches)
      this.dataSource.paginator = this.paginator
      this.dataSource.sort = this.sort
      this.dataSource.paginator.firstPage()
      this.isLoadingResults = false
    })
  }

  applyFilter (event: KeyboardEvent): void {
    const filterValue = (event.target as HTMLInputElement).value
    this.dataSource.filter = filterValue.trim().toLowerCase()
    this.dataSource.filterPredicate = (data: Launch, filter: string) => new RegExp(`${ filter }`, 'i').test(data.name)

    if(this.dataSource.paginator) {
      this.dataSource.paginator.firstPage()
    }
  }

  openDialogInfo (type: "crew" | "payloads", ids: string[]): void {
    this.dialog.open(
      type === "crew" ? CrewDialogComponent : PayloadDialogComponent as ComponentType<CrewDialogComponent | PayloadDialogComponent>,
      {
        data: {
          ids
        },
        maxHeight: '90vh'
      }
    )
  }
}
