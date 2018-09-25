import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class DataService {

  // Observable string sources
  private messageSourceProvider = new BehaviorSubject('Welcome User');
  private messageSourceUser = new BehaviorSubject('Welcome Provider');

  // Observable string streams
  currentMessageUser = this.messageSourceUser.asObservable();
  currentMessageProvider = this.messageSourceProvider.asObservable();
  

  constructor() { }

  // Service message commands
  changeMessageProvider(messageProvider: string) {
    this.messageSourceProvider.next(messageProvider)
  }

  changeMessageUser(messageUser: string) {
    this.messageSourceUser.next(messageUser)
  }

}
