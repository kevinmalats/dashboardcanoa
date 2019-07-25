import { Component, OnInit,OnDestroy } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';




@Component({
  // tslint:disable-next-line
  selector: 'body',
  template: '<router-outlet></router-outlet>'
})
export class AppComponent implements OnInit {
 

  document:any
  constructor(private router: Router) { }

  ngOnInit() {
    console.log("socket")
    
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0);
    });
  }

 
}
