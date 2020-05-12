import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-footer",
  template: `
    <footer class="footer">
      <div class="content has-text-centered">
        <p>
          <strong>Cluedo App</strong> by
          <a href="https://www.linkedin.com/in/thomas-vos-3bb823109/"
            >Thomas Vos</a
          >.
        </p>
      </div>
    </footer>
  `,
  styles: [],
})
export class FooterComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
