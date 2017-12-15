import { Component, OnInit } from '@angular/core';
import { AdsInputModel } from '../../../core/models/input-models/ads-input-model';
import { AdminServices } from '../../../core/services/admin/admin.services';
import { FlashMessagesService } from 'angular2-flash-messages/module/flash-messages.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.css']
})
export class AddFormComponent implements OnInit {
  form: AdsInputModel;
  constructor(private http:AdminServices,  private msg: FlashMessagesService, private router: Router) { }

  ngOnInit() {
    this.form = new AdsInputModel('', '', '','','')
  }

  onSubmit() {
    this.http.addPost(this.form).subscribe(data=>{
      if(data['success']) {
      this.msg.show('Успешно добавяне', { cssClass: 'alert-success', timeout: 3000 } )
      this.router.navigate(['/']);
      }
    })
  }

}
