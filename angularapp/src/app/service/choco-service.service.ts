import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Chocolate} from "src/app/class/chocolate";

@Injectable({
  providedIn: 'root'
})
export class ChocoServiceService {

  private readonly chocourl: string;

  constructor(private http: HttpClient) {
    this.chocourl = 'http://localhost:8080/chocolates';
  }

  public findAll(): Observable<Chocolate[]> {
    return this.http.get<Chocolate[]>(this.chocourl);
  }

  public save(choco?: Chocolate) {
    return this.http.post<Chocolate>('http://localhost:8080/chocolate/add', choco);
  }
}
