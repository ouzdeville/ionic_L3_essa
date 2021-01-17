import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  // Pour déclarer une variable on met :
  // Ma_variable:type= valeur
  cryptos: any = [];// cryptos un tableau vide
  gaming: string ="";
  constructor(private http: HttpClient) {
    this.cryptos = [
      { 'name': 'Bitcoin', 'price': '$8883,45' },
      { 'name': 'Ethereum', 'price': '$$635,25' },
      { 'name': 'Ripple', 'price': '$0,873466' },
      { 'name': 'Bitcoin Cash', 'price': '$1 392,80' },
      { 'name': 'EOS', 'price': '$11,57' },
      { 'name': 'Litecoin', 'price': '$150,95' },
      { 'name': 'Cardano', 'price': '$0,288146' },
      { 'name': 'Stellar', 'price': '$0,373197' },
      { 'name': 'IOTA', 'price': '$2,12' },
      { 'name': 'NEO', 'price': '$76,89' }
    ];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingPage');
  }

  moneyList(){
    this.http.get(`localhost:2020/user/auth`).subscribe(
      data => {
      this.cryptos = data['transactions'];
    }, err => {
        console.log("Error occured.")
    });
  }

}
