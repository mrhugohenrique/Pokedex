import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { NgxPaginationModule } from 'ngx-pagination';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokemonCardComponent } from './pokemon-card/pokemon-card.component';
import { PokemonService } from 'src/services/pokemon.service';
import { HeadersComponent } from './headers/headers.component';
import { PokemonInfoComponent } from './pokemon-info/pokemon-info.component';
import { RouterModule } from '@angular/router';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';

@NgModule({
  declarations: [
    AppComponent,
    PokemonCardComponent,
    HeadersComponent,
    PokemonInfoComponent,
    PokemonListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
    RouterModule,
    
  ],
  providers: [
    PokemonService
  ],

  exports: [
    
    PokemonInfoComponent,
    PokemonCardComponent,
    HeadersComponent,
    AppComponent,
    PokemonListComponent
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
