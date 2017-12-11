import { Component, OnInit } from '@angular/core';
import { list } from '../mock-data/mock-lish';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
elements = list;
  constructor() { }

  ngOnInit() {
  }

}
