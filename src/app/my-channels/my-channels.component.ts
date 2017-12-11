import { Component, OnInit } from '@angular/core';
import { list } from '../mock-data/mock-lish';
@Component({
  selector: 'app-my-channels',
  templateUrl: './my-channels.component.html',
  styleUrls: ['./my-channels.component.css']
})
export class MyChannelsComponent implements OnInit {
elements = list
  constructor() { }

  ngOnInit() {
  }

}
