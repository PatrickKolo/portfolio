import { Component, ElementRef, ViewChild} from '@angular/core';

import { EmailValidator, NgForm, Validators, FormGroup, FormControl } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent{
  @ViewChild('myForm') myForm!: ElementRef;
  @ViewChild('myForm') nameField!: ElementRef;
  @ViewChild('myForm') emailField!: ElementRef;
  @ViewChild('myForm') massageField!: ElementRef;
  @ViewChild('myForm') buttonField!: ElementRef;
  contactForm;
  success = false;

  constructor(private formBuilder: FormBuilder) {


    this.contactForm = this.formBuilder.group( {
      fullname: ['', [Validators.required]],
      email:['', [Validators.required, Validators.email]],
      message:['', [Validators.required, Validators.minLength(3)]],
    })
   }


   get fullname() {
    return this.contactForm.get('fullname');
  }
  

  get email() {
    return this.contactForm.get('email');
  }
  

  get message() {
    return this.contactForm.get('message');
  }


  sendMail() {
    let nameField = this.nameField.nativeElement[0];
    let emailField = this.emailField.nativeElement[1];
    let massageField = this.massageField.nativeElement[2];
    let buttonField = this.buttonField.nativeElement[3];
    this.disableFields(nameField, emailField, massageField, buttonField);
    this.createMail(nameField, emailField, massageField);
    this.ableFields(nameField, emailField, massageField, buttonField);
    this.contactForm.reset();
    setTimeout(() => {
      this.success = false;
    }, 10000);
  }

  
disableFields(nF: any, eF:any, mF:any, bF:any) {
  nF.disabled = true;
  eF.disabled = true;
  mF.disabled = true;
  bF.disabled = true;
}


ableFields(nF:any, eF:any, mF:any, bF:any) {
  nF.disabled = false;
  eF.disabled = false;
  mF.disabled = false;
  bF.disabled = false;
}


async createMail(nF: any, eF: any, mF: any) {
  let formData = new FormData();
  formData.append('name', nF.value);
  formData.append('email', eF.value);
  formData.append('message', mF.value);
  await fetch('https://patrick-kolodziej.developerakademie.net/send_mail/send_mail/send_mail.php', 
  {
    method: 'POST',
    body: formData,
  }
  );
  this.success = true;
}


public scroll(id: string) {
  const area = document.getElementById(id);
  area?.scrollIntoView({
    behavior: 'smooth',
    block: "start",
    });
  }
}
