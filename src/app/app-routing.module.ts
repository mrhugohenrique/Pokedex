import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: 'home',
    loadChildren: () => import('../app/app.module')
      .then(m => m.AppModule)
  },
  {
    path: 'info',
    loadChildren: () => import('../app/pokemon-list/pokemon-list.component')
      .then(m => m.PokemonListComponent)
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
