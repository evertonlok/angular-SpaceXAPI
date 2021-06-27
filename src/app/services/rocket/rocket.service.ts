import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { BASE_URL_API } from 'src/app/constants'
import { Rocket, RocketProjection } from 'src/app/models/rocket'
import { map } from 'rxjs/operators'
import { QueryParams } from 'src/app/models/query'

@Injectable({
  providedIn: 'root'
})
export class RocketService {

  constructor (
    private http: HttpClient
  ) {
  }

  get (): Observable<Rocket[]> {
    return this.http.post<QueryParams<Rocket>>(`${ BASE_URL_API }/rockets/query`, {
      options: {
        limit: 5,
        select: RocketProjection
      }
    }).pipe(map(rocket => rocket.docs))
  }

  getByName (query: string): Observable<Rocket[]> {
    return this.http.post<QueryParams<Rocket>>(`${ BASE_URL_API }/rockets/query`, {
      query: {
        name: {
          $regex: query,
          $options: 'i'
        }
      }
    }).pipe(map(rocket => rocket.docs))
  }
}
