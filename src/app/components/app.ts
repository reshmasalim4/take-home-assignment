import { Component, OnInit } from '@angular/core'; 
import { HomeService } from '../services/home-service';

@Component({
  selector: 'app-root', 
  templateUrl: './app.html',
  styleUrl: './app.scss',
  standalone:false
})
export class App implements OnInit{
  loader= false; 
  constructor(
      private homeService: HomeService,){}

ngOnInit(){
  this.homeService.loader$.subscribe((flag:boolean)=>{
    this.loader = flag
  })
}
}
