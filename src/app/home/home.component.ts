import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  referralData = [
    {
      heading: 'KreditBee',
      image: 'KreditBee.jpg',
      link: 'https://kb.onelink.me/02Je/kbrefer',
      desc: `Hi! KreditBee is my go-to Instant Personal Loan provider, and I'm sure you'll love it as well. Thanks to their 100% online loan application process, you can get up to Rs. 2 Lakhs credited directly into your bank account! 
              Just download the app & use my referral code: <b>THASXB8Z4</b> to get discount on processing fees while availing loan.`
    },
    {
      heading: 'MyFIRST Partner',
      image: 'MyFIRSTPartner.png',
      link: 'https://play.google.com/store/apps/details?id=com.capitalfirst',
      desc: `Congratulations! You have been referred by our MyFIRST Partner for a new Personal Loan. Please click on the link below to start a new personal loan application with IDFC FIRST Bank and enter the referral ID <b>7030349754</b>. TnC Apply.`
    },
    {
      heading: `Postpe - India's first QR Credit App is here!`,
      image: 'Postpe.png',
      link: 'https://postpe.onelink.me/CHvc/lnfbj9ki',
      desc: `Spend Today, Pay Next Month!
              0% Interest.
              5% Cashback.`
    },
    {
      heading: `Dhani: Online Shopping App`,
      image: 'dhani.png',
      link: 'https://dhani.onelink.me/zcy7/gjby9vfe',
      desc: `Hi!, I have a special gift for you.
      Join me on dhani and shop for Best Quality Products at Lowest Prices & Free Delivery. 1 lakh+ products available.
      Use my code <b>SUBRAMANYAM 688103</b> and earn 10% discount on your order`
    },
    {
      heading: `Nivesh: Invest in mutual funds`,
      image: 'Nivesh.png',
      link: 'https://nivesh.app.link/sBuN3WAYnob',
      desc: `Nivesh is an award-winning digital-first platform that enables independent mutual funds distributors to grow their AUM with state-of-the-art technology`
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
