import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(  private router: Router  
  ) { }

  ngOnInit() {
  }

  buscarheroe( termino:String ){
    //console.log(termino);  
    this.router.navigate( ['/search', termino] );  //Arreglo de rutas
  }

  
}
