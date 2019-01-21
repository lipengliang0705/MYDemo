import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
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
  public isShow:boolean=false;
  alert(){
    this.isShow=!this.isShow;
  }
}
