import { Component,inject,signal } from '@angular/core';
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

  play: boolean = true;
  isvisble: boolean = true;
audio: HTMLAudioElement = new Audio('../assets/3-moonu-bgm-hq-background-music-appus-1_Wvl3DWx9.mp3');



  ngOnInit(): void {
    // this.audio = new Audio('assets/3-moonu-bgm-hq-background-music-appus-1_Wvl3DWx9.mp3');
    this.audio.loop = true; // optional if you want background music to loop
    if(this.play){
      this.audio.play().catch((err: any) => console.log("Autoplay blocked:", err));
    }
  }

togglePlay() {
    this.play = !this.play;
    console.log(this.play)
    if (this.play) {
      this.audio.play().catch(err => console.log("Autoplay blocked:", err));
    } else {
      this.audio.pause();
    }
  }


  hidden(){
    this.isvisble=!this.isvisble
  }
}
