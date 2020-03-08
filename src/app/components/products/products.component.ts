import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products: Product[] = [
    { title: "Avira Prime", description: "Detects malware & online threats in real time.\nAnonymizes & encrypts your web browsing.\nSpeeds up your computers & mobile phones.\nGenerates & remembers passwords for you.",
     price: "319 lei", path: "../../../assets/avira-prime.jpeg", quantity: 8},
    { title: "Avira Antivirus Pro", description: "New anti-ransomware stops even unknown mutations before they attack.\nLets you bank, shop, pay & email with complete confidence.\nRepairs files & is lighter on your system than any other antivirus.", 
    price: "149 lei", path: "../../../assets/avira-antivirus-pro.png", quantity: 8},
    { title: "Avira Phantom VPN", description: "Ultra-secure: Top, bank-grade encryption.\nUnlimited data: Ideal for streaming content.\nUltimate privacy: Conceal activities, even on P2P networks.", 
    price: "213 lei", path: "../../../assets/avira-phantom-vpn-pro.png", quantity: 8},
    { title: "Avira Password Manager", description: "Automatically logs you in to your online accounts.\nGenerates strong, unique passwords and securely stores them.\nChecks for weak or reused passwords.\nNotifies you if an online account has been hacked.",
     price: "85 lei", path: "../../../assets/avira-password-manager-pro.png", quantity: 8},
    { title: "Avira Optimizer", description: "Get extra speed & faster starts.\nFree up storage space & memory\nClean your system & browsers.",
     price: "43 lei", path: "../../../assets/optimizer.png", quantity: 8},
    { title: "Avira System Speedup", description: "Maximizes performance with a faster PC\n\rAutomatically cleans junk & clutter.\r\nIncludes 40 premium optimization tools.", price: "106 lei", path: "../../../assets/avira-system-speedup-pro.png", quantity: 8}
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