import { Component, OnInit } from '@angular/core';
import { RouterModule, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {
  price: number;
  message: string;

  constructor(private route: ActivatedRoute, private router: RouterModule) { 
    this.route.queryParams.subscribe(params => {
      this.price = params['price'];
    });
  }

  ngOnInit() {
  }

}
