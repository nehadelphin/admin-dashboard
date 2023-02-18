import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  profileForm: FormGroup = new FormGroup({
    userInformation: new FormGroup({
      username: new FormControl(),
      email: new FormControl(),
      firstName: new FormControl("", [Validators.required]),
      lastName: new FormControl()
    }),

    addressInformation: new FormGroup ({
      address: new FormControl(),
      city: new FormControl(),
      country: new FormControl(),
      postalCode: new FormControl()
    }),

    aboutMeInformation: new FormGroup({
      aboutMe: new FormControl()
    })
  })
}
