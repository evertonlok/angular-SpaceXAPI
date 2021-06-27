import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { History } from '../../models/history'
import { Observable } from 'rxjs'
import { BASE_URL_API } from 'src/app/constants'

@Injectable({
  providedIn: 'root'
})
export class HistoryService {

  constructor (
    private http: HttpClient
  ) {
  }

  getAll (): Observable<History[]> {
    return this.http.get<History[]>(`${ BASE_URL_API }/history`)
  }
}
