import { Component, OnInit } from '@angular/core';
import { WizardComponent } from 'src/app/components/wizard/wizard.component';

@Component({
  selector: 'app-paso3',
  templateUrl: './paso3.component.html',
  styleUrls: ['./paso3.component.css']
})
export class Paso3Component implements OnInit {

  constructor(
    public wizard:WizardComponent

  ) { }

  ngOnInit(): void {
  }

}
