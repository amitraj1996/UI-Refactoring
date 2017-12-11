import { Component, OnInit } from '@angular/core';
import { list } from "../mock-data/mock-lish";
@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.css']
})
export class InboxComponent implements OnInit {
elements = list;
  constructor() { }

  ngOnInit() {
  }

}
