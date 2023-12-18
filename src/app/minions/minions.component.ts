import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Minions } from '../interfaces/minion';

@Component({
  selector: 'app-minions',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './minions.component.html'
})
export class MinionsComponent {
  @Input() minionsSearch :Minions[]=[];
 
  listFav: Minions[]=[]
    minions :Minions[] =[
    {
      name: "Kevin",
      bio: "Aquí debería haber una biografía de la vida de este minion, pero son gente muy misteriosa, así que tendrás que imaginártela...",
      img: "assets/img/kevin.jpg",
      birth: "1951",
      side:"de los buenos"
    },
    {
      name: "Josua",
      bio: "Aquí debería haber una biografía de la vida de este minion, pero son gente muy misteriosa, así que tendrás que imaginártela...",
      img: "assets/img/Josua.jpg",
      birth: "1672",
      side:"malvado"
    },
    {
      name: "Dave",
      bio: "Aquí debería haber una biografía de la vida de este minion, pero son gente muy misteriosa, así que tendrás que imaginártela...",
      img: "assets/img/dave.jpg",
      birth: "1723",
      side: "de los buenos"
    },
    {
      name: "Mudito",
      bio: "Aquí debería haber una biografía de la vida de este minion, pero son gente muy misteriosa, así que tendrás que imaginártela...",
      img: "assets/img/mudito.jpeg",
      birth: "1379",
      side:"de los buenos"
    },
    {
      name: "Llongueras",
      bio: "Aquí debería haber una biografía de la vida de este minion, pero son gente muy misteriosa, así que tendrás que imaginártela...",
      img: "assets/img/llongueras.jpg",
      birth: "1687",
      side: "malvado"
    },
    {
      name: "Minioncé",
      bio: "Le va el cante, dar la nota, ama los karaokes, es el rey y reina de la fiesta. Invítalo a tu fiesta o te arrepentirás.",
      img: "assets/img/minionce.jpg",
      birth: "1976",
      side: "de los buenos"
    },
    {
      name: "Lobeznion",
      bio: "No lo enfades, este bichillo tiene muy malas pulgas...aunque sólo mide medio metro y ¡no puede ser más gracioso!",
      img: "assets/img/lobeznion.jpg",
      birth: "2017",
      side: "malvado"
    },
    {
      name: "Minion Presley",
      bio: "Aquí debería haber una biografía de la vida de este minion, pero son gente muy misteriosa, así que tendrás que imaginártela...",
      img: "assets/img/minion-presley.jpg",
      birth: "2017",
      side: "malvado"
    }

  ] 
  getMinions():Minions[]{
    if(this.minionsSearch.length==0){
      return this.minions;
    }
    return this.minionsSearch 
  }
  fav(index:number){
    const minion:Minions = this.minions[index];
    this.listFav.push(minion);
    
  }
  disFav(minion:Minions){
    const index = this.listFav.indexOf(minion);
    this.listFav.splice(index,1)
  }
}
