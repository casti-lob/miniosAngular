import { CommonModule } from '@angular/common';
import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Minions } from '../interfaces/minion';
import { MinionService } from '../services/minion.service';

@Component({
  selector: 'app-minions',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './minions.component.html'
})
export class MinionsComponent implements OnInit, OnChanges{
  @Input() minionsSearch :Minions[]=[];
  @Input() searchTerm :Minions[]=[]

  constructor(
    private minionsService: MinionService
  ){}
  ngOnChanges(changes: SimpleChanges): void {
    //this.minionsSearch = this.minionsService.filterMinions(this.searchTerm)
  }
  ngOnInit(): void {
    //this.minionsSearch = this.minionsService.getMinions()
  }
  
  listFav: Minions[]=[]
    
  getMinions():Minions[]{
    /*if(this.minionsSearch.length==0){
      return this.minions;
    }*/
    return this.minionsSearch 
  }
  fav(index:number){
    const minion:Minions = this.minionsSearch[index];
    this.listFav.push(minion);
    
  }
  disFav(minion:Minions){
    const index = this.listFav.indexOf(minion);
    this.listFav.splice(index,1)
  }
}
