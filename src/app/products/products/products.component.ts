import { Component, OnInit } from '@angular/core';
import { ProductsDataService } from '../products-data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'pm-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products: Observable<any>;
  constructor(private productDataService: ProductsDataService) { }

  ngOnInit() {
    this.products =this.productDataService.getAllProducts();
  }

}
