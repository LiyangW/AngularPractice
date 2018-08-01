import { Injectable } from '@angular/core';
import{Promotion} from '../shared/promotion';
import {PROMOTIONS} from '../shared/promotions';
import {of,Observable} from 'rxjs';
import {delay} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class PromotionService {

  constructor() { }
    getPromotion(id:number):Observable<Promotion>{
    return of(PROMOTIONS.filter((dish)=>(dish.id ===id))[0]).pipe(delay(2000));
  }
  
  getFeaturedPromotion():Observable<Promotion>{
    return of(PROMOTIONS.filter(dish=>dish.featured)[0]).pipe(delay(2000));  }

  getPromotions(): Observable<Promotion[]>{
    return of(PROMOTIONS).pipe(delay(2000));}
}
