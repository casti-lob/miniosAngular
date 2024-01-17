import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { MinionService } from '../services/minion.service';
import { Minion } from '../interfaces/minion';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-minion',
  standalone: true,
  imports: [RouterLink,CommonModule],
  templateUrl: './minion.component.html',
  styleUrl: './minion.component.css'
})
export class MinionComponent implements OnInit {
  @Input('id') minionId!: number;
  
  minion!:Minion 
  minion$!:Observable<Minion>
  constructor(
    private minionsService: MinionService,
    private router:Router,
    private route:ActivatedRoute
  ){}

  

  ngOnInit(): void {
    /*
    this.minionsService.getMinion(this.minionId)
    .subscribe({
      next: (minion)=> this.minion=minion
    })
    console.log(this.minion);
    */
    /*let getMinion = this.minionsService.getMinion(this.id);
    if (getMinion) {
      this.minion = getMinion
    }*/

    this.route.params
    .subscribe({
      next: (data)=>{
        this.minionId = data['id'];
        this.minion$ = this.minionsService.getMinion(this.minionId)
      }
    })
  }
  return (){
    this.router.navigate(['/minions'])
  }
}
