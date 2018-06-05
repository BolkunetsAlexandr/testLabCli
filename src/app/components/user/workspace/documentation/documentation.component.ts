import { Component, OnInit } from '@angular/core';
import {FileDescription} from './filedescription';

@Component({
  selector: 'app-documentation',
  templateUrl: './documentation.component.html',
  styleUrls: ['./documentation.component.css']
})
export class DocumentationComponent implements OnInit {

  files: FileDescription[] = [
    { downloadUrl: 'http://www.axmag.com/download/pdfurl-guide.pdf',
      expansion: 'pdf',
      name: 'document'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
