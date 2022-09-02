import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SampleComponent } from './sample/sample.component';
import {ChocolateComponent} from "./chocolate/chocolate.component";
import {SubmitComponent} from "./submit/submit.component";
import {ResumeComponent} from "./resume-component/resume-component.component";

const routes: Routes = [
  /*{ path: 'sample', component: SampleComponent },
  { path: 'view', component: ChocolateComponent },*/
  { path: 'submit', component: SubmitComponent },
  { path: 'resume', component: ResumeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
