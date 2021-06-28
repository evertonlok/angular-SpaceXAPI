import { HttpClientModule } from '@angular/common/http'
import { TestBed } from '@angular/core/testing'
import { Rocket } from 'src/app/models/rocket'

import { RocketService } from './rocket.service'

describe('RocketService', () => {
  let service: RocketService

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule
      ]
    })
    service = TestBed.inject(RocketService)
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })

  it('should return at least one rocket from API', (done: DoneFn) => {
    service.get().subscribe((rockets: Rocket[]) => {
      expect(rockets.length).toBeGreaterThan(0)
      done()
    })
  })

  it('should return rockets which query text contains on its name', (done: DoneFn) => {
    const queryText = 'falcon'
    service.getByName(queryText).subscribe((rockets: Rocket[]) => {
      expect(rockets.every(rocket => new RegExp(`${ queryText }`, 'i').test(rocket.name))).toBeTrue()
      done()
    })
  })
})
