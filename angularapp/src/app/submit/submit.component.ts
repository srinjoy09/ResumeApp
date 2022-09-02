import { Component, OnInit } from '@angular/core';
import {Chocolate} from "src/app/class/chocolate";
import {ChocoServiceService} from "../service/choco-service.service";
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-submit',
  templateUrl: './submit.component.html',
  styleUrls: ['./submit.component.scss']
})
export class SubmitComponent{

  choco: Chocolate | undefined;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private chocoservice: ChocoServiceService
  ) { this.choco = new Chocolate() }

  onSubmit() {
    this.chocoservice.save(this.choco).subscribe(result => this.gotoUserList());
  }

  gotoUserList() {
    this.router.navigate(['/view']);
  }
}
