import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchComponent } from './search';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HomeService } from '../../services/home-service';
import { FormsModule, NgForm } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { of } from 'rxjs';

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        FormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
      ],
      declarations: [SearchComponent],
      providers: [HomeService],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call nameOnSubmit', () => {
    // Create a fake form object
    let spy = spyOn(component, 'onInitialAdd');

    spyOn(TestBed.inject(HomeService), 'getInitialImage').and.returnValue(
      of('')
    );
    const mockForm = {
      value: {
        userName: 'John Doe',
      },
    } as NgForm;

    component.nameOnSubmit(mockForm);
    expect(spy).toHaveBeenCalled();
  });
  it('should call onInitialAdd', () => {
    component.onInitialAdd('');
    expect(component.initialList.length).toBe(1);
  });
});
