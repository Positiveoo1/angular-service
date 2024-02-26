import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private users:string[] = ['abu','sheyx','nuri'];

  getUser():string[] {
   return this.users;
  }
  addUser(name:string):void{
    this.users.push(name)
  }
  constructor() { }
}
