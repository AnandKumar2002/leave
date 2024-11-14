import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  ReactiveFormsModule,
  FormsModule,
} from '@angular/forms';

@Component({
  selector: 'app-add-new-user',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, CommonModule],
  templateUrl: './add-new-user.component.html',
  styleUrls: ['./add-new-user.component.scss'],
})
export class AddNewUserComponent {
  currentDateTime: string = '';

  ngOnInit(): void {
    this.updateDateTime();
    setInterval(() => {
      this.updateDateTime();
    }, 60000);
  }

  updateDateTime(): void {
    const now = new Date();
    this.currentDateTime = now.toLocaleString('en-US', {
      weekday: 'short',
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      hour12: true,
    });
  }

  myForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    yearlyTotalLeaves: new FormControl('', [
      Validators.required,
      Validators.min(1),
    ]),
    CL_Assign: new FormControl('', [Validators.required, Validators.min(0)]),
    ML_Assign: new FormControl('', [Validators.required, Validators.min(0)]),
    EL_Assign: new FormControl('', [Validators.required, Validators.min(0)]),
    CL_Taken: new FormControl('', [Validators.required, Validators.min(0)]),
    ML_Taken: new FormControl('', [Validators.required, Validators.min(0)]),
    EL_Taken: new FormControl('', [Validators.required, Validators.min(0)]),
    leaveStatus: new FormControl(''),
    leaveRequestedDate: new FormControl(''),
    username: new FormControl(''),
    type: new FormControl(''),
    to: new FormControl(''),
    status: new FormControl(''),
  });

  // Handle form submission
  onSubmit() {
    if (this.myForm.valid) {
      console.log(this.myForm.value);
    } else {
      console.log('Form is invalid!');
    }
  }
}
