import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs/internal/Observable'
import { BASE_URL_API } from 'src/app/constants'
import { Data } from 'src/app/models/data'

@Injectable({
  providedIn: 'root'
})
export class PayloadService {

  constructor (
    private http: HttpClient
  ) { }

  findByIds (ids: string[]): Observable<Data> {
    return this.http.post(`${ BASE_URL_API }/payloads/query`, {
      query: {
        _id: {
          $in: ids
        }
      }
    })
  }
}
