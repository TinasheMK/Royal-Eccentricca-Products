import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { config } from '../../config/local';
import { ProductDetail, Product, ProductVariantResponse, Category, Colors } from '../store/model';
import { Observable } from 'rxjs';

@Injectable()
export class ProductService {

  publicUrl = `${config.apiUrl}/api`;
  categoryUrl = `${config.apiUrl}/api/public/category`;
  // colorUrl = `${config.apiUrl}/api/public/colors`;

  browsePageSize = 20;
  searchPageSize = 10;

  // headers = new HttpHeaders()
  // .set('Content-Type', 'application/json')
  // .set('Authorization', `Amrod type="integrator", token="bxnLV1Auc1nDZwquCRKHWFhMiBhXunttkmss4Fcjbl8X9dGuCQvoTPczvPRnA/s84Ujzls04siDD2dEL18dorA=="`)
  // .set('X-AMROD-IMPERSONATE', '025692');

  // headers = new HttpHeaders({
  //   'Content-Type': 'application/json',
  //   'Authorization': '',
  //   'X-AMROD-IMPERSONATE': '025692'

  // });

  // options = { headers: this.headers };

  constructor(private httpClient: HttpClient) {
  }

  getProducts(page: number, sort: string, category: string, color: string, minPrice: string, maxPrice: string) {
    if (page === undefined && page === null && page < 0) {
      return;
    }
    let params = new HttpParams();
    params = params.set('page', page.toString());
    params = params.set('size', this.browsePageSize.toString());
    if (sort !== undefined && sort !== null && sort !== 'any') {
      params = params.set('sort', sort);
    }
    if (category && category !== 'any') {
      params = params.set('category', category);
    }

    if (color && color !== 'any') {
      params = params.set('color', color);
    }

    if (minPrice && minPrice !== '0') {
      params = params.set('minPrice', minPrice);
    }

    if (maxPrice && maxPrice !== '0') {
      params = params.set('maxPrice', maxPrice);
    }

    return this.httpClient.get<Object[]>(this.publicUrl,
      {
        params
      });
  }


  getFullProduct(productUrl: string) {
    return this.httpClient.get<ProductDetail>(`${this.publicUrl}/${productUrl}`);
  }

  getFullProduct1(id): Observable<any> {

    return this.httpClient.get(`${this.publicUrl}/product/${id}`);
  }

  getRelatedProducts(productUrl: string) {
    return this.httpClient.get<Array<Product>>(`${this.publicUrl}/related/${productUrl}`);
  }

  getNewlyAdded() {
    return this.httpClient.get(this.publicUrl + '/category/products/196');
  }

  getMostSelling(): Observable<any> {
    return this.httpClient.get(this.publicUrl + '/category/products/196');

  }

  loadCategoryProducts(id): Observable<any> {
    return this.httpClient.get(this.publicUrl + '/category/products/'+id);
  }




  getInterested() {
    return this.httpClient.get<Array<Product>>(this.publicUrl + '/interested');
  }

  searchProduct(page: number, keyword: string) {
    let params = new HttpParams();
    params = params.append('page', page.toString());
    params = params.append('keyword', keyword);
    params = params.set('size', this.searchPageSize.toString());
    return this.httpClient.get<Array<Product>>(this.publicUrl + '/search', {
      params
    });
  }

  getCategory() {
    return this.httpClient.get(this.publicUrl + '/categories');

  }

  getColors() {
    return null;
  }

}
