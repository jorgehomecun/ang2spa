import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService, Heroe} from '../../servicios/heroes.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent implements OnInit {

  heroes: Heroe[] = [];
  termino: string;

  constructor(
    private _heroesService: HeroesService,
    private activatedRoute: ActivatedRoute,
    private router: Router 
  ) {
    

   }

  ngOnInit() {
    this.activatedRoute.params.subscribe( params => {  //Observador para capturar parametros en rutas
    
      this.heroes = this._heroesService.buscarHeroes( params['termino'] );    
      this.termino = params['termino'];
     //console.log(this.heroes);
      })
    
      
  }  

  verHeroe(idx: string) {    
    this.router.navigate( ['/heroe', idx] );
  }  

} 
