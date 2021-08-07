import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FRUITS } from '../bdd/profil';
import { Fruit } from '../format/fruit';


@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent implements OnInit {

  fruits= FRUITS;
  fruit:Fruit = new Fruit();
  constructor(private route:ActivatedRoute, private router:Router ) { }

  ngOnInit(): void {
    
  }

}
