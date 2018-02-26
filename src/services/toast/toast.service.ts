import { Injectable } from '@angular/core';
import { ToastController } from 'ionic-angular';

@Injectable()
export class ToastService {

  constructor(private toastcrtl: ToastController){}

  show(message: string, duration: number = 3000){
    return this.toastcrtl
    .create({
      message,
      duration
    })
    .present();
  }
}
