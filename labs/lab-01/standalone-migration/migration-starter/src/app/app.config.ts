// import {
//     HTTP_INTERCEPTORS,
//     HttpClient,
//     provideHttpClient
// } from '@angular/common/http';
// import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { MarkdownModule } from 'ngx-markdown';
// import { AppRoutingModule } from './app.routes';
// import { AppComponent } from './app.component';
// import { HomeComponent } from './home/home.component';
// import { MaterialModule } from './material.module';
// import { LoadingInterceptor } from './shared/loading/loading-interceptor';
// import { LoadingService } from './shared/loading/loading.service';
// import { SharedModule } from './shared/shared.module';

import { HTTP_INTERCEPTORS, provideHttpClient } from '@angular/common/http';
import { LoadingService } from './shared/loading/loading.service';
import { LoadingInterceptor } from './shared/loading/loading-interceptor';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { ApplicationConfig } from '@angular/core';

// @NgModule({
//     declarations: [AppComponent],
//     imports: [
//         BrowserModule,
//         AppRoutingModule,
//         BrowserAnimationsModule,
//         MaterialModule,
//         SharedModule,
//         MarkdownModule.forRoot({
//             loader: HttpClient,
//         }),
//         HomeComponent,
//     ],
//     providers: [
//         provideHttpClient(),
//         LoadingService,
//         { provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true },
//     ],
//     bootstrap: [AppComponent],
// })
// export class AppModule { }
export const appConfig: ApplicationConfig = {
    providers: [
        provideHttpClient(),
        provideAnimations(),
        provideRouter(routes)
    ]
}