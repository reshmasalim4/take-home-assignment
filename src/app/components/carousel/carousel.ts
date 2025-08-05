import { Component, Input, OnInit } from '@angular/core';
import { SafeHtml } from '@angular/platform-browser';
import { HomeService } from '../../services/home-service';

@Component({
  selector: 'app-carousel',
  standalone: false,
  templateUrl: './carousel.html',
  styleUrl: './carousel.scss',
})
export class CarouselComponent implements OnInit {
  constructor(private homeService: HomeService) {}
  initialList: SafeHtml[] = [];
  drawList: SafeHtml[] = [];
  currentIndex = 0;
  pageSize = 1;
  ngOnInit(): void {
    this.homeService.colSize$.subscribe((size) => {
      if (size != this.pageSize) {
        this.pageSize = size;
        this.checkForCurrentIndex();
      }
    });
    this.homeService.addData$.subscribe((data) => {
      if (data?.length) {
        this.initialList = data;
        this.checkForCurrentIndex();
      }
    });
  }

  checkForCurrentIndex() {
    if (this.pageSize === 2 && this.initialList.length >= 2) {
      this.currentIndex = this.initialList.length - 2;
    } else {
      this.currentIndex = this.initialList.length - 1;
    }
    this.getVisibleList();
  }

  getVisibleList() {
    this.drawList = this.initialList.slice(
      this.currentIndex,
      this.currentIndex + this.pageSize
    );
    console.log(this.currentIndex,  this.drawList.length)
  }

  next(): void {
    const maxIndex = this.initialList.length - this.pageSize;
    if (this.currentIndex < maxIndex) {
      this.currentIndex ++;
    }
    this.getVisibleList();
  }

  back(): void {
    if (this.currentIndex > 0) {
      this.currentIndex --;
    }
    this.getVisibleList();
  }

   
}
