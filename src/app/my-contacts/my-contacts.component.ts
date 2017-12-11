import { Component, OnInit } from '@angular/core';
import { list } from '../mock-data/mock-lish';
@Component({
  selector: 'app-my-contacts',
  templateUrl: './my-contacts.component.html',
  styleUrls: ['./my-contacts.component.css']
})
export class MyContactsComponent implements OnInit {
elements = list;
  constructor() { }

  ngOnInit() {
  }

}
