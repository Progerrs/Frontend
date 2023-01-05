import { Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";

interface TemplateUser{
  Id:         number
  FirstName: string
  LastName:  string
  BirthDay:  string
  Gender:     string
  Years:      number
}
@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit{
  constructor(private httpClient: HttpClient) {}
  public users: TemplateUser[] = []
  userUrl: string = '/user'
  public LoadUsers(): Observable<TemplateUser[]> {
    return this.httpClient
      .get<TemplateUser[]>(this.userUrl)
  }
  ngOnInit() {
    this.LoadUsers().subscribe(res => {
      this.users = res;
    })
  }

  Delete(IdUser: number) {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }), body: {"Id": IdUser}
    };
    this.httpClient.delete(this.userUrl, httpOptions).subscribe()
    this.LoadUsers().subscribe(res => {this.users = res;})
  }

}
