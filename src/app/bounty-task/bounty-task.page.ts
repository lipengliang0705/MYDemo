import {Component, OnInit} from '@angular/core';
import {AlertController} from '@ionic/angular';
import {from} from 'rxjs';

@Component({
    selector: 'app-bounty-task',
    templateUrl: './bounty-task.page.html',
    styleUrls: ['./bounty-task.page.scss'],
})
export class BountyTaskPage {

    // constructor(
    //   public alertController:AlertController

    // ) { }
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
    public isShow: boolean = false;

    alert() {
        this.isShow = !this.isShow;
    }
}
