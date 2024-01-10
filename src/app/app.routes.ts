import { Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { MinionsComponent } from './minions/minions.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { MinionComponent } from './minion/minion.component';

export const routes: Routes = [
    {path: '', component: IndexComponent },
    {path: 'minions', component: MinionsComponent,
        children:[
            {path:':id', component:MinionComponent}
        ]
    },
    {path: 'minion/:id', component: MinionComponent},
    {path: '**', component: NotFoundComponent }
];
