import { Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { MinionsComponent } from './minions/minions.component';
import { NotFoundComponent } from './not-found/not-found.component';

export const routes: Routes = [
    {path: '', component: IndexComponent },
    {path: 'minions', component: MinionsComponent},
    {path: '**', component: NotFoundComponent }
];
