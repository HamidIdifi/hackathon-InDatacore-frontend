import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Student} from "../../student";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }

  /**
   * This method returns students details
   */
  getStudentsInformation(): Observable<Student[]>{
    return this.httpClient.get<Student[]>(`${environment.baseURL}students.json`);
  }
}
