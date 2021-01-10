import { Component, OnInit } from '@angular/core';
import { WizardComponent } from 'src/app/components/wizard/wizard.component';

@Component({
  selector: 'app-paso2',
  templateUrl: './paso2.component.html',
  styleUrls: ['./paso2.component.css']
})
export class Paso2Component implements OnInit {

  constructor(
    public wizard:WizardComponent
  ) { }

  ngOnInit(): void {
  }

}
