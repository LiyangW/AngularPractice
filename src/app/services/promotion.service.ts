import { Injectable } from '@angular/core';
import{Promotion} from '../shared/promotion';
import {PROMOTIONS} from '../shared/promotions';
@Injectable({
  providedIn: 'root'
})
export class PromotionService {

  constructor() { }
  
  getPromotion(id:number):Promotion{
  		return PROMOTIONS.filter((dish)=>(dish.id===id))[0];
  }
  
  getFeaturedPromotion():Promotion{
	return PROMOTIONS.filter((dish)=>(dish.featured))[0];
  }
  getPromotions(): Promotion[]{
  	return PROMOTIONS;
  }
}
