import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.scss']
})
export class SampleComponent {

  buttonTitle:string = "View Resume";

  visible:boolean = true;

  showhideutility() {
    this.visible = this.visible?false:true;
    this.buttonTitle = this.visible?"Hide":"Show";
  }
}
