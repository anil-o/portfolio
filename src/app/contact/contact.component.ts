import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  @ViewChild('contact') contact: ElementRef

  contactForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    message: new FormControl('', Validators.required),
  });

  name: any;
  email: any;
  message: any;
  animation = false;


  constructor() { }

  ngOnInit(): void {

  }

  async sendMail() {
    let formData = new FormData();
    formData.append('name', this.name);
    formData.append('email', this.email);
    formData.append('message', this.message);

    //send
    await fetch('https://anil-orhan.developerakademie.net/send_mail/send_mail.php',
      {
        method: 'POST',
        body: formData
      }
    );
    this.emailSent();
  }

  emailSent() {
    this.animation = true;
    let contact = this.contact.nativeElement;
    contact.reset();
    setTimeout(() => {
      this.animation = false;
    }, 2000);
  }
}
