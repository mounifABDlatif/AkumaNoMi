import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FRUITS } from '../bdd/profil';
import { Fruit } from '../format/fruit';

@Component({
  selector: 'app-logia',
  templateUrl: './logia.component.html',
  styleUrls: ['./logia.component.scss']
})
export class LogiaComponent implements OnInit {

  fruits= FRUITS;
  fruit:Fruit = new Fruit();
  constructor(private route:ActivatedRoute, private router:Router ) { }

  ngOnInit(): void {
    this.fruits = FRUITS;
    let categorie = this.route.snapshot.params['categorie'];


    for (let i = 0; i < this.fruits.length; i++) {
      if (this.fruits[i].categorie == categorie && this.fruits[i].categorie == 'logia') { //le id du pokemon est égale à l'id dans l'url 

        this.fruit = this.fruits[i]
      }

    }
  }

}
