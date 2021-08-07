import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FRUITS } from '../bdd/profil';
import { Fruit } from '../format/fruit';

@Component({
  selector: 'app-modif',
  templateUrl: './modif.component.html',
  styleUrls: ['./modif.component.scss']
})
export class ModifComponent implements OnInit {

  fruits = FRUITS;
  @Input() fruit:Fruit = new Fruit();

  constructor(private route: ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    this.fruits = FRUITS;

    let id = this.route.snapshot.params['id'];

    for(let i=0; i <this.fruits.length; i++){
      if(this.fruits[i].id == id){
        this.fruit = this.fruits[i];
      }
    } 
  }

  onSubmit(f:NgForm){   
    let link = ['/description', this.fruit.id];
    this.router.navigate(link);
  }

}
