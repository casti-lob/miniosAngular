import { Injectable } from '@angular/core';
import { Minion } from '../interfaces/minion';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MinionService {
  minions:Minion[]=[];
  private url: string = 'http://localhost:3000/minions';
  
  constructor(private http: HttpClient){
    console.log('Servidor inicializado');
    
  }

  getMinions():Observable<Minion[]>{
    return this.http.get<Minion[]>(this.url);
  }

  getMinion(minionId:string):Observable<Minion>{
    return this.http.get<Minion>(`${this.url}/${minionId}`)
    
    //return this.minions.find((minion)=>minion.name === id);
  }

  filterMinions(search:string):Observable<Minion[]>{
    
    return this.http.get<Minion[]>(`${this.url}?name=${search}`)
  }
}
