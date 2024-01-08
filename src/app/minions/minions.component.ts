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
  //@Input() minionsSearch :Minions[]=[];
  @Input() searchTerm :string=''
  minions: Minions[] = [];

  constructor(
    private minionsService: MinionService
  ){}
  ngOnChanges(changes: SimpleChanges): void {
    this.minions = this.minionsService.filterMinions(this.searchTerm)
  }
  ngOnInit(): void {
    this.minions =
    this.minionsService.filterMinions(this.searchTerm)
  }
  
 
}
