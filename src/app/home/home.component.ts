import { Component, OnInit } from "@angular/core";
import { User } from "src/assets/types/user";
import * as _ from "lodash";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit {
  users: User[] = [];
  newUser: User = {
    userName: "",
    cards: 0,
    postion: 0,
    userId: "",
  };
  constructor() {}

  ngOnInit() {}

  add(_newUser: User): void {
    console.log(_newUser);
    _newUser.userName = _newUser.userName.trim();
    if (!_newUser.userName) {
      _newUser.userName = "New User";
    }
    if (_newUser.postion === 0) {
      _newUser.postion = this.users.length + 1;
    }
    if (_newUser.cards === 0) {
      _newUser.cards = 1;
    }
    this.newUser = {
      userName: "",
      cards: 0,
      postion: 0,
      userId: "",
    };
    this.users.push(_newUser);
    this.users = _.sortBy(this.users, "postion");
  }
}
