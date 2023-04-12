import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { concatMap, map, mergeMap, Observable, switchMap, tap } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class FirebaseAuthService {
  private user = this.fireAuth.authState.pipe(
    tap((state) => console.log('auth state: ', state))
  );

  private token = this.fireAuth.authState.pipe(
    switchMap((user) => {
      if (user) {
        return user.getIdToken();
      } else {
        return '';
      }
    }),
    tap((token) => {
      // stay on the same route if auth is not enabled
      if (token == '' && environment.authEnabled) {
        this.router.navigate(['/']);
      }
    })
  );

  constructor(private fireAuth: AngularFireAuth, private router: Router) {}

  getUser() {
    return this.user;
  }

  getToken() {
    return this.token;
  }

  isAuthenticated(): Observable<boolean> {
    return this.user.pipe(
      map((user) => {
        let authEnabled = environment.authEnabled;
        return authEnabled == false || user != null ? true : false;
      })
    );
  }

  createUser(
    email: string,
    password: string
  ): Promise<firebase.default.auth.UserCredential> {
    return this.fireAuth
      .createUserWithEmailAndPassword(email, password)
      .catch((err) => {
        console.log('Error creating User', err);
        return err;
      });
  }

  logIn(
    email: string,
    password: string
  ): Promise<firebase.default.auth.UserCredential> {
    return this.fireAuth
      .signInWithEmailAndPassword(email, password)
      .catch((err) => {
        console.log('Error logging in', err);
        return err;
      });
  }

  logOut() {
    this.fireAuth
      .signOut()
      .catch((err) => console.log('Error in signOut', err));
  }
}
