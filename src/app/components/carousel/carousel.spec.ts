import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselComponent } from './carousel';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HomeService } from '../../services/home-service';

describe('CarouselComponent', () => {
  let component: CarouselComponent;
  let fixture: ComponentFixture<CarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CarouselComponent],
      imports:[HttpClientTestingModule],
      providers:[HomeService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  it('should call checkForCurrentIndex', () => {
    component.pageSize  = 2;
    component.initialList = ['a','b','c'];
    let spy = spyOn(component,'getVisibleList')
    component.checkForCurrentIndex();
    expect(spy).toHaveBeenCalled();
  });
  it('should call getVisibleList', () => {
    component.pageSize  = 2;
    component.initialList = ['a','b','c'];
    component.currentIndex = 0; 
    component.getVisibleList();
    expect(component.drawList.length).toBe(2);
  });
  
  it('should call next', () => {
    component.pageSize  = 2;
    component.initialList = ['a','b','c'];
    component.currentIndex = 0; 
    component.next();
    expect(component.currentIndex).toBe(1);
  });

  it('should call back', () => {
    component.pageSize  = 2;
    component.initialList = ['a','b','c'];
    component.currentIndex = 2; 
    component.back();
    expect(component.currentIndex).toBe(1);
  });
});
