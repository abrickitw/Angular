import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  template: `
    <section class="hero is-link is-bold">
    <div class="hero-body">
      <div class="container">
        <h1 class="title">Contact us</h1>
      </div>
    </div>
    </section>


    

     <!-- #VariableName for binding variables -->


     <!-- {{nameInput.errors | json}}

      {{emailInput.errors | json}}

      {{messageInput.errors | json}} 
    {{contactForm.valid }}
    -->
          
      

    <section class="section">
      <div class="container">

      
        
      
      <!-- form -->

       
        <form (ngSubmit)="submitForm()" #contactForm="ngForm">
         
        
        
        
          <div class="field">
            <label class="label">Name</label>
            <input type="text" name="name" class="input" [(ngModel)]="name" #nameInput="ngModel" required> 
            <div class="help is-error" *ngIf="nameInput.invalid && nameInput.touched">
              Name is required
            </div>

          </div>

          <div class="field">
          <label class="label">Email</label>
            <input type="email" name="email" class="input" [(ngModel)]="email" #emailInput="ngModel" required>
            <div class="help is-error" *ngIf="emailInput.invalid && emailInput.touched">
            mail is required
            </div>
          </div>

          <div class="field">
          <label class="label">Message</label>
            <textarea name="message" id="" cols="30" rows="16" class="textarea" [(ngModel)]="message" #messageInput="ngModel" required>
              
            </textarea>
            <div class="help is-error" *ngIf="messageInput.invalid && messageInput.touched">
              message is required
              </div>
            <button type="submit" class="button is-large is-warning" [disabled]="contactForm.invalid">Submit!</button>

          </div>
          
          
        </form>
      </div>
    </section>
  `,
  styles: []
})
export class ContactComponent {
  name: string;
  email: string;
  message: string;

  constructor() {
    this.name = "";
    this.email = "";
    this.message = "";
  }
  submitForm() {
    const poruka = `Ime je ${this.name}. mail je ${this.email}. poruka je ${this.message}`;
    alert(poruka);
  }

}
