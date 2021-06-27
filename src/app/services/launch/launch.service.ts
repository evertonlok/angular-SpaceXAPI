import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { BASE_URL_API } from 'src/app/constants'
import { Launch, LaunchesType } from 'src/app/models/launch'
@Injectable({
  providedIn: 'root'
})
export class LaunchService {
  constructor (
    private http: HttpClient
  ) { }

  public get (type: LaunchesType = 'past'): Observable<Launch[]> {
    return this.http.get<Launch[]>(`${ BASE_URL_API }/launches/${ type === 'past' ? 'past' : 'upcoming' }`)
  }
}
