import { Component, OnInit } from '@angular/core';
import { DataService } from "../data.service";

@Component({
  selector: 'app-users',
  template: `
  <div class="form-signin">
  <h2>User Component</h2>
  <div class="message-view-blk">
    {{message}}
    <ul>
    <li *ngFor="let event of history"><a>{{event}}</a></li>
  </ul>
  </div>
  <div class="form-group">
    <input class="form-control" type="text"  #titleInput>
    <button class="btn custom-btn-primary" type="submit" (click) = 'userMessage(titleInput.value)'>Send</button>
    </div>
  </div>
  `,
  styleUrls: ['./users.component.css'],
  providers: []
})
export class UsersComponent implements OnInit {

  message:string;
  history: Array<string> = [];

  constructor(private data: DataService) {
    this.data.currentMessageProvider.subscribe(
      (val) => {
        this.history.push(val);
      }
    )
  }

  ngOnInit() {
    // this.data.currentMessageUser.subscribe(message => this.message = message)
  }

  userMessage(msg:string) {
    this.data.changeMessageUser(msg);
    this.history.push(msg);
  }

}
