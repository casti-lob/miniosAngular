import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './nav-bar.component.html'
})
export class NavBarComponent {
  search:string='';
  @Output() newSearch:EventEmitter<string> = new EventEmitter<string>();

 
  addNewSearch(){
    this.newSearch.emit(this.search)
  }

}
