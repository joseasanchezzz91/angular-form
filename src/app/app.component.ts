import { Component } from '@angular/core';
import {FormControl,FormGroup,Validators} from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'def4u-form';

  constuctor(){}

  miFormulario= new FormGroup({
  	username : new FormControl( '',[Validators.required,Validators.email] ),
  	userpassword : new FormControl( '',Validators.required ),
  });

  onSave(){
  	console.log(this.miFormulario.value)
  }
}
