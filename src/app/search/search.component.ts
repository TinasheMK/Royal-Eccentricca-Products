import { Product } from './../store/model';
import { Component, HostListener, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription, throwError } from 'rxjs';
import { catchError, take } from 'rxjs/operators';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  querySubscribe: Subscription;
  page = 0;
  keyword: string;
  canFetch = false;

  products: any;

  constructor(private productService: ProductService, private route: ActivatedRoute) {
  }

  ngOnInit() {

    this.searchProducts(1);
  }



  searchProducts(page){
    this.querySubscribe = this.route.params.subscribe((params: Params) => {
      this.canFetch = false;
      this.keyword = params.keyword;
      this.productService.searchProduct(page, this.keyword)
        .pipe(take(1), catchError(
          error => {
            this.canFetch = false;
            return throwError(error);
          }
        ))
        .subscribe(data => {
          this.products = data;
          console.log(this.products);
          this.page++;
          this.canFetch = true;
          if (data.length !== 0) {
            this.canFetch = true;
          }
        });
    });
  }


  scrollToTop() {
    let val = 50;
    (function smoothscroll() {
        var currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
        if (val > 0) {
            window.requestAnimationFrame(smoothscroll);
            window.scrollTo(0, currentScroll - (currentScroll / 8));
            val--;
        }

    })();



}
}
