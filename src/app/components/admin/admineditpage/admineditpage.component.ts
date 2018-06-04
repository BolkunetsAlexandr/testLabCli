import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admineditpage',
  templateUrl: './admineditpage.component.html',
  styleUrls: ['./admineditpage.component.css']
})
export class AdminEditPageComponent implements OnInit {

  private prevHeader: string;
  private header: string;
  private prevBody: string;
  private body = 'HELLO';
  private display = 'no_display';
  private displayBody = 'no_display';

  constructor() { }

  ngOnInit() {
  }

  changeDisplayStyleHeader() {
    if (this.display) {
      this.display = null;
    } else {
      this.display = 'no_display';
    }
  }

  changeDisplayStyleBody() {
    if (this.displayBody) {
      this.displayBody = null;
    } else {
      this.displayBody = 'no_display';
    }
  }

  openHeaderEditBox() {
    this.changeDisplayStyleHeader();
    this.prevHeader = this.header;
  }
  saveNewHeader() {
    this.changeDisplayStyleHeader();
  }
  revertHeader() {
    this.header = this.prevHeader;
    this.changeDisplayStyleHeader();
  }

  saveNewBody() {
    this.changeDisplayStyleBody();
  }

  revertBody() {
    this.body = this.prevBody;
    this.changeDisplayStyleBody();
  }

  openBodyEditBox() {
    this.changeDisplayStyleBody();
    this.prevBody = this.body;
  }
}
