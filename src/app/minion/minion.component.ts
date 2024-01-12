import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { MinionService } from '../services/minion.service';
import { Minion } from '../interfaces/minion';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-minion',
  standalone: true,
  imports: [RouterLink,CommonModule],
  templateUrl: './minion.component.html',
  styleUrl: './minion.component.css'
})
export class MinionComponent implements OnInit , OnChanges{
  @Input() id: string = '';
 
  minion!:Minion 
  constructor(
    private minionsService: MinionService
  ){}
  ngOnChanges(changes: SimpleChanges): void {
    let getMinion = this.minionsService.getMinion(this.id);
    if (getMinion) {
      this.minion = getMinion
    }
  }

  ngOnInit(): void {
    let getMinion = this.minionsService.getMinion(this.id);
    if (getMinion) {
      this.minion = getMinion
    }
  }

}
