import { HttpClientModule } from '@angular/common/http'
import { TestBed } from '@angular/core/testing'
import { Crew } from 'src/app/models/crew'

import { CrewService } from './crew.service'

describe('CrewService', () => {
  let service: CrewService
  const defaultId = "5ebf1a6e23a9a60006e03a7a"
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule
      ]
    })
    service = TestBed.inject(CrewService)
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })

  it('should return a crew from API', (done: DoneFn) => {
    service.findByIds([ defaultId ]).subscribe((crews: Crew[]) => {
      expect(crews).toHaveSize(1)
      done()
    })
  })

  it('should return the same crew as the given id', (done: DoneFn) => {
    service.findByIds([ defaultId ]).subscribe((crews: Crew[]) => {
      expect(crews.shift().id).toEqual(defaultId)
      done()
    })
  })

  it('should find more multiples crews given the ids', (done: DoneFn) => {
    service.findByIds([ defaultId, '5ebf1b7323a9a60006e03a7b', '5f7f1543bf32c864a529b23e' ]).subscribe((crews: Crew[]) => {
      expect(crews).toHaveSize(3)
      expect(crews.every(crew => crews.find(anotherCrew => crew.id === anotherCrew.id))).toBeTrue()
      done()
    })
  })
})
