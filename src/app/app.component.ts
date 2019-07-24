import { Component, OnInit,OnDestroy } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

import { Subscription } from 'rxjs';
import { startWith } from 'rxjs/operators';
import * as io from 'socket.io-client';
import * as Rx from "rxjs";
import { environment } from "../environments/environment";
@Component({
  // tslint:disable-next-line
  selector: 'body',
  template: '<router-outlet></router-outlet>'
})
export class AppComponent implements OnInit {
  private socket;
  private _docSub: Subscription;
  document:any
  constructor(private router: Router) { }

  ngOnInit() {
    console.log("socket")
    this.socket = io(environment.baseUrl, {path: environment.socketPath});
    this.socket.emit("new user", "user");
    
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0);
    });
  }
  connect() {
    
  }
 
}
