import { Component, OnInit } from '@angular/core';
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons'
import { faCreditCard } from '@fortawesome/free-regular-svg-icons'
import { faCcMastercard, faCcVisa, faCcPaypal } from '@fortawesome/free-brands-svg-icons'


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  faInstagram = faInstagram
  faFacebook = faFacebookSquare
  faCartaoC = faCreditCard
  faCartaoM = faCcMastercard
  faCartaoV = faCcVisa
  faCartaoP = faCcPaypal



  constructor() { }

  ngOnInit(): void {
  }

}
