import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {UsermethodicsService} from '../../services/usermethodics.service';
import {MethodicsWithQuestions} from '../../../../domain/methodics/methodicsWithQuestions';

declare var $: any;

@Component({
  selector: 'app-startmethodics',
  templateUrl: './startmethodics.component.html',
  styleUrls: ['./startmethodics.component.css']
})
export class StartMethodicsComponent implements OnInit {

  private methodicsStarting: MethodicsWithQuestions;

  constructor(private currentRouterState: ActivatedRoute,
              private methodicsService: UsermethodicsService) { }

  ngOnInit() {
    const id: string = this.currentRouterState.snapshot.paramMap.get('id');
    console.log(id);
    $('#spinnerball').removeClass();
    this.methodicsService.getMethodicsById(id).subscribe(
      x => {
        this.methodicsStarting = x;
        $('#spinnerball').addClass('no_display'); },
       $('#spinnerball').addClass('no_display')
    );
  }

}
