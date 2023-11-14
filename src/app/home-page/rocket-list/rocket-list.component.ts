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
  public isLoadingResult = true
  public rocketControl = new FormControl()
  public rockets: Rocket[]
  public rocket: Rocket

  constructor (
    private rocketService: RocketService
  ) { }

  ngOnInit (): void {
    this.rocketService.get().subscribe((rockets: Rocket[]) => {
      this.isLoadingResult = false

      this.rockets = rockets
    })
  }
}
