import { Component, OnInit } from '@angular/core';
import { routes } from './ui.module';

@Component({
  selector: 'app-ui',
  templateUrl: './ui.page.html',
  styleUrls: ['./ui.page.scss'],
})
export class UiPage implements OnInit {

  pages = routes;
  constructor() { }

  ngOnInit() {
  }

}
