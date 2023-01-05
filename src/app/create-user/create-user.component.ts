import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";

interface Birthday {
  day: string
  month: string
  year: string
}
interface createUser {
  Id?: number
  FirstName: string
  LastName:  string
  BirthDay:  string
  Gender:     boolean | string
}

interface router {
  Id: number | null
}

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit{
  constructor(private route: ActivatedRoute, private httpClient: HttpClient, private router: Router) {}

  public rout: router = {
    Id: null
  }

  public createMode: boolean = true

  public defaultBirthday: Birthday = {
    day: "",
    month: "",
    year: ""
  }

  public create: createUser = {
    FirstName: "",
    LastName: "",
    BirthDay: "",
    Gender: true
  }
  ngOnInit() {
    this.rout.Id = Number(this.route.snapshot.paramMap.get('id'));
    if (this.rout.Id != null) {
      this.createMode = false
    } else {
      this.createMode = true
    }
  }
  CreateUserOrUpdate() {
    const url = '/user'
    this.create.BirthDay = `${this.defaultBirthday.year}-${this.defaultBirthday.month.padStart(2, "0")}-${this.defaultBirthday.day.padStart(2, "0")}`
    this.create.Gender = this.create.Gender == 'T' ? true : false
    if(this.createMode) {
      this.httpClient.post(url, this.create).subscribe()
    } else {
      const update = {...this.create, ...this.rout}
      console.log(update)
      this.httpClient.put(url, update).subscribe()
    }

  }
}
