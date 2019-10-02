import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductsService } from 'src/services/products.service';
import { IProduct } from 'src/interfaces/products.interface';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-info',
  templateUrl: './product-info.component.html',
  styleUrls: ['./product-info.component.scss']
})
export class ProductInfoComponent implements OnInit {
  product: IProduct[] = [];
  currentProduct: IProduct[];
  id: number;
  constructor(
    private productsService: ProductsService,
    private route: ActivatedRoute
  ) {}

  private getCurrentProduct(id: number) {
    this.productsService.getCurrentProduct(id).subscribe((res) => {
      this.product = res;
      // console.log(this.product);
      // console.log(this.product[4]);
      // console.log(this.product[id].id);
    });
  }

  ngOnInit() {
    this.id = +this.route.snapshot.params['id'];

    this.getCurrentProduct(this.id);
  }
}
