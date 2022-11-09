import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  publicOrPrivate = true;
  yes = 0;
  no = 0;

  yesOrNo(result:boolean) {
    if(result) {
      this.yes++
    } else {
      this.no++
    }
  }
}
