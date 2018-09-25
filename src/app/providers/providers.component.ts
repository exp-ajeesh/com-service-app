import { Component, OnInit } from '@angular/core';
import { DataService } from "../data.service";

@Component({
  selector: 'app-providers',
  template: `
  <div class="form-signin">
    <h2>Provider Component</h2>
    <div class="message-view-blk">
      {{message}}
      <ul>
      <li *ngFor="let event of history"><a>{{event}}</a></li>
    </ul>
    </div>
    <div class="form-group">
      <input class="form-control" type="text"  #titleInput>
      <button class="btn custom-btn-primary" type="submit" (click) = 'providerMessage(titleInput.value)'>Send</button>
      </div>
    </div>
  `,
  styleUrls: ['./providers.component.css'],
  providers: []
})
export class ProvidersComponent implements OnInit {

  message:string;
  history: string[] = [];

  constructor(
    private data: DataService
  ) {
    this.data.currentMessageUser.subscribe(
      (val) => {
        this.history.push(val);
      }
    )
  }

  ngOnInit() {
    // this.data.currentMessageProvider.subscribe(message => this.message = message)
  }

  providerMessage(msg:string) {
    this.data.changeMessageProvider(msg)
    this.history.push(msg);
  }

}
