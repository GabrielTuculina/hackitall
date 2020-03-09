import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-add-money',
  templateUrl: './add-money.component.html',
  styleUrls: ['./add-money.component.scss']
})
export class AddMoneyComponent implements OnInit {
  price: number;
  message: string;
  finalTr: string;
  isButtonVisible: boolean;
  constructor(private route: ActivatedRoute, private router: RouterModule) { 
    this.route.queryParams.subscribe(params => {
      this.price = params['price'];
      this.message = params['message'];
    });
    this.isButtonVisible = true;
  }

  ngOnInit() {
  }
  showMessage(){
    this.finalTr = "Multumim pentru tranzactie!";
    this.message = "";
    this.isButtonVisible = false;
  }

}
