import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routes } from './app.routes';
import { RouterModule } from '@angular/router';
import { App } from './components/app';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './components/home/home';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { CarouselComponent } from './components/carousel/carousel';
import { SearchComponent } from './components/search/search';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
@NgModule({
  declarations: [App, HomeComponent, CarouselComponent, SearchComponent],
  imports: [
    BrowserModule,
    CommonModule,
    RouterModule.forRoot(routes),
    FormsModule,
    MatInputModule,
    MatButtonModule,
    HttpClientModule,
    MatProgressSpinnerModule,
    MatGridListModule,
    MatIconModule,
  ],
  exports: [],
  bootstrap: [App],
})
export class AppModule {}
