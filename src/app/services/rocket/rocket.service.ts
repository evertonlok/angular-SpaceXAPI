import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { BASE_URL_API } from 'src/app/constants'
import { Rocket } from 'src/app/models/rocket'

@Injectable({
  providedIn: 'root'
})
export class RocketService {

  constructor (
    private http: HttpClient
  ) {
  }

  getAll (): Observable<any> {
    return this.http.get<any>(`${ BASE_URL_API }/rockets`)
  }
}
