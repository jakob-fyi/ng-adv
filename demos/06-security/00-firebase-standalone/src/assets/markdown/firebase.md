Notice that this sample uses fbauth.module.ts. To be able to use Firebase Auth you must:

- Create an account at [Firebase](https://firebase.google.com/)
- Update your Firebase Config in `environment.ts`

   ```json
   firebaseConfig: {...},
   ```

- Examine `firebase-auth.service.ts` and its usage in `register.component.ts` and `login.component.ts`