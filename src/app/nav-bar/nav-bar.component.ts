import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-nav-bar",
  template: `
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="container">
        <div class="navbar-brand">
          <a class="navbar-item" routerLink="/home">
            <strong>Home</strong>
          </a>

          <a
            role="button"
            class="navbar-burger burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div id="navbarBasicExample" class="navbar-menu">
          <div class="navbar-start">
            <a class="navbar-item" routerLink="/input">Input</a>
            <a class="navbar-item" routerLink="/dashboard">Calculations</a>
          </div>
        </div>
      </div>
    </nav>
  `,
  styles: [],
})
export class NavBarComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
