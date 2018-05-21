import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {Credentials} from '../../model/credentials';
import {RouteService} from '../../services/routeservice.service';

declare var $: any;

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  private credentials: Credentials = {
     login : '',
     password : ''
  }
  constructor(private authService: AuthService,
              private routerService: RouteService) { }

  ngOnInit() {
    this.routerService.forwardToWorkspace();
  }
  logIn() {
    $('#spinnerball').removeClass();
    this.authService.login(this.credentials['login'], this.credentials['password'], () => {
      $('#spinnerball').addClass('no_display');
      this.routerService.forwardToWorkspace();
    });
  }

}
