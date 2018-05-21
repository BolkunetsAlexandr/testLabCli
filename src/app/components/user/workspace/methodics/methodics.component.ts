import { Component, OnInit } from '@angular/core';
import {DescriptionMethodics} from '../../../../domain/methodics/descriptionMethodics';
import {UsermethodicsService} from '../../services/usermethodics.service';

@Component({
  selector: 'app-methodics',
  templateUrl: './methodics.component.html',
  styleUrls: ['./methodics.component.css']
})
export class MethodicsComponent implements OnInit {

  openMethodics: DescriptionMethodics[];
  constructor(private methodicsService: UsermethodicsService) { }

  ngOnInit() {
  }

  getMethodics() {
    this.methodicsService.getAvailableMethodics().subscribe(x => this.openMethodics = x);
  }
}
