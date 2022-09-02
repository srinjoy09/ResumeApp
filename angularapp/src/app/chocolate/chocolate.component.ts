import { Component, OnInit } from '@angular/core';
import {Chocolate} from "src/app/class/chocolate";
import {ChocoServiceService} from "../service/choco-service.service";

@Component({
  selector: 'app-chocolate',
  templateUrl: './chocolate.component.html',
  styleUrls: ['./chocolate.component.scss']
})
export class ChocolateComponent implements OnInit {

  chocos: Chocolate[] | undefined;

  constructor(private chocoservice: ChocoServiceService) { }

  ngOnInit(): void {
    this.chocoservice.findAll().subscribe(
      data => this.chocos=data
    )
  }
}
