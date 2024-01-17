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

  getMinion(id:string|number):Observable<Minion>{
    return this.http.get<Minion>(`${this.url}/${id}`)
    
    //return this.minions.find((minion)=>minion.name === id);
  }

  filterMinions(search:string):Observable<Minion[]>{
    
    return this.http.get<Minion[]>(`${this.url}?name=${search}`)
  }

  addMinion(minion: Omit<Minion,"id" | "img">){
    return this.http.post<Minion>(this.url,minion);
  }

  deleteMinion(id:number):Observable<Minion> {
    return this.http.delete<Minion>(`${this.url}/${id}`);
  }
  updateMinion(minion:Minion, id:number):Observable<Minion>{
    return this.http.put<Minion>(`${this.url}/${id}`,minion)
  }
}
