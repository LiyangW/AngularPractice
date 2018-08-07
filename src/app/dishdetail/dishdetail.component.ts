import { Component, OnInit,ViewChild} from '@angular/core';
import {Dish} from '../shared/dish';
import {Params, ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import {DishService} from '../services/dish.service';
import {switchMap} from 'rxjs/operators';
import {FormBuilder,FormGroup,Validators} from '@angular/forms';
import{Comment} from '../shared/comment';
@Component({
  selector: 'app-dishdetail',
  templateUrl: './dishdetail.component.html',
  styleUrls: ['./dishdetail.component.scss']
})
export class DishdetailComponent implements OnInit {
  @ViewChild('fform') commentFormDirective;

  commentForm: FormGroup;
  comment: Comment;

  formErrors={
    'comment':'',
    'name':''
  }
  validationMessages={
    'comment':{
      'required': "comment is required."
    },
    'name':{
      'required': "name is required.",
      'minlength': 'name should be at least 2 characters'
    }
  }
	dish: Dish;
  dishIds: number[];
  prev:number;
  next:number;
  constructor(private dishservice: DishService,private route:ActivatedRoute, private location: Location,private fb:FormBuilder) {
    this.createForm();
   }

  ngOnInit() {
    
    this.dishservice.getDishIds().subscribe(dishIds=>this.dishIds=dishIds);
    this.route.params.pipe(switchMap((params:Params)=>this.dishservice.getDish(+params['id']))) 
    .subscribe(dish=>{this.dish=dish;this.setPrevNext(dish.id);});
  }
  setPrevNext(dishId:number){
    const index = this.dishIds.indexOf(dishId);
    this.prev=this.dishIds[(this.dishIds.length+index-1)%this.dishIds.length];
    this.next=this.dishIds[(this.dishIds.length+index+1)%this.dishIds.length];
  }
  goBack():void{
  	this.location.back();
  }
  createForm(){
    this.commentForm=this.fb.group({
      rating:5,
      comment:['',[Validators.required]],
      name:['',[Validators.required,Validators.minLength(2)]],
      date:['']

    });
    this.commentForm.valueChanges.subscribe(data=>this.onValueChanged(data));
    this.onValueChanged();
  }
  onValueChanged(data?:any){
    if(!this.commentForm){return;}
    const form = this.commentForm;
    for(const field in this.formErrors){
      if(this.formErrors.hasOwnProperty(field)){
        this.formErrors[field]='';
        const control = form.get(field);
        if(control&&control.dirty&&!control.valid){
          const messages = this.validationMessages[field];
          for(const key in control.errors){
            if(control.errors.hasOwnProperty(key)){
              this.formErrors[field]+=messages[key]+' ';
            }
          }
        }
      }
    }
  }
  onSubmit(){
    this.comment=this.commentForm.value;
    this.commentForm.reset({
      rating:5,
      comment: '',
      name:'',
      date: ''
    });
    this.commentFormDirective.resetForm();
  }

}
