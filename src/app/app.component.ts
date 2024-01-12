import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterOutlet } from '@angular/router';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { MinionsComponent } from './minions/minions.component';
import { Minion } from './interfaces/minion';
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

  constructor(private router: Router){}

 search( term:string){
  this.router.navigate(['minions',term]);
  this.searchTerm = term;
 }
 
  
  
}
