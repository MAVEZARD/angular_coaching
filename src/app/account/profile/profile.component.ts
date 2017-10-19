import { Component, OnInit } from '@angular/core';
import { Profile } from 'app/shared/models/profile';
import { AuthenticationService } from 'app/core/shared/authentication.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  profile: Profile;

  constructor(private authenticationService: AuthenticationService) { }

  ngOnInit() {
    this.profile = this.authenticationService.getUserProfile();
  }

}
