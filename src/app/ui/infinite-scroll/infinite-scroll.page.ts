import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-infinite-scroll',
  templateUrl: './infinite-scroll.page.html',
  styleUrls: ['./infinite-scroll.page.scss'],
})
export class InfiniteScrollPage implements OnInit {

  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;

  data = [];
  portion = [
    'Start of portion',
    'Item of data',
    'Item of data',
    'Item of data',
    'Item of data',
    'Item of data',
    'Item of data',
    'Item of data',
    'Item of data',
    'Item of data',
    'Item of data',
    'Item of data',
    'End of portion',
    '--------------',
  ];
  constructor() {
    this.data.push(...this.portion);
  }

  ngOnInit() {}

  loadData(event) {
    setTimeout(() => {
      console.log('Done');
      event.target.complete();
      this.data.push(...this.portion);

      if (this.data.length > 100) {
        event.target.disabled = true;
      }
    }, 500);
  }

}
