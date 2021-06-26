import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Crew } from 'src/app/models/crew'
import { Observable } from 'rxjs'
import { BASE_URL_API } from 'src/app/constants'
@Injectable({
  providedIn: 'root'
})
export class CrewService {

  constructor (
    private http: HttpClient
  ) { }

  findByIds (ids: string[]): Observable<any> {
    return this.http.post(`${ BASE_URL_API }/crew/query`, {
      query: {
        _id: {
          $in: ids
        }
      }
    })
  }
}
