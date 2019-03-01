import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html',
  styleUrls: ['./heroe-tarjeta.component.css']
})
export class HeroeTarjetaComponent implements OnInit {

  @Input() heroe: any = {};   //decorador para traer informacion a componente hijo desde fuera
  @Input() indice: number;
  @Input() nombre: string;

  @Output() heroeSeleccionado = new EventEmitter<string>();

  constructor( private router: Router  
  ) { 
    
  }

  ngOnInit() {    
  }

  verHeroe(){
    //this.router.navigate( ['/heroe', this.indice] );
    this.heroeSeleccionado.emit(this.nombre);     //Para trabajar con output
  }

}
