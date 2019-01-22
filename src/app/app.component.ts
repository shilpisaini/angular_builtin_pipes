import {NgModule, Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-pipes-practice';
  private dateVal: Date = new Date();
  private jsonVal: Object = { moo: 'foo', goo: { too: 'new' }};
}
