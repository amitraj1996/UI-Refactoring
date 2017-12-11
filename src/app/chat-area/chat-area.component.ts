import { Component, OnInit } from '@angular/core';
import { list } from '../mock-data/mock-lish';
@Component({
  selector: 'app-chat-area',
  templateUrl: './chat-area.component.html',
  styleUrls: ['./chat-area.component.css']
})
export class ChatAreaComponent implements OnInit {
elements = list;
  constructor() { }

  ngOnInit() {
  }

}
