import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.page.html',
  styleUrls: ['./quiz.page.scss'],
})
export class QuizPage implements OnInit {
  counter = 0;
  ishidden=false;
  ishidden1=true;
  ishidden2=true;
  ishidden3=true;
  ishidden4= true;
  constructor(public alertController: AlertController) { }

  ngOnInit() {
  }

  checkans(qno, ans) {

    if(qno===1 && ans===1){
this.counter++;
console.log(this.counter);
this.correct();
//this.presentAlert();

    }
    else{
      this.wrong();
    }
    this.ishidden=true;
    this.ishidden1=false;
    this.ishidden2=true;
    this.ishidden3=true;
    this.ishidden4=true;
  }
  checkans1(qno, ans) {

    if(qno===1 && ans===3){
this.counter++;
console.log(this.counter);
this.correct();

    }
    else {
      this.wrong();
    }
    this.ishidden1=true;
    this.ishidden2=false;
    //this.presentAlert();
  }
  checkans2(qno, ans) {

    if(qno===1 && ans===2){
this.counter++;
console.log(this.counter);
this.correct();

    }
    else {
      this.wrong();
    }
    this.ishidden2=true;
    this.ishidden3=false;
   // this.presentAlert();
  }
  checkans3(qno, ans) {

    if(qno===1 && ans===1){
this.counter++;
console.log(this.counter);
this.correct();

    }
    else {
      this.wrong();
    }
    this.ishidden3=true;
    this.ishidden4=false;
    //this.presentAlert();
  }
  checkans4(qno, ans) {

    if(qno===1 && ans===4){
this.counter++;
console.log(this.counter);
//this.correct();

    }
    else {
     // this.wrong();
    }
   // this.ishidden4=true;
   // this.ishidden4=false;
    this.presentAlert();
  }
  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Score',
      message: 'Your score is '+this.counter,
      buttons: ['OK']
    });

    await alert.present();
  }
  async correct() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Congrats',
      message: 'Correct answer',
      buttons: ['OK']
    });

    await alert.present();
  }
  async wrong() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Oops',
      message: 'Wrong Answer',
      buttons: ['OK']
    });

    await alert.present();
  }
}