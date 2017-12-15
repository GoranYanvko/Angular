import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'
import {AuthComponentModule} from './components/auth/auth.module'
import {RouterModule} from '@angular/router'
import { SheredComponentModule } from './components/shered/shered.module';

import { AppComponent } from './app.component';
import { ServicesModule } from './core/services/services.module';
import {FlashMessagesModule} from 'angular2-flash-messages';

import { HomeComponent } from './components/home/home.component';

import {routes} from './app.routing';
import { GardsModule } from './gards/gards.module';
import { AdminComponent } from './components/admin/admin.component';
import { AdminComponentsModule } from './components/admin/admin.module';
import { PostComponentModule } from './components/post/post.module';
//import { PostComponentModule } from './components/post/post.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
   
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ServicesModule,
    AuthComponentModule,
    SheredComponentModule,
    RouterModule.forRoot(routes),
    FlashMessagesModule.forRoot(),
    GardsModule,
    AdminComponentsModule,
    PostComponentModule
   
   
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
