import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-p4barra',
  standalone: true,
  imports: [CommonModule],

  templateUrl: './p4barra.component.html',
  styleUrl: './p4barra.component.css'
})
export class P4barraComponent {
  autos: string[] = ['Leon','Ateca','Formentor'];
  testAutos = ['Ford', 'BMW', 'Mercedes'];

  @Output() autoSeleccionado = new EventEmitter<string>();


  constructor() {
  console.log(this.autos);
}

  seleccionarAuto(auto: string) {
    this.autoSeleccionado.emit(auto);
  }
}


