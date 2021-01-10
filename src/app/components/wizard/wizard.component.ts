import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-wizard',
  templateUrl: './wizard.component.html',
  styleUrls: ['./wizard.component.css']
})
export class WizardComponent implements OnInit {

  datosUsuario: FormGroup;
  mostrarBotones: boolean = false;

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _router: Router,
    private _formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this._router.navigateByUrl("/wizard/p1");
    this.crearFormulario();

  }

  
  crearFormulario() {
    this.datosUsuario = this._formBuilder.group({
      nombre: ['', [Validators.required, Validators.minLength(3)]],
      apellido: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.minLength(3)]],
      pais: ['', [Validators.required, Validators.minLength(3)]],
      ciudad: ['', [Validators.required, Validators.minLength(3)]],
      mensaje: ['', [Validators.required, Validators.minLength(10)]],
    });
  }


  nav(criterio: string) {
    const rutas = this._activatedRoute.routeConfig.children;
    const paginaActual = this._activatedRoute.children[0].snapshot.routeConfig.path;
    let pos = rutas.findIndex(el => el.path == paginaActual);

    if (criterio === 'ant') {
      pos -= 1;
      if (pos >= 0) {
        let ant = rutas?.[pos].path;
        this._router.navigateByUrl(`/wizard/${ant}`);
      }
    }
    if (criterio === 'sig') {
      pos += 1;
      if (pos < (rutas.length - 1)) {
        let sig = rutas?.[pos].path;
        this._router.navigateByUrl(`/wizard/${sig}`);
      }
    }
  }

  
  validar(control: string): boolean {
    return (this.datosUsuario.get(control).invalid && this.datosUsuario.get(control).touched);
  }





}
