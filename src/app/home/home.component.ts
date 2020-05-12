import { Component, OnInit } from "@angular/core";
import { User } from "src/assets/types/user";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit {
  users: User[];
  newUser: User = {
    userName: "",
    cards: 0,
  };
  constructor() {}

  ngOnInit() {}

  add(_newUser: User): void {
    console.log(_newUser);
    _newUser.userName = _newUser.userName.trim();
    if (!_newUser.userName) {
      return;
    }
    this.users.push(_newUser);

    // this.heroService.addHero({ name } as Hero).subscribe((hero) => {
    //   this.heroes.push(hero);
    // });
  }
}
