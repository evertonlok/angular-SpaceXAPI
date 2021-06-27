import { Component, OnInit } from '@angular/core'
import { FormControl } from '@angular/forms'
import { Observable } from 'rxjs'
import { debounceTime } from 'rxjs/operators'
import { RocketService } from 'src/app/services/rocket/rocket.service'
@Component({
  selector: 'app-rocket-list',
  templateUrl: './rocket-list.component.html',
  styleUrls: ['./rocket-list.component.scss']
})
export class RocketListComponent implements OnInit {
  public noResultsFound = false
  public isLoadingResult = true
  public rocketControl = new FormControl()
  public filteredRockets: any[] = []
  private defaultfilteredRocks: any[]
  public rocket: any
  constructor (
    private rocketService: RocketService
  ) { }

  ngOnInit (): void {
    this.rocketService.get().subscribe((rockets) => {
      this.filteredRockets = this.defaultfilteredRocks = rockets.docs
      this.rocket = rockets.docs.slice().shift()
      this.isLoadingResult = false
    })

    this.rocketControl.valueChanges.pipe(debounceTime(240)).subscribe(value => {
      if(!value)
        this.filteredRockets = this.defaultfilteredRocks
      else
        this.rocketService.getByName(value).subscribe(response => {
          this.filteredRockets = response.docs
        })
    })
  }

  public applyFilter (rocket: any): void {
    this.filteredRockets = []
    this.rocket = rocket
  }

}
