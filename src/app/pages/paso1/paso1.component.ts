import { Component, OnInit } from '@angular/core';
import { WizardComponent } from '../../components/wizard/wizard.component';

@Component({
  selector: 'app-paso1',
  templateUrl: './paso1.component.html',
  styleUrls: ['./paso1.component.css']
})
export class Paso1Component implements OnInit {

  constructor(
    public wizard:WizardComponent
  ) { }

  ngOnInit(): void {
  }

 
}
