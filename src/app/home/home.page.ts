/*  home.page.ts  */
import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { GlobalData } from '../services/global-data';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ToastController } from '@ionic/angular';

import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButton,
  IonItem,
  IonInput,
  IonFooter,
  IonMenu,
  IonList,
  IonMenuButton,
  IonButtons,
  IonLabel,
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonButton,
    IonItem,
    IonInput,
    IonFooter,
    IonMenu,
    IonList,
    IonMenuButton,
    IonButtons,
    IonLabel,
    CommonModule,
    FormsModule,
  ],
})
export class HomePage {
  username: string = '';
  scoreHistory: any[] = [];

  ngOnInit() {
    this.username = this.global.getUsername();
    this.scoreHistory = this.global.getScoreHistory();
  }

  constructor(
    private global: GlobalData,
    private router: Router,
    private toastCtrl: ToastController
  ) {}

  async startQuiz() {
    if (!this.username.trim()) {
      const toast = await this.toastCtrl.create({
        message: 'Please enter your name!',
        duration: 1500,
        color: 'danger',
      });
      toast.present();
      return;
    }

    this.global.setUsername(this.username);
    this.router.navigate(['/quiz']);
  }
}
