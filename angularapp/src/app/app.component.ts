import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  myForm!: FormGroup;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.myForm = this.formBuilder.group({
      firstName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50), Validators.pattern('^[a-z]*$')]],
      gender: ['', Validators.requiredTrue],
      country: ['', Validators.required],
      city: ['', Validators.required],
      age: ['',Validators.required]
    });
  }
  ageValidator(control:any ) {
    if (
      control.parent &&
      control.parent.controls['country'].value &&
      (control.parent.controls['country'].value === 'US' ||
        control.parent.controls['country'].value === 'Canada' ||
        control.parent.controls['country'].value === 'India')
    ) {
      return Validators.required(control);
    }

    return null;
  }
  onSubmit(): void {
    if (this.myForm.valid) {
      console.log(this.myForm.value);
    } else {
      console.log("Invalid form");
    }
  }
}
