import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs/internal/Observable'
import { BASE_URL_API } from 'src/app/constants'
import { Payload, PayloadProjection } from 'src/app/models/payload'
import { QueryParams } from 'src/app/models/query'
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class PayloadService {

  constructor (
    private http: HttpClient
  ) { }

  findByIds (ids: string[]): Observable<Payload[]> {
    return this.http.post<QueryParams<Payload>>(`${ BASE_URL_API }/payloads/query`, {
      options: {
        select: PayloadProjection
      },
      query: {
        _id: {
          $in: ids
        }
      }
    }).pipe(map(payload => payload.docs))
  }
}
