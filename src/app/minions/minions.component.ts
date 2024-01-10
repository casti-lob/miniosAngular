import { CommonModule } from '@angular/common';
import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Minions } from '../interfaces/minion';
import { MinionService } from '../services/minion.service';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-minions',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterOutlet],
  templateUrl: './minions.component.html'
})
export class MinionsComponent implements OnInit, OnChanges{
  //@Input() minionsSearch :Minions[]=[];
  @Input() searchTerm :string=''
  minions: Minions[] = [];

  constructor(
    private minionsService: MinionService
  ){}
  ngOnChanges(changes: SimpleChanges): void {
    this.minions =this.minionsService.getMinions()
    //this.minionsService.filterMinions(this.searchTerm)
  }
  ngOnInit(): void {
    this.minions =this.minionsService.getMinions()
    //this.minionsService.filterMinions(this.searchTerm)
  }
  
 
}
