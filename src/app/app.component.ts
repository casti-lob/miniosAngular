import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { MinionsComponent } from './minions/minions.component';
import { Minions } from './interfaces/minion';
import { MinionService } from './services/minion.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,NavBarComponent,MinionsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'minions';
  searchTerm: string='';

 search( term:string){
  this.searchTerm = term;
 }
 
  
  
}
