import { Component } from '@angular/core';
import {Title} from '@angular/platform-browser'
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
 
  mySite= 'My Angular Site';
  constructor(private title:Title) {

  }
  ngOnInit(): void {
    this.title.setTitle(this.mySite)
  }

}
