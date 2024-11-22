import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, Routes } from '@angular/router';
import { AppComponent } from './app/app.component';
import { HttpClientInMemoryWebApiModule } from "angular-in-memory-web-api";
import { InMemoryDataService } from "./app/in-memory-data.service";
import { provideHttpClient } from "@angular/common/http";
import { importProvidersFrom } from "@angular/core";

const routes: Routes = [
  { path: '', redirectTo: '/watch', pathMatch: 'full' },
  {path: 'watch', loadComponent: () => import('./app/watch-list/watch-list.component').then(m => m.WatchListComponent)},
  {path: 'watch/:id', loadComponent: () => import('./app/watch-list-item/watch-list-item.component').then(m => m.WatchListItemComponent)},
  {path: 'modify-list-item', loadComponent: () => import('./app/modify-list-item/modify-list-item.component').then(m => m.ModifyListItemComponent)},
  {path: '**', loadComponent: () => import('./app/page-not-found/page-not-found.component').then(m => m.PageNotFoundComponent)}
];


bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(),
    provideRouter(routes),
    importProvidersFrom(
      HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, { delay: 1000 })
    )
  ]
}).catch((err) => console.error(err));
