import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Launch, LaunchesType } from 'src/app/models/launch';
import { LaunchService } from 'src/app/services/launch/launch.service';
import { CrewDialogComponent } from '../dialogs/crew/crew-dialog.component';
import { PayloadDialogComponent } from '../dialogs/payload/payload-dialog.component';
import { ComponentType } from '@angular/cdk/portal';

@Component({
  selector: 'app-launches-table',
  templateUrl: './launches-table.component.html',
  styleUrls: ['./launches-table.component.scss']
})
export class LaunchesTableComponent implements OnInit {
  public launchType: LaunchesType = 'past'
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
