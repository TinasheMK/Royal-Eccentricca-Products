import { ShowcaseState } from './../../store/showcase/showcase.reducer';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import * as fromApp from '../../store/app.reducers';
import { Store } from '@ngrx/store';
import * as ShowcaseActions from '../../store/showcase/showcase.actions';
import { take } from 'rxjs/operators';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-newly-added',
  templateUrl: './newly-added.component.html',
  styleUrls: ['./newly-added.component.scss']
})
export class NewlyAddedComponent implements OnInit {

  showcaseState: Observable<ShowcaseState>;
  products: any;

  constructor(
    private store: Store<fromApp.AppState>,
    private productService: ProductService
    ) {
  }

  ngOnInit() {
    this.getProducts();
    this.showcaseState = this.store.select('showcase');
    this.showcaseState
      .pipe(take(1))
      .subscribe(
        data => {
          console.log(data);
          console.log("Tinashe Makarudze");
          if (data.newlyAdded.length === 0) {
            this.store.dispatch(new ShowcaseActions.FetchNewlyAdded());
          }
        }
      );
  }

  getProducts(){

    this.productService.getMostSelling().subscribe(
      data => {
        // this.products = data.Body.Products;
        this.products =
        [

          {
              "ProductId": 89851,
              "ProductCode": "ALT-AVL",
              "ProductName": "Avallon Chef Beanie",
              "Behavior": 0,
              "Promotion": 0,
              "PromotionStyle": null,
              "BrandingRibbonStyle": null,
              "BrandingRibbonImage": "https://www.amrod.co.za/images/freebranding/.jpg",
              "Price": 43.99,
              "PriceWithCurrency": 0.0,
              "Sizes": [],
              "ImageUrl": "https://productcatalogue2020.s3.amazonaws.com/ALT-AVL_151_141.jpg",
              "ImageUrl2x": "https://productcatalogue2020.s3.amazonaws.com/ALT-AVL_260_250.jpg",
              "ImageUrl3x": "https://productcatalogue2020.s3.amazonaws.com/ALT-AVL_460_350.jpg",
              "ImageUrlXL": "https://productcatalogue2020.s3.amazonaws.com/ALT-AVL_default.jpg",
              "IsEssential": true,
              "IsWorkwear": false,
              "WorkwearInfo": null
          },
          {
              "ProductId": 90206,
              "ProductCode": "ALT-LOS-C",
              "ProductName": "Ladies Short Sleeve Oxford Shirt  - Charcoal",
              "Behavior": 0,
              "Promotion": 3,
              "PromotionStyle": "ribbon red",
              "BrandingRibbonStyle": null,
              "BrandingRibbonImage": "https://www.amrod.co.za/images/freebranding/.jpg",
              "Price": 103.65,
              "PriceWithCurrency": 0.0,
              "Sizes": [
                  {
                      "SizeCode": "S",
                      "Price": 103.65,
                      "PriceWithCurrency": 0.0,
                      "InStock": 0
                  },
                  {
                      "SizeCode": "M",
                      "Price": 103.65,
                      "PriceWithCurrency": 0.0,
                      "InStock": 0
                  },
                  {
                      "SizeCode": "L",
                      "Price": 103.65,
                      "PriceWithCurrency": 0.0,
                      "InStock": 0
                  },
                  {
                      "SizeCode": "XL",
                      "Price": 103.65,
                      "PriceWithCurrency": 0.0,
                      "InStock": 0
                  },
                  {
                      "SizeCode": "2XL",
                      "Price": 103.65,
                      "PriceWithCurrency": 0.0,
                      "InStock": 0
                  },
                  {
                      "SizeCode": "3XL",
                      "Price": 103.65,
                      "PriceWithCurrency": 0.0,
                      "InStock": 0
                  },
                  {
                      "SizeCode": "4XL",
                      "Price": 103.65,
                      "PriceWithCurrency": 0.0,
                      "InStock": 0
                  }
              ],
              "ImageUrl": "https://productcatalogue2015.s3.amazonaws.com/ALT-LOS-C_151_141.jpg",
              "ImageUrl2x": "https://productcatalogue2015.s3.amazonaws.com/ALT-LOS-C_260_250.jpg",
              "ImageUrl3x": "https://productcatalogue2015.s3.amazonaws.com/ALT-LOS-C_460_350.jpg",
              "ImageUrlXL": "https://productcatalogue2015.s3.amazonaws.com/ALT-LOS-C_default.jpg",
              "IsEssential": true,
              "IsWorkwear": false,
              "WorkwearInfo": null
          },
          {
              "ProductId": 90389,
              "ProductCode": "ALT-RTR",
              "ProductName": "Unisex Retro High Top Canvas Sneaker",
              "Behavior": 0,
              "Promotion": 0,
              "PromotionStyle": null,
              "BrandingRibbonStyle": null,
              "BrandingRibbonImage": "https://www.amrod.co.za/images/freebranding/.jpg",
              "Price": 219.99,
              "PriceWithCurrency": 0.0,
              "Sizes": [
                  {
                      "SizeCode": "2",
                      "Price": 219.99,
                      "PriceWithCurrency": 0.0,
                      "InStock": 0
                  },
                  {
                      "SizeCode": "3",
                      "Price": 219.99,
                      "PriceWithCurrency": 0.0,
                      "InStock": 0
                  },
                  {
                      "SizeCode": "4",
                      "Price": 219.99,
                      "PriceWithCurrency": 0.0,
                      "InStock": 0
                  },
                  {
                      "SizeCode": "5",
                      "Price": 219.99,
                      "PriceWithCurrency": 0.0,
                      "InStock": 0
                  },
                  {
                      "SizeCode": "6",
                      "Price": 219.99,
                      "PriceWithCurrency": 0.0,
                      "InStock": 0
                  },
                  {
                      "SizeCode": "7",
                      "Price": 219.99,
                      "PriceWithCurrency": 0.0,
                      "InStock": 0
                  },
                  {
                      "SizeCode": "8",
                      "Price": 219.99,
                      "PriceWithCurrency": 0.0,
                      "InStock": 0
                  },
                  {
                      "SizeCode": "9",
                      "Price": 219.99,
                      "PriceWithCurrency": 0.0,
                      "InStock": 0
                  },
                  {
                      "SizeCode": "10",
                      "Price": 219.99,
                      "PriceWithCurrency": 0.0,
                      "InStock": 0
                  },
                  {
                      "SizeCode": "11",
                      "Price": 219.99,
                      "PriceWithCurrency": 0.0,
                      "InStock": 0
                  },
                  {
                      "SizeCode": "12",
                      "Price": 219.99,
                      "PriceWithCurrency": 0.0,
                      "InStock": 0
                  },
                  {
                      "SizeCode": "13",
                      "Price": 219.99,
                      "PriceWithCurrency": 0.0,
                      "InStock": 0
                  }
              ],
              "ImageUrl": "https://productcatalogue2015.s3.amazonaws.com/ALT-RTR_151_141.jpg",
              "ImageUrl2x": "https://productcatalogue2015.s3.amazonaws.com/ALT-RTR_260_250.jpg",
              "ImageUrl3x": "https://productcatalogue2015.s3.amazonaws.com/ALT-RTR_460_350.jpg",
              "ImageUrlXL": "https://productcatalogue2015.s3.amazonaws.com/ALT-RTR_default.jpg",
              "IsEssential": true,
              "IsWorkwear": false,
              "WorkwearInfo": null
          },
          {
              "ProductId": 213957,
              "ProductCode": "ALT-SNU-BL",
              "ProductName": "Snugg Neck Warmer & Beanie - Black",
              "Behavior": 0,
              "Promotion": 3,
              "PromotionStyle": "ribbon red",
              "BrandingRibbonStyle": null,
              "BrandingRibbonImage": "https://www.amrod.co.za/images/freebranding/.jpg",
              "Price": 23.99,
              "PriceWithCurrency": 0.0,
              "Sizes": [],
              "ImageUrl": "https://productcatalogue2015.s3.amazonaws.com/ALT-SNU-BL_151_141.jpg",
              "ImageUrl2x": "https://productcatalogue2015.s3.amazonaws.com/ALT-SNU-BL_260_250.jpg",
              "ImageUrl3x": "https://productcatalogue2015.s3.amazonaws.com/ALT-SNU-BL_460_350.jpg",
              "ImageUrlXL": "https://productcatalogue2015.s3.amazonaws.com/ALT-SNU-BL_default.jpg",
              "IsEssential": true,
              "IsWorkwear": false,
              "WorkwearInfo": null
          },
          {
              "ProductId": 90401,
              "ProductCode": "ALT-SRL",
              "ProductName": "Ladies Santorini Golf Shirt",
              "Behavior": 0,
              "Promotion": 0,
              "PromotionStyle": null,
              "BrandingRibbonStyle": null,
              "BrandingRibbonImage": "https://www.amrod.co.za/images/freebranding/.jpg",
              "Price": 199.99,
              "PriceWithCurrency": 0.0,
              "Sizes": [
                  {
                      "SizeCode": "S",
                      "Price": 199.99,
                      "PriceWithCurrency": 0.0,
                      "InStock": 0
                  },
                  {
                      "SizeCode": "M",
                      "Price": 199.99,
                      "PriceWithCurrency": 0.0,
                      "InStock": 0
                  },
                  {
                      "SizeCode": "L",
                      "Price": 199.99,
                      "PriceWithCurrency": 0.0,
                      "InStock": 0
                  },
                  {
                      "SizeCode": "XL",
                      "Price": 199.99,
                      "PriceWithCurrency": 0.0,
                      "InStock": 0
                  },
                  {
                      "SizeCode": "2XL",
                      "Price": 199.99,
                      "PriceWithCurrency": 0.0,
                      "InStock": 0
                  },
                  {
                      "SizeCode": "3XL",
                      "Price": 199.99,
                      "PriceWithCurrency": 0.0,
                      "InStock": 0
                  },
                  {
                      "SizeCode": "4XL",
                      "Price": 199.99,
                      "PriceWithCurrency": 0.0,
                      "InStock": 0
                  }
              ],
              "ImageUrl": "https://productcatalogue2020.s3.amazonaws.com/ALT-SRL_151_141.jpg",
              "ImageUrl2x": "https://productcatalogue2020.s3.amazonaws.com/ALT-SRL_260_250.jpg",
              "ImageUrl3x": "https://productcatalogue2020.s3.amazonaws.com/ALT-SRL_460_350.jpg",
              "ImageUrlXL": "https://productcatalogue2020.s3.amazonaws.com/ALT-SRL_default.jpg",
              "IsEssential": true,
              "IsWorkwear": false,
              "WorkwearInfo": null
          },
          {
              "ProductId": 97473,
              "ProductCode": "BG-AL-334-B",
              "ProductName": "Expression Maxi Gift Bag 150gsm",
              "Behavior": 0,
              "Promotion": 3,
              "PromotionStyle": "ribbon red",
              "BrandingRibbonStyle": null,
              "BrandingRibbonImage": "https://www.amrod.co.za/images/freebranding/.jpg",
              "Price": 8.99,
              "PriceWithCurrency": 0.0,
              "Sizes": [],
              "ImageUrl": "https://productcatalogue2015.s3.amazonaws.com/BG-AL-334-B_151_141.jpg",
              "ImageUrl2x": "https://productcatalogue2015.s3.amazonaws.com/BG-AL-334-B_260_250.jpg",
              "ImageUrl3x": "https://productcatalogue2015.s3.amazonaws.com/BG-AL-334-B_460_350.jpg",
              "ImageUrlXL": "https://productcatalogue2015.s3.amazonaws.com/BG-AL-334-B_default.jpg",
              "IsEssential": true,
              "IsWorkwear": false,
              "WorkwearInfo": null
          },
          {
              "ProductId": 97474,
              "ProductCode": "BG-AL-335-B",
              "ProductName": "Custom Ecological  Mini Gift Bag 150gsm",
              "Behavior": 0,
              "Promotion": 0,
              "PromotionStyle": null,
              "BrandingRibbonStyle": null,
              "BrandingRibbonImage": "https://www.amrod.co.za/images/freebranding/.jpg",
              "Price": 14.69,
              "PriceWithCurrency": 0.0,
              "Sizes": [],
              "ImageUrl": "https://productcatalogue2015.s3.amazonaws.com/BG-AL-335-B_151_141.jpg",
              "ImageUrl2x": "https://productcatalogue2015.s3.amazonaws.com/BG-AL-335-B_260_250.jpg",
              "ImageUrl3x": "https://productcatalogue2015.s3.amazonaws.com/BG-AL-335-B_460_350.jpg",
              "ImageUrlXL": "https://productcatalogue2015.s3.amazonaws.com/BG-AL-335-B_default.jpg",
              "IsEssential": true,
              "IsWorkwear": false,
              "WorkwearInfo": null
          },
          {
              "ProductId": 97475,
              "ProductCode": "BG-AL-336-B",
              "ProductName": "Custom Ecological Midi Gift Bag 150gsm",
              "Behavior": 0,
              "Promotion": 0,
              "PromotionStyle": null,
              "BrandingRibbonStyle": null,
              "BrandingRibbonImage": "https://www.amrod.co.za/images/freebranding/.jpg",
              "Price": 16.29,
              "PriceWithCurrency": 0.0,
              "Sizes": [],
              "ImageUrl": "https://productcatalogue2015.s3.amazonaws.com/BG-AL-336-B_151_141.jpg",
              "ImageUrl2x": "https://productcatalogue2015.s3.amazonaws.com/BG-AL-336-B_260_250.jpg",
              "ImageUrl3x": "https://productcatalogue2015.s3.amazonaws.com/BG-AL-336-B_460_350.jpg",
              "ImageUrlXL": "https://productcatalogue2015.s3.amazonaws.com/BG-AL-336-B_default.jpg",
              "IsEssential": true,
              "IsWorkwear": false,
              "WorkwearInfo": null
          },
          {
              "ProductId": 97476,
              "ProductCode": "BG-AL-337-B",
              "ProductName": "Custom Ecological Maxi Gift Bag 150gsm",
              "Behavior": 0,
              "Promotion": 0,
              "PromotionStyle": null,
              "BrandingRibbonStyle": null,
              "BrandingRibbonImage": "https://www.amrod.co.za/images/freebranding/.jpg",
              "Price": 18.99,
              "PriceWithCurrency": 0.0,
              "Sizes": [],
              "ImageUrl": "https://productcatalogue2015.s3.amazonaws.com/BG-AL-337-B_151_141.jpg",
              "ImageUrl2x": "https://productcatalogue2015.s3.amazonaws.com/BG-AL-337-B_260_250.jpg",
              "ImageUrl3x": "https://productcatalogue2015.s3.amazonaws.com/BG-AL-337-B_460_350.jpg",
              "ImageUrlXL": "https://productcatalogue2015.s3.amazonaws.com/BG-AL-337-B_default.jpg",
              "IsEssential": true,
              "IsWorkwear": false,
              "WorkwearInfo": null
          },
          {
              "ProductId": 94756,
              "ProductCode": "BG-AL-342-B",
              "ProductName": "Storm Dry Bag",
              "Behavior": 0,
              "Promotion": 0,
              "PromotionStyle": null,
              "BrandingRibbonStyle": null,
              "BrandingRibbonImage": "https://www.amrod.co.za/images/freebranding/.jpg",
              "Price": 55.99,
              "PriceWithCurrency": 0.0,
              "Sizes": [],
              "ImageUrl": "https://productcatalogue2015.s3.amazonaws.com/BG-AL-342-B_151_141.jpg",
              "ImageUrl2x": "https://productcatalogue2015.s3.amazonaws.com/BG-AL-342-B_260_250.jpg",
              "ImageUrl3x": "https://productcatalogue2015.s3.amazonaws.com/BG-AL-342-B_460_350.jpg",
              "ImageUrlXL": "https://productcatalogue2015.s3.amazonaws.com/BG-AL-342-B_default.jpg",
              "IsEssential": true,
              "IsWorkwear": false,
              "WorkwearInfo": null
          },
          {
              "ProductId": 97420,
              "ProductCode": "BG-AL-343-B",
              "ProductName": "Activity Waist Bag",
              "Behavior": 0,
              "Promotion": 0,
              "PromotionStyle": null,
              "BrandingRibbonStyle": null,
              "BrandingRibbonImage": "https://www.amrod.co.za/images/freebranding/.jpg",
              "Price": 36.99,
              "PriceWithCurrency": 0.0,
              "Sizes": [],
              "ImageUrl": "https://productcatalogue2015.s3.amazonaws.com/BG-AL-343-B_151_141.jpg",
              "ImageUrl2x": "https://productcatalogue2015.s3.amazonaws.com/BG-AL-343-B_260_250.jpg",
              "ImageUrl3x": "https://productcatalogue2015.s3.amazonaws.com/BG-AL-343-B_460_350.jpg",
              "ImageUrlXL": "https://productcatalogue2015.s3.amazonaws.com/BG-AL-343-B_default.jpg",
              "IsEssential": true,
              "IsWorkwear": false,
              "WorkwearInfo": null
          },
          {
              "ProductId": 26642,
              "ProductCode": "IDEA-NTB",
              "ProductName": "Nova Tog Bag",
              "Behavior": 0,
              "Promotion": 0,
              "PromotionStyle": null,
              "BrandingRibbonStyle": null,
              "BrandingRibbonImage": "https://www.amrod.co.za/images/freebranding/.jpg",
              "Price": 93.99,
              "PriceWithCurrency": 0.0,
              "Sizes": [],
              "ImageUrl": "https://productcatalogue2015.s3.amazonaws.com/IDEA-NTB_151_141.jpg",
              "ImageUrl2x": "https://productcatalogue2015.s3.amazonaws.com/IDEA-NTB_260_250.jpg",
              "ImageUrl3x": "https://productcatalogue2015.s3.amazonaws.com/IDEA-NTB_460_350.jpg",
              "ImageUrlXL": "https://productcatalogue2015.s3.amazonaws.com/IDEA-NTB_default.jpg",
              "IsEssential": true,
              "IsWorkwear": false,
              "WorkwearInfo": null
          },
          {
              "ProductId": 26649,
              "ProductCode": "IDEA-SCY",
              "ProductName": "Scotland Yard Anti Theft Laptop Backpack",
              "Behavior": 0,
              "Promotion": 0,
              "PromotionStyle": null,
              "BrandingRibbonStyle": null,
              "BrandingRibbonImage": "https://www.amrod.co.za/images/freebranding/.jpg",
              "Price": 419.99,
              "PriceWithCurrency": 0.0,
              "Sizes": [],
              "ImageUrl": "https://productcatalogue2015.s3.amazonaws.com/IDEA-SCY_151_141.jpg",
              "ImageUrl2x": "https://productcatalogue2015.s3.amazonaws.com/IDEA-SCY_260_250.jpg",
              "ImageUrl3x": "https://productcatalogue2015.s3.amazonaws.com/IDEA-SCY_460_350.jpg",
              "ImageUrlXL": "https://productcatalogue2015.s3.amazonaws.com/IDEA-SCY_default.jpg",
              "IsEssential": true,
              "IsWorkwear": false,
              "WorkwearInfo": null
          },
          {
              "ProductId": 26652,
              "ProductCode": "IDEA-TLB",
              "ProductName": "Transit Laptop Backpack",
              "Behavior": 0,
              "Promotion": 0,
              "PromotionStyle": null,
              "BrandingRibbonStyle": null,
              "BrandingRibbonImage": "https://www.amrod.co.za/images/freebranding/.jpg",
              "Price": 299.99,
              "PriceWithCurrency": 0.0,
              "Sizes": [],
              "ImageUrl": "https://productcatalogue2015.s3.amazonaws.com/IDEA-TLB_151_141.jpg",
              "ImageUrl2x": "https://productcatalogue2015.s3.amazonaws.com/IDEA-TLB_260_250.jpg",
              "ImageUrl3x": "https://productcatalogue2015.s3.amazonaws.com/IDEA-TLB_460_350.jpg",
              "ImageUrlXL": "https://productcatalogue2015.s3.amazonaws.com/IDEA-TLB_default.jpg",
              "IsEssential": true,
              "IsWorkwear": false,
              "WorkwearInfo": null
          },
          {
              "ProductId": 26653,
              "ProductCode": "IDEA-TTV",
              "ProductName": "Top Travel Trolley Bag",
              "Behavior": 0,
              "Promotion": 0,
              "PromotionStyle": null,
              "BrandingRibbonStyle": null,
              "BrandingRibbonImage": "https://www.amrod.co.za/images/freebranding/.jpg",
              "Price": 499.99,
              "PriceWithCurrency": 0.0,
              "Sizes": [],
              "ImageUrl": "https://productcatalogue2015.s3.amazonaws.com/IDEA-TTV_151_141.jpg",
              "ImageUrl2x": "https://productcatalogue2015.s3.amazonaws.com/IDEA-TTV_260_250.jpg",
              "ImageUrl3x": "https://productcatalogue2015.s3.amazonaws.com/IDEA-TTV_460_350.jpg",
              "ImageUrlXL": "https://productcatalogue2015.s3.amazonaws.com/IDEA-TTV_default.jpg",
              "IsEssential": true,
              "IsWorkwear": false,
              "WorkwearInfo": null
          },
          {
              "ProductId": 108857,
              "ProductCode": "MT-AL-368-B",
              "ProductName": "Free-Nav Car Phone Mount",
              "Behavior": 0,
              "Promotion": 0,
              "PromotionStyle": null,
              "BrandingRibbonStyle": null,
              "BrandingRibbonImage": "https://www.amrod.co.za/images/freebranding/.jpg",
              "Price": 41.99,
              "PriceWithCurrency": 0.0,
              "Sizes": [],
              "ImageUrl": "https://productcatalogue2015.s3.amazonaws.com/MT-AL-368-B_151_141.jpg",
              "ImageUrl2x": "https://productcatalogue2015.s3.amazonaws.com/MT-AL-368-B_260_250.jpg",
              "ImageUrl3x": "https://productcatalogue2015.s3.amazonaws.com/MT-AL-368-B_460_350.jpg",
              "ImageUrlXL": "https://productcatalogue2015.s3.amazonaws.com/MT-AL-368-B_default.jpg",
              "IsEssential": true,
              "IsWorkwear": false,
              "WorkwearInfo": null
          },
          {
              "ProductId": 138749,
              "ProductCode": "MT-AL-377-B",
              "ProductName": "Obi Car Phone Mount",
              "Behavior": 0,
              "Promotion": 0,
              "PromotionStyle": null,
              "BrandingRibbonStyle": null,
              "BrandingRibbonImage": "https://www.amrod.co.za/images/freebranding/.jpg",
              "Price": 24.99,
              "PriceWithCurrency": 0.0,
              "Sizes": [],
              "ImageUrl": "https://productcatalogue2015.s3.amazonaws.com/MT-AL-377-B_151_141.jpg",
              "ImageUrl2x": "https://productcatalogue2015.s3.amazonaws.com/MT-AL-377-B_260_250.jpg",
              "ImageUrl3x": "https://productcatalogue2015.s3.amazonaws.com/MT-AL-377-B_460_350.jpg",
              "ImageUrlXL": "https://productcatalogue2015.s3.amazonaws.com/MT-AL-377-B_default.jpg",
              "IsEssential": true,
              "IsWorkwear": false,
              "WorkwearInfo": null
          },
          {
              "ProductId": 93947,
              "ProductCode": "OL-AL-32-B",
              "ProductName": "Sweden 2 Person Picnic Backpack Cooler",
              "Behavior": 0,
              "Promotion": 0,
              "PromotionStyle": null,
              "BrandingRibbonStyle": null,
              "BrandingRibbonImage": "https://www.amrod.co.za/images/freebranding/.jpg",
              "Price": 293.99,
              "PriceWithCurrency": 0.0,
              "Sizes": [],
              "ImageUrl": "https://productcatalogue2015.s3.amazonaws.com/OL-AL-32-B_151_141.jpg",
              "ImageUrl2x": "https://productcatalogue2015.s3.amazonaws.com/OL-AL-32-B_260_250.jpg",
              "ImageUrl3x": "https://productcatalogue2015.s3.amazonaws.com/OL-AL-32-B_460_350.jpg",
              "ImageUrlXL": "https://productcatalogue2015.s3.amazonaws.com/OL-AL-32-B_default.jpg",
              "IsEssential": true,
              "IsWorkwear": false,
              "WorkwearInfo": null
          },
          {
              "ProductId": 93948,
              "ProductCode": "OL-AL-33-B",
              "ProductName": "Sunsation Waterproof Phone Pouch",
              "Behavior": 0,
              "Promotion": 2,
              "PromotionStyle": "ribbon purple-light",
              "BrandingRibbonStyle": null,
              "BrandingRibbonImage": "https://www.amrod.co.za/images/freebranding/.jpg",
              "Price": 19.99,
              "PriceWithCurrency": 0.0,
              "Sizes": [],
              "ImageUrl": "https://productcatalogue2015.s3.amazonaws.com/OL-AL-33-B_151_141.jpg",
              "ImageUrl2x": "https://productcatalogue2015.s3.amazonaws.com/OL-AL-33-B_260_250.jpg",
              "ImageUrl3x": "https://productcatalogue2015.s3.amazonaws.com/OL-AL-33-B_460_350.jpg",
              "ImageUrlXL": "https://productcatalogue2015.s3.amazonaws.com/OL-AL-33-B_default.jpg",
              "IsEssential": true,
              "IsWorkwear": false,
              "WorkwearInfo": null
          },
          {
              "ProductId": 157718,
              "ProductCode": "OL-AL-35-B",
              "ProductName": "Newlands Braai Set ",
              "Behavior": 0,
              "Promotion": 0,
              "PromotionStyle": null,
              "BrandingRibbonStyle": null,
              "BrandingRibbonImage": "https://www.amrod.co.za/images/freebranding/.jpg",
              "Price": 184.99,
              "PriceWithCurrency": 0.0,
              "Sizes": [],
              "ImageUrl": "https://productcatalogue2015.s3.amazonaws.com/OL-AL-35-B_151_141.jpg",
              "ImageUrl2x": "https://productcatalogue2015.s3.amazonaws.com/OL-AL-35-B_260_250.jpg",
              "ImageUrl3x": "https://productcatalogue2015.s3.amazonaws.com/OL-AL-35-B_460_350.jpg",
              "ImageUrlXL": "https://productcatalogue2015.s3.amazonaws.com/OL-AL-35-B_default.jpg",
              "IsEssential": true,
              "IsWorkwear": false,
              "WorkwearInfo": null
          },
          {
              "ProductId": 196864,
              "ProductCode": "PC-AL-144-B",
              "ProductName": "Carly Compact Mirror",
              "Behavior": 0,
              "Promotion": 0,
              "PromotionStyle": null,
              "BrandingRibbonStyle": null,
              "BrandingRibbonImage": "https://www.amrod.co.za/images/freebranding/.jpg",
              "Price": 6.29,
              "PriceWithCurrency": 0.0,
              "Sizes": [],
              "ImageUrl": "https://productcatalogue2015.s3.amazonaws.com/PC-AL-144-B_151_141.jpg",
              "ImageUrl2x": "https://productcatalogue2015.s3.amazonaws.com/PC-AL-144-B_260_250.jpg",
              "ImageUrl3x": "https://productcatalogue2015.s3.amazonaws.com/PC-AL-144-B_460_350.jpg",
              "ImageUrlXL": "https://productcatalogue2015.s3.amazonaws.com/PC-AL-144-B_default.jpg",
              "IsEssential": true,
              "IsWorkwear": false,
              "WorkwearInfo": null
          },
          {
              "ProductId": 226015,
              "ProductCode": "PC-AL-145-B",
              "ProductName": "Collins Mini First Aid Kit",
              "Behavior": 1,
              "Promotion": 2,
              "PromotionStyle": "ribbon purple-light",
              "BrandingRibbonStyle": null,
              "BrandingRibbonImage": "https://www.amrod.co.za/images/freebranding/.jpg",
              "Price": 39.99,
              "PriceWithCurrency": 0.0,
              "Sizes": [],
              "ImageUrl": "https://productcatalogue2015.s3.amazonaws.com/PC-AL-145-B_151_141.jpg",
              "ImageUrl2x": "https://productcatalogue2015.s3.amazonaws.com/PC-AL-145-B_260_250.jpg",
              "ImageUrl3x": "https://productcatalogue2015.s3.amazonaws.com/PC-AL-145-B_460_350.jpg",
              "ImageUrlXL": "https://productcatalogue2015.s3.amazonaws.com/PC-AL-145-B_default.jpg",
              "IsEssential": true,
              "IsWorkwear": false,
              "WorkwearInfo": null
          },
          {
              "ProductId": 26662,
              "ProductCode": "SAMPLE-IDEA-60003",
              "ProductName": "Kaleidoscope Satin Lanyard - Sample",
              "Behavior": 0,
              "Promotion": 0,
              "PromotionStyle": null,
              "BrandingRibbonStyle": null,
              "BrandingRibbonImage": "https://www.amrod.co.za/images/freebranding/.jpg",
              "Price": 6.59,
              "PriceWithCurrency": 0.0,
              "Sizes": [],
              "ImageUrl": "https://productcatalogue-w.s3.amazonaws.com/SAMPLE-IDEA-60003_151_141.jpg",
              "ImageUrl2x": "https://productcatalogue-w.s3.amazonaws.com/SAMPLE-IDEA-60003_260_250.jpg",
              "ImageUrl3x": "https://productcatalogue-w.s3.amazonaws.com/SAMPLE-IDEA-60003_460_350.jpg",
              "ImageUrlXL": "https://productcatalogue-w.s3.amazonaws.com/SAMPLE-IDEA-60003_default.jpg",
              "IsEssential": true,
              "IsWorkwear": false,
              "WorkwearInfo": null
          },
          {
              "ProductId": 26663,
              "ProductCode": "SAMPLE-IDEA-60006",
              "ProductName": "Kaleidoscope Petersham Lanyard - Sample",
              "Behavior": 0,
              "Promotion": 0,
              "PromotionStyle": null,
              "BrandingRibbonStyle": null,
              "BrandingRibbonImage": "https://www.amrod.co.za/images/freebranding/.jpg",
              "Price": 6.59,
              "PriceWithCurrency": 0.0,
              "Sizes": [],
              "ImageUrl": "https://productcatalogue-w.s3.amazonaws.com/SAMPLE-IDEA-60006_151_141.jpg",
              "ImageUrl2x": "https://productcatalogue-w.s3.amazonaws.com/SAMPLE-IDEA-60006_260_250.jpg",
              "ImageUrl3x": "https://productcatalogue-w.s3.amazonaws.com/SAMPLE-IDEA-60006_460_350.jpg",
              "ImageUrlXL": "https://productcatalogue-w.s3.amazonaws.com/SAMPLE-IDEA-60006_default.jpg",
              "IsEssential": true,
              "IsWorkwear": false,
              "WorkwearInfo": null
          }
      ]
        ;
        console.log(this.products);
      },
      err => {
        // console.error(err);
        // if(err.status == 0){
        //   this.toast.error('Network Connection Failure');
        // }
        // else if(err.error?.message){
        //   this.toast.error(err.error.message);
        // }else if(err.status == 500){
        //   this.toast.error('Internal Server Error')
        // }
        // else{
        //   this.toast.error('Request Failed: ' + err.status);
        // }
      }
    );
  }

}
