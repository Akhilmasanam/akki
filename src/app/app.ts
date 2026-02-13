import { Component,signal } from '@angular/core';
import { RouterOutlet,RouterLink } from '@angular/router';
import { Intro } from "./pages/intro/intro";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, Intro],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class AppComponent {


  isvisble:boolean=true


  hidden(){
    this.isvisble=!this.isvisble
  }
}
