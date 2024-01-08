import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MinionService } from '../services/minion.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './nav-bar.component.html'
})
export class NavBarComponent {
  search:string='';
  @Output() newSearch:EventEmitter<string> = new EventEmitter<string>();

 constructor(private minionsService: MinionService){

 }
  addNewSearch(){
    this.newSearch.emit(this.search)
  }

}
