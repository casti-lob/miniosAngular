import { Component, Input, OnInit } from '@angular/core';
import { Minion } from '../interfaces/minion';
import { MinionService } from '../services/minion.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-minion',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-minion.component.html',
  styleUrl: './add-minion.component.css'
})
export class AddMinionComponent implements OnInit{
  @Input() id!: number  ;

  newMinion:Omit<Minion,"id" | "img">={
    name:'',
    bio:'',
    birth:'',
    side:''
  }

  minion:Minion={
    id: 0,
    name: '',
    bio:'',
    img:'',
    birth:'',
    side:'',
  }

  constructor (private minionService:MinionService){}
  ngOnInit() {
    if(this.id!=null){
      this.minionService.getMinion(this.id)
      .subscribe({
        next: (minion)=>{
          this.newMinion= minion;
          this.minion = minion
        }
      })
    }
  }

  onSubmit(){
    if(this.id==null){
      this.addMinion();
    }else{
      this.updateMinion();
    }
  }
  addMinion(){
    this.minionService.addMinion(this.newMinion)
    .subscribe({
      next: (minion)=>{
        this.newMinion = {
          name:'',
          bio:'',
          birth:'',
          side:''
        }
      }
    })
  }
  updateMinion(){
    this.minion.name= this.newMinion.name, this.minion.bio= this.newMinion.bio, this.minion.birth= this.newMinion.birth, this.minion.side= this.newMinion.side
    console.log(this.minion);
    
    this.minionService.updateMinion(this.minion,this.id)
    .subscribe({
      next: (minion)=>{
        this.newMinion = {
          name:'',
          bio:'',
          birth:'',
          side:''
        }
      }
    })
  }
}
