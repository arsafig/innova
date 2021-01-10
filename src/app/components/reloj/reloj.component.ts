import { Component, OnInit } from '@angular/core';

interface Hora {
  h: number,
  m: number,
  s: number,
  ms: number,
}

@Component({
  selector: 'app-reloj',
  templateUrl: './reloj.component.html',
  styleUrls: ['./reloj.component.css']
})
export class RelojComponent implements OnInit {

  timer: any;
  timer2: any;
  hora: Hora = { h: 0, m: 0, s: 0, ms: 0 };
  crono: Hora = { h: 0, m: 0, s: 0, ms: 0 };
  regresiva: number;

  constructor() { }

  ngOnInit(): void {
    this.reloj();

  }

  tiempo() {
    const ahora = new Date();
    const h = ahora.getHours();
    const m = ahora.getMinutes();
    const s = ahora.getSeconds();
    const ms = ahora.getMilliseconds();
    this.hora = { h, m, s, ms };

  }

  reloj() {
    setInterval(() => {
      this.tiempo()
    }, 500);
  }

  cronometro() {
    if (this.crono.ms < 99) {
      this.crono.ms += 1;
    }
    if (this.crono.ms == 99) {
      this.crono.ms = 0;
    }
    if (this.crono.ms == 0) {
      this.crono.s += 1;
    }
    if (this.crono.s == 59) {
      this.crono.s = 0;
    }
    if ((this.crono.ms == 0) && (this.crono.s == 0)) {
      this.crono.m += 1;
    }
    if (this.crono.m == 59) {
      this.crono.m = 0;
    }
    if ((this.crono.ms == 0) && (this.crono.s == 0) && (this.crono.m == 0)) {
      this.crono.h += 1;
    }

  }


  accionesCrono(accion: string) {
    if (accion == "iniciar") {
      this.timer = setInterval(() => {
        this.cronometro()
      }, 10);
    }
    if (accion == "detener") {
      clearInterval(this.timer);
    }
    if (accion == "reiniciar") {
      this.crono = { h: 0, m: 0, s: 0, ms: 0 };
    }
  }

  accionesCuentaRegresiva(accion: string, intervalo: string = '0') {
    if (!this.regresiva) {
      this.regresiva = Number(intervalo);
    }

    if (accion == "iniciar") {
      this.timer2 = setInterval(() => {
        if (this.regresiva == 0) {
          console.log(this.regresiva);

          clearInterval(this.timer2);
          alert('Yay ! ');
        } else {
          this.regresiva -= 1;
        }
      }, 1000);
    }
    if (accion == "detener") {
      clearInterval(this.timer2);
    }
    if (accion == "reiniciar") {
      this.regresiva = 0;
    }

  }









}

