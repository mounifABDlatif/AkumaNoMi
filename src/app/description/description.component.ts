import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FRUITS } from '../bdd/profil';
import { Fruit } from '../format/fruit';


@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.scss']
})
export class DescriptionComponent implements OnInit {

  fruits = FRUITS;
  fruit: Fruit = new Fruit();

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.fruits = FRUITS;
    let id = this.route.snapshot.params['id']


    for (let i = 0; i < this.fruits.length; i++) {
      if (this.fruits[i].id == id) { //le id du pokemon est égale à l'id dans l'url 

        this.fruit = this.fruits[i]
      }

    }
  }

  supprimer() {
    let id = this.route.snapshot.params['id']

    for (let i = 0; i < this.fruits.length; i++) {
      if (this.fruits[i].id == id) {
        this.fruits.splice(i, 1);
      }
    }
  }
}
