import { CommonModule } from '@angular/common';
import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Minion } from '../interfaces/minion';
import { MinionService } from '../services/minion.service';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Observable, catchError, ignoreElements, of } from 'rxjs';

@Component({
  selector: 'app-minions',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterOutlet],
  templateUrl: './minions.component.html'
})
export class MinionsComponent implements OnInit, OnChanges{
  //@Input() minionsSearch :Minion[]=[];
  @Input() search :string=''
  minions: Minion[] = [];
  minions$!: Observable<Minion[]>
  minionError$!: Observable<any>;
  errorMessage: any = null;

  constructor(
    private minionsService: MinionService
  ){}
  ngOnChanges(changes: SimpleChanges): void {
    /*
    if(!this.search){
    this.minionsService.getMinions()
    .subscribe({
      next: (minions) => this.minions=minions
    })
  }else{
   
    this.minionsService.filterMinions(this.search)
    .subscribe({
      next: (minions) => this.minions = minions
    })
  }
    //this.minions =this.minionsService.getMinions()
    //this.minionsService.filterMinions(this.searchTerm)
    */
  }
  ngOnInit(): void {
    /*
    if(!this.search){
      this.minionsService.getMinions()
      .subscribe({
        next: (minions) => this.minions=minions
      })
    }else{
      
      
      this.minionsService.filterMinions(this.search)
      .subscribe({
        next: (minions) => this.minions = minions
      })
    
    

    
  }
  */
  
  this.minions$ = this.minionsService.getMinions();
  this.minionError$ = this.minions$.pipe(
    ignoreElements(),
    catchError((err)=>of(err))
  )
  
}

  deleteMinion(id:number){
    let deleteMinion!:Minion
    this.minionsService.deleteMinion(id)
    .subscribe({
      next: (minion)=> this.minions = this.minions.filter(minion => minion.id !== id)
      
    })
    

  }
}