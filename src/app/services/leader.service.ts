import { Injectable } from '@angular/core';
import {Leader} from '../shared/leader';
import {LEADERS} from '../shared/leaders';
import {of,Observable} from 'rxjs';
import {delay} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class LeaderService {
  
  getLeader(id:number):Observable<Leader>{
    return of(LEADERS.filter((dish)=>(dish.id ===id))[0]).pipe(delay(1000));
  }
  
  getFeaturedLeader():Observable<Leader>{
    return of(LEADERS.filter(dish=>dish.featured)[0]).pipe(delay(1000));  }

  getLeaders(): Observable<Leader[]>{
    return of(LEADERS).pipe(delay(1000));}
}
