import { Component, OnInit } from '@angular/core'
import { RocketService } from 'src/app/services/rocket/rocket.service'
@Component({
  selector: 'app-rocket-list',
  templateUrl: './rocket-list.component.html',
  styleUrls: ['./rocket-list.component.scss']
})
export class RocketListComponent implements OnInit {
  public inputRocketName = ''
  public rockets$: any
  constructor (
    private rocketService: RocketService
  ) { }

  ngOnInit (): void {

    this.rocketService.getAll().subscribe((rockets) => {
      this.rockets$ = rockets
    })
  }

  applyFilter (): void {
  }

}
