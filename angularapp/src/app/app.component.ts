import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent {
  userForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.userForm = this.formBuilder.group({
      firstName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50), Validators.pattern('^[a-zA-Z]+$')]],
      gender: ['', Validators.required],
      country: ['', Validators.required],
      city: ['', Validators.required],
      age: ['']
    });
  }

  onSubmit() {
    // Implement form submission logic here
    if (this.userForm.valid) {
      // Form is valid, submit the data
      console.log(this.userForm.value);
    } else {
      // Form is invalid, display error messages
      // You can access error messages using this.userForm.get('controlName').hasError('errorType')
    }
  }
}