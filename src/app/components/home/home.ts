import { Component, HostListener, OnInit } from '@angular/core';
import { HomeService } from '../../services/home-service';
@Component({
  selector: 'app-home',
  templateUrl: './home.html',
  styleUrl: './home.scss',
  standalone: false,
})
export class HomeComponent implements OnInit {
  constructor(private homeService: HomeService) {}
  ngOnInit(): void {
    this.findTheSize();
  }
  @HostListener('window:resize')
  findTheSize() {
    const width = window.innerWidth;
    this.homeService.colSize$.next(width > 768 ? 2 : 1);
  }
  
}
