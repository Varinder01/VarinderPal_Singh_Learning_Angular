import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, Routes } from '@angular/router';
import { AppComponent } from './app/app.component';
import { WatchListComponent } from "./app/watch-list/watch-list.component";
import { WatchListItemComponent } from "./app/watch-list-item/watch-list-item.component";
import { ModifyListItemComponent } from "./app/modify-list-item/modify-list-item.component";
import { PageNotFoundComponent } from "./app/page-not-found/page-not-found.component";
import { HttpClientInMemoryWebApiModule } from "angular-in-memory-web-api";
import { InMemoryDataService } from "./app/in-memory-data.service";
import { provideHttpClient } from "@angular/common/http";
import { importProvidersFrom } from "@angular/core";
const routes: Routes = [
  { path: '', redirectTo: '/watch', pathMatch: 'full' },
  { path: 'watch', component: WatchListComponent },
  { path: 'watch/:id', component: WatchListItemComponent },
  { path: 'modify-list-item', component: ModifyListItemComponent },
  { path: '**', component: PageNotFoundComponent }
];

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(), // Ensure that HTTP client is provided
    provideRouter(routes),
    importProvidersFrom(
      HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, { delay: 1000 }) // Use mock data with a 1 second delay
    )
  ]
}).catch((err) => console.error(err));
