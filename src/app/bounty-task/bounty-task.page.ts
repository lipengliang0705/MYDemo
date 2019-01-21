import {Component, OnInit} from '@angular/core';
import { NavController} from '@ionic/angular';

@Component({
    selector: 'app-bounty-task',
    templateUrl: './bounty-task.page.html',
    styleUrls: ['./bounty-task.page.scss'],
})
export class BountyTaskPage {

    constructor(
        public navCtrl: NavController,
    ) {
    }
    public isShow: boolean = false;

    alert() {
        this.isShow = !this.isShow;
    }

    navBack() {
        this.navCtrl.goBack();
    }

}
