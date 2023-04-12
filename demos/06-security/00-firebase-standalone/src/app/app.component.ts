import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Observable, of, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { FirebaseAuthService } from './fbauth/firebase-auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  isAuthenticated: Observable<boolean> = of(false);

  constructor(private titleService: Title, private auth: FirebaseAuthService) {}

  title: string = environment.title;

  ngOnInit() {
    this.titleService.setTitle(this.title);
    this.isAuthenticated = this.auth
      .isAuthenticated()
      .pipe(tap((auth) => console.log('auth changed to autheticated: ', auth)));
  }
}
