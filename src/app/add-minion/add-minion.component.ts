import { Component } from '@angular/core';
import { Minion } from '../interfaces/minion';

@Component({
  selector: 'app-add-minion',
  standalone: true,
  imports: [],
  templateUrl: './add-minion.component.html',
  styleUrl: './add-minion.component.css'
})
export class AddMinionComponent {

  minion!:Minion

  addMinion(){
    
  }
}
