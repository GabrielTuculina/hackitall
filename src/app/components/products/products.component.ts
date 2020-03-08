import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products: Product[] = [
    { title: "Avira Prime", description: "ASDJjlansdljnaljsndljansljd", price: "319 lei", path: "../../../assets/avira-prime.jpeg", quantity: 8},
    { title: "Avira Antivirus Pro", description: "ASDJjlansdljnaljsndljansljd", price: "149 lei", path: "../../../assets/avira-antivirus-pro.png", quantity: 8},
    { title: "Avira Phantom VPN", description: "ASDJjlansdljnaljsndljansljd", price: "213 lei", path: "../../../assets/avira-phantom-vpn-pro.png", quantity: 8},
    { title: "Avira Password Manager", description: "ASDJjlansdljnaljsndljansljd", price: "85 lei", path: "../../../assets/avira-password-manager-pro.png", quantity: 8},
    { title: "Avira Optimizer", description: "asdasd", price: "43 lei", path: "../../../assets/optimizer.png", quantity: 8},
    { title: "Avira System Speedup", description: "ohosjdnfjkbjklbsdf", price: "106 lei", path: "../../../assets/avira-system-speedup-pro.png", quantity: 8}
  ]

  constructor() { }

  ngOnInit() {
  }

}

export interface Product {
  title: string,
  description: string,
  price: string,
  path: string,
  quantity: number
}