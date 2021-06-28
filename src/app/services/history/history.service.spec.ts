import { HttpClientModule } from '@angular/common/http'
import { TestBed } from '@angular/core/testing'

import { HistoryService } from './history.service'

describe('HistoryService', () => {
  let service: HistoryService

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientModule]
    })
    service = TestBed.inject(HistoryService)
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })

  it('should get at least one historical event', (done: DoneFn) => {
    service.getAll().subscribe((historicalEvents) => {
      expect(historicalEvents.length).toBeGreaterThan(0)
      done()
    })
  })
})
