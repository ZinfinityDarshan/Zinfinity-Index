import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  constructor(private formBuilder: FormBuilder, private contactService: ContactService) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      fname: ['', [Validators.required, Validators.pattern("^[a-zA-Z]*$")]],
      lname: ['', Validators.required],
      emailid: ['', [Validators.required, Validators.email]],
      phno: ['', [Validators.required, Validators.maxLength(10), Validators.minLength(10), Validators.pattern("^[0-9]*$")]],
      msg: ['', [Validators.required, Validators.maxLength(100)]]
  });
  }

  onSubmit(){
    this.submitted = true;
     if(this.registerForm.invalid){
      console.log(this.registerForm.value);
       console.log("Error!");
       return;
     } 
     else {
       this.contactService.addContact(this.registerForm.value);
       console.log(this.registerForm.value);
       console.log("Success!");
       this.submitted = false;
      this.registerForm.reset();
     }

  }

}
