import { Component, OnInit } from "@angular/core";
import { Suggestion } from "src/assets/types/suggestion";

@Component({
  selector: "app-input",
  templateUrl: "./input.component.html",
  styleUrls: ["./input.component.css"],
})
export class InputComponent implements OnInit {
  newSugestion: Suggestion = {
    supspect: "",
    refuted_By_User: "",
    refuted_Card: "",
    room: "",
    userName: "",
    weapon: "",
  };
  constructor() {}

  ngOnInit() {}
}
