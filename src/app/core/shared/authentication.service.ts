import { Injectable } from '@angular/core';
import { Profile } from 'app/shared/models/profile';

@Injectable()
export class AuthenticationService {

  private profile: Profile;

  constructor() { }

  setProfile(name: string, firstname: string, login: string) {
    this.profile = new Profile(name, firstname, login);
  }

  isConnected() {
    return this.profile !== undefined;
  }

  getUserProfile() {
    return new Profile('Name', 'First name', 'login@mail.com');
  }

}
