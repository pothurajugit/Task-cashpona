import { Component, OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
 
  constructor(){}

 RegistrationForm :FormGroup;
 ngOnInit(){
   //forms
   this.RegistrationForm = new FormGroup({
     'name' : new FormControl('',Validators.required),
     'email': new FormControl('',[Validators.required,Validators.email]),
     'mobile' : new FormControl('',Validators.required),
     'password' : new FormControl('',Validators.required),
     'gender' : new FormControl('male',Validators.required)
   })
 }
 

 submitform(){
   console.log(this.RegistrationForm)
   alert('Success')
   console.log(JSON.stringify(this.RegistrationForm.value))
   this.RegistrationForm.reset()
 }


}
