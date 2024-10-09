import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideRouter,Routes} from '@angular/router';
import {WatchListComponent} from "./app/watch-list/watch-list.component";
import {WatchListItemComponent} from "./app/watch-list-item/watch-list-item.component";
import {ModifyListItemComponent} from "./app/modify-list-item/modify-list-item.component";
import {PageNotFoundComponent} from "./app/page-not-found/page-not-found.component";



const routes: Routes = [
  {path:'', redirectTo: '/watch', pathMatch: 'full'},
  { path: 'Watch', component: WatchListComponent },
  { path: 'Watch/:id', component: WatchListItemComponent},
  { path: 'modify-list-item', component: ModifyListItemComponent },
  { path: '**', component: PageNotFoundComponent }
];





bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)]
});
