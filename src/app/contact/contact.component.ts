import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit{
@ViewChild('myForm') myForm: ElementRef
@ViewChild('name') name: ElementRef
@ViewChild('message') email: ElementRef
@ViewChild('sendMessage') message: ElementRef

ngOnInit(): void {
  
}


async sendMail() {
  let name = this.name.nativeElement;//get the id like in JS
  let email = this.email.nativeElement;
  let message = this.message.nativeElement;
  let myForm = this.myForm.nativeElement;
  name.disabled = true;
  email.disabled = true;
  message.disabled = true;

  let formData = new FormData();
  formData.append('name', name.value);
  formData.append('email', email.value);
  formData.append('message', message.value);

  //send 
  await fetch('https://anil-orhan.developerakademie.net/send_mail/send_mail.php',
  {
    method: 'POST',
    body: formData
  }
  );

  this.emailsent(name, email, message, myForm);

}

emailsent(name, email, message, myForm) {
  myForm.reset();
  name.disabled = true;
  email.disabled = true;
  message.disabled = true;
}
}
