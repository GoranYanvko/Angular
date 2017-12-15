import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import {FlashMessagesService} from 'angular2-flash-messages'
import { AuthServices } from '../../../core/services/auth.services';
import { GardServices } from '../../../core/services/gars/gards.services';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(
    private authService: AuthServices,
    private flashMsg: FlashMessagesService,
    private router: Router,
    private adminService:   GardServices
  ) { }

  ngOnInit() {
  }
  logout() {
    localStorage.clear();
    this.flashMsg.show('Успешно се отпиасхте от системата', { cssClass: 'alert-success', timeout: 3000 } )
    this.router.navigate(['/'])
  }
}
