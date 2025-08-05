import { Injectable } from '@angular/core';
import { apiUrls } from '../constants/api.constants';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { SafeHtml } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  constructor(private http: HttpClient){}
  public loader$ = new BehaviorSubject<boolean>(false);
  public colSize$ = new BehaviorSubject<number>(1);
  public addData$ = new BehaviorSubject<SafeHtml[]|undefined>(undefined);
  
  getInitialImage(val:string){
    const url = apiUrls.getInitials +val +'&delay=10'
    return this.http.get(url,{responseType:'text'});
  }
}
