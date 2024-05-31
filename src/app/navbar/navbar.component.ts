import {  Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  mainNav: HTMLElement | null = null;
  navBarToggle: HTMLElement | null = null;

  constructor() {}

  ngOnInit(): void {
    this.mainNav = document.getElementById("js-menu");
    this.navBarToggle = document.getElementById("js-navbar-toggle");

    if (this.navBarToggle && this.mainNav) {
      this.navBarToggle.addEventListener("click", () => {
        this.mainNav!.classList.toggle("active");
      });
    }
  }
}
