import { Component, OnInit } from '@angular/core'
import { FormControl } from '@angular/forms'
import { debounceTime, delay } from 'rxjs/operators'
import { Rocket } from 'src/app/models/rocket'
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
  public filteredRockets: Rocket[]
  private defaultfilteredRocks: Rocket[]
  public rocket: Rocket

  constructor (
    private rocketService: RocketService
  ) { }

  ngOnInit (): void {
    this.rocketService.get().subscribe((rockets: Rocket[]) => {
      this.filteredRockets = this.defaultfilteredRocks = rockets
      this.rocket = rockets.slice().shift()
      this.isLoadingResult = false
    })

    this.rocketControl.valueChanges.pipe(debounceTime(240)).subscribe((value: string) => {
      if(!value)
        this.filteredRockets = this.defaultfilteredRocks
      else
        this.rocketService.getByName(value).subscribe((rockets: Rocket[]) => {
          this.filteredRockets = rockets
        })
    })
  }

  public applyFilter (rocket: Rocket): void {
    this.filteredRockets = []
    this.rocket = rocket
  }
}
