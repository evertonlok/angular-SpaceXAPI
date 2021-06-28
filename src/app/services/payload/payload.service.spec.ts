import { HttpClientModule } from '@angular/common/http'
import { TestBed } from '@angular/core/testing'
import { Payload } from 'src/app/models/payload'

import { PayloadService } from './payload.service'

describe('PayloadService', () => {
  let service: PayloadService
  const defaultId = '5eb0e4b5b6c3bb0006eeb1e1'
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule
      ]
    })
    service = TestBed.inject(PayloadService)
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })

  it('should return at least one payload from API', (done: DoneFn) => {
    service.findByIds([ defaultId ]).subscribe((payloads: Payload[]) => {
      expect(payloads).toHaveSize(1)
      done()
    })
  })

  it('should return the same payload as the given id', (done: DoneFn) => {
    service.findByIds([ defaultId ]).subscribe((payloads: Payload[]) => {
      expect(payloads.shift().id).toEqual(defaultId)
      done()
    })
  })

  it('should find more multiples payloads given the ids', (done: DoneFn) => {
    service.findByIds([ defaultId, '5eb0e4b6b6c3bb0006eeb1e2', '5eb0e4b6b6c3bb0006eeb1e3' ]).subscribe((payloads: Payload[]) => {
      expect(payloads).toHaveSize(3)
      expect(payloads.every(payload => payloads.find(anotherPayload => payload.id === anotherPayload.id))).toBeTrue()
      done()
    })
  })
})
