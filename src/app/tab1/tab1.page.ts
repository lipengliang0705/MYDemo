import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

public isShow:boolean=false;
alert(){
  console.log(1111);
  this.isShow=!this.isShow;
}
  // constructor(
  //   public alertController: AlertController
  // ){}



  // async alert() {
  //   const alert = await this.alertController.create({
  //     header: 'Alert',
  //     subHeader: 'Subtitle',
  //     message: 'This is an alert message.',
  //     cssClass:'custom-css',
  //     buttons: ['OK','cancel']
  //   });

  //   await alert.present();
  // }

}
