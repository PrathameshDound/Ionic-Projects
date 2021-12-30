import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-outbox',
  templateUrl: './outbox.page.html',
  styleUrls: ['./outbox.page.scss'],
})
export class OutboxPage implements OnInit {
username;
application;
  constructor(public toastController:ToastController) { }

  ngOnInit() {
  }
  async showToast(){
    const toast=await this.toastController.create({
    color:'primary',
    message:`Reference Number ${this.application}, the same reference has been sen to you via mail, Thank You`,
    duration:2000
    });
    toast.present();
    }
   
}

