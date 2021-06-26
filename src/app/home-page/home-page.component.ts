import { Component, OnInit, ViewChild } from '@angular/core'
import { MatPaginator } from '@angular/material/paginator'
import { MatSort } from '@angular/material/sort'
import { MatTableDataSource } from '@angular/material/table'
import { Observable } from 'rxjs'
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog'
import { delay } from 'rxjs/operators'

import { CrewDialogComponent } from './dialogs/crew/crew-dialog.component'

import { LaunchesType, LaunchService } from '../services/launch/launch.service'
import { PayloadDialogComponent } from './dialogs/payload/payload-dialog.component'
import { Data } from '../models/data'
import { ComponentType } from '@angular/cdk/portal'

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  public launchType: LaunchesType = 'past'
  private response: Observable<any>
  public isLoadingResults = true;
  public displayedColumns: string[] = ['date', 'success', 'payload', 'crew'];
  public dataSource: MatTableDataSource<Data>;

  @ViewChild(MatPaginator) paginator: MatPaginator
  @ViewChild(MatSort) sort: MatSort
  constructor (
    private launchService: LaunchService,
    private dialog: MatDialog
  ) {
    this.launchService.get().pipe(delay(1000)).subscribe(response => {
      this.dataSource = new MatTableDataSource(response)
      this.dataSource.paginator = this.paginator
      this.dataSource.sort = this.sort
      this.isLoadingResults = false
    })


  }

  ngOnInit (): void {
  }

  ngAfterViewInit (): void {

  }

  updateTable (e: any): void {
    this.isLoadingResults = true
    this.launchService.get(this.launchType).subscribe(response => {
      this.dataSource = new MatTableDataSource(response)
      this.dataSource.paginator = this.paginator
      this.dataSource.sort = this.sort
      this.isLoadingResults = false
    })
  }

  applyFilter (event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value
    this.dataSource.filter = filterValue.trim().toLowerCase()

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage()
    }
  }

  openDialogInfo (type: "crew" | "payloads", ids: string[]): void {
    this.dialog.open(
      type === "crew" ? CrewDialogComponent : PayloadDialogComponent as ComponentType<CrewDialogComponent | PayloadDialogComponent>,
      {
        data: {
          ids
        }
      }
    )
  }


}
