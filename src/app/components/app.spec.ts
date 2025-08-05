import { TestBed } from '@angular/core/testing';
import { App } from './app';
import { HomeService } from '../services/home-service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [App],
      providers:[HomeService],
      imports:[HttpClientTestingModule],
      schemas:[CUSTOM_ELEMENTS_SCHEMA]

    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();
  });
});
