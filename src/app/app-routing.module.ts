import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { AddComponent } from './add/add.component';
import { DescriptionComponent } from './description/description.component';
import { LogiaComponent } from './logia/logia.component';
import { ModifComponent } from './modif/modif.component';
import { ParameciaComponent } from './paramecia/paramecia.component';
import { ZoanComponent } from './zoan/zoan.component';

const routes: Routes = [
  {
    path: '',
    component: AccueilComponent
  },
  {
    path: 'paramecia/:categorie',
    component: ParameciaComponent
  },
  {
    path: 'logia/:categorie',
    component: LogiaComponent
  },
  {
    path: 'zoan/:categorie',
    component: ZoanComponent
  },
  {
    path: 'description/:id',
    component: DescriptionComponent
  },
  {
    path: 'modif/:id',
    component: ModifComponent
  },
  {
    path: 'add',
    component: AddComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
