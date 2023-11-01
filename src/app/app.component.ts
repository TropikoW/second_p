import { Component,OnInit} from '@angular/core';
import { Products } from './product.models';
import {Product} from './product.models';
import * as AOS from 'aos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  person = {
    name : 'Jovanny',
    initialBalanced : 90,
    balanced : 90,
    buy : false
  };
  index = 0;
  total = 0 as any;
  btnDisabled = false;
  btnReload = false;
  btnBuy = false;
  // Here declared a empty array that has a interface value that i export of from other page
  arrayProduct :Product[]= [];

  // Here declared a array of product that saved some things
  products:Products[] = [
    {
      id : 1,
      name : 'Mystery box',
      price : 10,
      image : 'https://source.unsplash.com/random',
      category : 'anything'
    },
    {
      id : 2,
      name : 'Mystery box',
      price : 30,
      image : 'https://source.unsplash.com/random'
    },
    {
      id : 3,
      name : 'Mystery box',
      price : 50,
      image : 'https://source.unsplash.com/random'
    },
    {
      id : 4,
      name : 'Mystery box',
      price : 5,
      image : 'https://source.unsplash.com/random'
    },
    {
      id : 5,
      name : 'Mystery box',
      price : 90,
      image : 'https://source.unsplash.com/random'
    },
    {
      id : 6,
      name : 'Mystery box',
      price : 9,
      image : 'https://source.unsplash.com/random'
    },
  ];

  // Here i create a function that with a specific parameter push the information to the array
  btnAdd(product : Product) {
    this.arrayProduct.push(product);
    // this.total = this.arrayProduct.reduce((a,b)=>a + b.price,0);
    // this.person.balanced -= this.total;
    for(let i = 0; i < this.arrayProduct.length;i++) {
      this.index = i;
    }
    this.person.balanced -= this.arrayProduct[this.index].price;
    if(this.person.balanced===0){
      this.btnDisabled = true;
    }
  };
  buyProducts() {
    this.person.initialBalanced = this.person.balanced;
    this.person.buy = true;
    this.btnReload = true;
    this.btnBuy = true;
  };
  Reloadbuy() {
    this.arrayProduct.splice(0,this.arrayProduct.length);
    this.person.balanced = this.person.initialBalanced;
    this.btnDisabled = false;
  };
  ngOnInit() {
    AOS.init();
  }
}
