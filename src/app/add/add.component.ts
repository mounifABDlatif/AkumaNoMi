import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FRUITS } from '../bdd/profil';
import { Fruit } from '../format/fruit';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  fruits= FRUITS;
  fruit:Fruit = new Fruit();
  constructor(private route:ActivatedRoute, private router:Router ) { }

  ngOnInit(): void {
  }

  onSubmit(f: NgForm) {

    this.fruits.unshift(this.fruit);

    this.router.navigate(['']);
  }
}
