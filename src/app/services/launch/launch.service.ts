import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { BASE_URL_API } from 'src/app/constants'

export type LaunchesType = "past" | "future"

@Injectable({
  providedIn: 'root'
})
export class LaunchService {
  constructor (
    private http: HttpClient
  ) { }

  public get (type: LaunchesType = 'past'): Observable<any> {
    return this.http.get(`${ BASE_URL_API }/launches/${ type === 'past' ? 'past' : 'upcoming' }`)
  }
}
