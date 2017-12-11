import { Component, OnInit } from '@angular/core';
import { list } from '../mock-data/mock-lish';
 @Component({
  selector: 'app-channels',
  templateUrl: './channels.component.html',
  styleUrls: ['./channels.component.css']
})
export class ChannelsComponent implements OnInit {
  elements = list;
  constructor() { }

  ngOnInit() {
  }

}
