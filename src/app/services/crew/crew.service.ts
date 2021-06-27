import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Crew } from 'src/app/models/crew'
import { Observable } from 'rxjs'
import { BASE_URL_API } from 'src/app/constants'
import { QueryParams } from 'src/app/models/query'
import { map } from 'rxjs/operators'
@Injectable({
  providedIn: 'root'
})
export class CrewService {

  constructor (
    private http: HttpClient
  ) { }

  findByIds (ids: string[]): Observable<Crew[]> {
    return this.http.post<QueryParams<Crew>>(`${ BASE_URL_API }/crew/query`, {
      query: {
        _id: {
          $in: ids
        }
      }
    }).pipe(map(crew => crew.docs))
  }
}
