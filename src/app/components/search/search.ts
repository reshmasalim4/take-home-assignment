import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { HomeService } from '../../services/home-service';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { NgForm } from '@angular/forms';
import { finalize, shareReplay, timer } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-search',
  standalone: false,
  templateUrl: './search.html',
  styleUrl: './search.scss',
})
export class SearchComponent implements OnInit {
  loader = false;
  isApiCalling = false;
  initialList: SafeHtml[] = [];

  constructor(
    private homeService: HomeService,
    private sanitizer: DomSanitizer,
    private matSnackBar: MatSnackBar
  ) {}
  ngOnInit() {}

  nameOnSubmit(form: NgForm) {
    this.isApiCalling = true;
    const apiObservable = this.homeService
        .getInitialImage(form.value.userName)
        .pipe(),
      timerDelay = timer(2000).subscribe(() => {
        this.homeService.loader$.next(true);
      });

    apiObservable
      .pipe(
        finalize(() => {
          this.homeService.loader$.next(false);
          timerDelay.unsubscribe();
          this.isApiCalling = false;
          form.resetForm();
        })
      )
      .subscribe({
        next: (data: any) => {
          this.openSnackBar('Initial Loaded', 'Success');
          let initialSvg = this.sanitizer.bypassSecurityTrustHtml(data);
          this.onInitialAdd(initialSvg);
        },
        error: (err: any) => {
          console.log(err);
          this.openSnackBar(err.statusText || err.message, 'Error');
        },
      });
  }
  onInitialAdd(initalImg: SafeHtml) {
    this.initialList.push(initalImg);
    this.homeService.addData$.next(this.initialList);
  }
  openSnackBar(message: string, action: string) {
    this.matSnackBar.open(message, action, {
      duration: 1000,
    });
  }
}
