import { Component, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { routes } from '../../app.routes';

@Component({
  selector: 'app-promise',
  standalone:true,
  imports: [ RouterModule],
  templateUrl: './promise.html',
  styleUrl: './promise.scss',
})
export class Promise {

 route=inject(Router)

  showLove() {
  alert("You just made me the happiest person alive, love you bangaram 🤗😘✨💫❤️");
}

navigate(){
  this.route.navigate(['/'])

}


}
