import { HttpClientModule } from '@angular/common/http'
import { TestBed } from '@angular/core/testing'

import { LaunchService } from './launch.service'

describe('LaunchService', () => {
  let service: LaunchService

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule
      ]
    })
    service = TestBed.inject(LaunchService)
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })

  it('should return at least one launch', (done: DoneFn) => {
    service.get().subscribe((launches) => {
      expect(launches.length).toBeGreaterThan(0)
      done()
    })
  })

})
