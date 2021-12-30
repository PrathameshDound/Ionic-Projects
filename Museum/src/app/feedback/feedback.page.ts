// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-feedback',
//   templateUrl: './feedback.page.html',
//   styleUrls: ['./feedback.page.scss'],
// })
// export class FeedbackPage implements OnInit {

//   constructor() { }

//   ngOnInit() {
//   }

// }

import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
@Component({
 selector: 'app-feedback',
 templateUrl: './feedback.page.html',
 styleUrls: ['./feedback.page.scss'],
})
export class FeedbackPage implements OnInit {
 username;
 constructor(public toastController:ToastController) { }
 ngOnInit() {
 }
 async showToast(){
 const toast=await this.toastController.create({
 color:'success',
 message:`Thanks ${this.username} for your valuable feedback`,
 duration:2000
 });
 toast.present();
}

}