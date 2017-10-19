import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'app/core/shared/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login: string;
  password: string;

  constructor(private authenticationService: AuthenticationService, private router: Router) { }

  ngOnInit() {
  }

  connect() {
    if (this.login === 'login' && this.password === 'pwd') {
      this.authenticationService.setProfile('Name', 'Firstname', this.login);
      this.router.navigate(['/cars']);
    }
  }

}
