import { CartState } from '../store/cart/cart.reducer';
import { ProductDetail, ProductVariantDetails } from '../store/model';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Params, Router } from '@angular/router';
import { ProductService } from '../services/product.service';
import { Store } from '@ngrx/store';
import * as fromApp from '../store/app.reducers';
import * as CartActions from '../store/cart/cart.actions';
import { Observable, Subscription, throwError } from 'rxjs';
import { LocationStrategy } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { catchError, take } from 'rxjs/operators';


@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit, OnDestroy {

  paramSubscription: Subscription;

  product: ProductDetail;
  activeProductVariant: ProductVariantDetails;

  cartState: Observable<CartState>;
  innerLoading = true;

  productUrl: string;
  variant: number;

  isPopState = false;
  fetchError: HttpErrorResponse = null;
  routerSubscription: Subscription;

  activeTab = 0;
  product1: { ProductId: number; ProductCode: string; ProductName: string; ProductDescription: string; Behavior: number; Promotion: number; PromotionStyle: any; BrandingRibbonStyle: any; BrandingRibbonImage: any; Gender: any; GenderOther: any; GenderOtherId: any; GenderOtherCode: any; Price: number; PriceWithCurrency: number; StockLevel: { Levels: { ItemCode: string; ItemBaseCode: string; Updated: string; Description: string; ColourCode: string; ColourName: string; ColourHex: string; SizeCode: string; InStock: number; Reserved: number; Main: number; Samples: number; Incoming: { Incoming: number; ETA: string; }[]; }[]; GroupedColourLevels: { ItemBaseCode: string; ColourCode: string; ColourName: string; ColourHex: string; InStock: number; Reserved: number; Main: number; Samples: number; Incoming: number; ETA: string; Sizes: { SizeCode: string; InStock: number; Reserved: number; Main: number; Samples: number; Incoming: { Incoming: number; ETA: string; }[]; }[]; }[]; }; Images: { Name: string; DateCreatedUTC: string; DateModifiedUTC: string; ImageType: string; ImageSizeType: string; VariantColourCode: string; ImageUrl: string; Signature: string; ImageUrl2x: string; Signature2x: string; ImageUrl3x: string; Signature3x: string; ImageUrlXL: string; SignatureXL: string; }[]; Sizes: any; Attributes: { SizeCode: string; Attributes: { AttributeName: string; AttributeValue: string; }[]; }[]; Prices: { SizeGroup: any; Pricelist: string; Price: number; PriceWithCurrency: number; }[]; VarientPrices: { ColourCode: any; SizeCode: any; Price: number; PriceWithCurrency: number; }[]; Uoms: { ItemCode: string; Name: string; Quantity: number; Width: number; Height: number; Length: number; Weight: number; UnitDimension: string; UnitWeight: string; }[]; SetInfo: any; BrandingGuideJpgUrl: string; BrandingGuidePdfUrl: string; BrandingGuideLogo24JpgUrl: any; BrandingGuideLogo24PdfUrl: any; BrandingSpecials: { BaseCode: string; ColourCode: string; SpecialName: string; SpecialFlags: number; ValidFrom: string; ValidTo: string; BrandingPositionType: number; BrandingCode: string; BrandingMethod: string; BrandingReplacementCode: string; NumberOfColours: number; MinQuantiy: number; BrandingPrice: number; BrandingFlags: number; BrandingPriceCompanyCode: string; BrandingPriceDisplayIndex: number; BrandingPriceDisplayName: string; }[]; IsEssential: boolean; IsWorkwear: boolean; WorkwearInfo: any; Brand: any; OrderQuantity: any; };


  constructor(private router: Router, private route: ActivatedRoute,
              private locStrat: LocationStrategy,
              private productService: ProductService,
              private store: Store<fromApp.AppState>) {
  }

  ngOnInit() {
    this.locStrat.onPopState(() => {
      this.isPopState = true;
    });

    this.product1 =   {
      "ProductId": 28350,
      "ProductCode": "AV-19000",
      "ProductName": "Alex Varga Volta A5 Hard Cover Notebook",
      "ProductDescription": "<p>The soft and smooth, matte material of this hard cover notebook contrasts gracefully with the black metal frame, and the elasticated pen loop and painted edges finish off the product.</p>\n\n<ul>\n\t<li>21 ( l ) x 13 ( w ) x 1.8 ( h ) cm</li>\n\t<li>paper, PU and metal</li>\n\t<li>192 lined pages (96 sheets)</li>\n</ul>\n",
      "Behavior": 0,
      "Promotion": 0,
      "PromotionStyle": null,
      "BrandingRibbonStyle": null,
      "BrandingRibbonImage": null,
      "Gender": null,
      "GenderOther": null,
      "GenderOtherId": null,
      "GenderOtherCode": null,
      "Price": 179.99,
      "PriceWithCurrency": 179.99,
      "StockLevel": {
          "Levels": [
              {
                  "ItemCode": "AV-19000-BL",
                  "ItemBaseCode": "AV-19000",
                  "Updated": "31-03-2023",
                  "Description": "Alex Varga Volta A5 Hard Cover Notebook - Black",
                  "ColourCode": "BL",
                  "ColourName": "Black",
                  "ColourHex": "#000000",
                  "SizeCode": "",
                  "InStock": 3376,
                  "Reserved": 0,
                  "Main": 3612,
                  "Samples": 0,
                  "Incoming": [
                      {
                          "Incoming": 5000,
                          "ETA": "04-05-2023"
                      },
                      {
                          "Incoming": 5000,
                          "ETA": "17-06-2023"
                      }
                  ]
              },
              {
                  "ItemCode": "AV-19000-GY",
                  "ItemBaseCode": "AV-19000",
                  "Updated": "31-03-2023",
                  "Description": "Alex Varga Volta A5 Hard Cover Notebook - Grey",
                  "ColourCode": "GY",
                  "ColourName": "Grey",
                  "ColourHex": "#555555",
                  "SizeCode": "",
                  "InStock": 2138,
                  "Reserved": 0,
                  "Main": 2198,
                  "Samples": 0,
                  "Incoming": null
              },
              {
                  "ItemCode": "AV-19000-N",
                  "ItemBaseCode": "AV-19000",
                  "Updated": "31-03-2023",
                  "Description": "Alex Varga Volta A5 Hard Cover Notebook - Navy",
                  "ColourCode": "N",
                  "ColourName": "Navy",
                  "ColourHex": "#000080",
                  "SizeCode": "",
                  "InStock": 1292,
                  "Reserved": 0,
                  "Main": 1392,
                  "Samples": 0,
                  "Incoming": null
              }
          ],
          "GroupedColourLevels": [
              {
                  "ItemBaseCode": "AV-19000",
                  "ColourCode": "BL",
                  "ColourName": "Black",
                  "ColourHex": "#000000",
                  "InStock": 3376,
                  "Reserved": 0,
                  "Main": 3612,
                  "Samples": 0,
                  "Incoming": 10000,
                  "ETA": "04-05-2023",
                  "Sizes": [
                      {
                          "SizeCode": "",
                          "InStock": 3376,
                          "Reserved": 0,
                          "Main": 3612,
                          "Samples": 0,
                          "Incoming": [
                              {
                                  "Incoming": 5000,
                                  "ETA": "04-05-2023"
                              },
                              {
                                  "Incoming": 5000,
                                  "ETA": "17-06-2023"
                              }
                          ]
                      }
                  ]
              },
              {
                  "ItemBaseCode": "AV-19000",
                  "ColourCode": "GY",
                  "ColourName": "Grey",
                  "ColourHex": "#555555",
                  "InStock": 2138,
                  "Reserved": 0,
                  "Main": 2198,
                  "Samples": 0,
                  "Incoming": 0,
                  "ETA": null,
                  "Sizes": [
                      {
                          "SizeCode": "",
                          "InStock": 2138,
                          "Reserved": 0,
                          "Main": 2198,
                          "Samples": 0,
                          "Incoming": []
                      }
                  ]
              },
              {
                  "ItemBaseCode": "AV-19000",
                  "ColourCode": "N",
                  "ColourName": "Navy",
                  "ColourHex": "#000080",
                  "InStock": 1292,
                  "Reserved": 0,
                  "Main": 1392,
                  "Samples": 0,
                  "Incoming": 0,
                  "ETA": null,
                  "Sizes": [
                      {
                          "SizeCode": "",
                          "InStock": 1292,
                          "Reserved": 0,
                          "Main": 1392,
                          "Samples": 0,
                          "Incoming": []
                      }
                  ]
              }
          ]
      },
      "Images": [
          {
              "Name": "AV-19000-NO-LOGO",
              "DateCreatedUTC": "2022-09-16T09:34:03.013",
              "DateModifiedUTC": null,
              "ImageType": "additional",
              "ImageSizeType": "resized",
              "VariantColourCode": null,
              "ImageUrl": "https://productcatalogue2015.s3.amazonaws.com/AV-19000-NO-LOGO_151_141.jpg",
              "Signature": "3Y5U24wPn4XKEpc5RDYswQ==",
              "ImageUrl2x": "https://productcatalogue2015.s3.amazonaws.com/AV-19000-NO-LOGO_260_250.jpg",
              "Signature2x": "y0dvW4ZeUbza07eu9DMaYA==",
              "ImageUrl3x": "https://productcatalogue2015.s3.amazonaws.com/AV-19000-NO-LOGO_460_350.jpg",
              "Signature3x": "4zLxG6f1TTXF+5sCpJTqqw==",
              "ImageUrlXL": "https://productcatalogue2015.s3.amazonaws.com/AV-19000-NO-LOGO_default.jpg",
              "SignatureXL": "BxmLgsaA4JjrXlZLE8ME4w=="
          },
          {
              "Name": "default",
              "DateCreatedUTC": "2020-10-14T11:48:35.483",
              "DateModifiedUTC": "2022-09-16T09:34:16.380",
              "ImageType": "hero",
              "ImageSizeType": "resized",
              "VariantColourCode": null,
              "ImageUrl": "https://productcatalogue2015.s3.amazonaws.com/AV-19000_151_141.jpg",
              "Signature": "KpI5Timd9xMKhiZTF8cMqQ==",
              "ImageUrl2x": "https://productcatalogue2015.s3.amazonaws.com/AV-19000_260_250.jpg",
              "Signature2x": "w0DozS+dDChY85b5SO+Gnw==",
              "ImageUrl3x": "https://productcatalogue2015.s3.amazonaws.com/AV-19000_460_350.jpg",
              "Signature3x": "xbrgMn8mmjSdNpBEhxJfNA==",
              "ImageUrlXL": "https://productcatalogue2015.s3.amazonaws.com/AV-19000_default.jpg",
              "SignatureXL": "5TLnmYjW023ngOcA9VFAig=="
          },
          {
              "Name": "AV-19000-BL-01",
              "DateCreatedUTC": "2020-07-27T08:22:52.690",
              "DateModifiedUTC": "2022-03-07T08:24:39.113",
              "ImageType": "additional",
              "ImageSizeType": "resized",
              "VariantColourCode": "BL",
              "ImageUrl": "https://productcatalogue2015.s3.amazonaws.com/AV-19000-BL-01_151_141.jpg",
              "Signature": "3jnz59ee30UiabvL9KtmPA==",
              "ImageUrl2x": "https://productcatalogue2015.s3.amazonaws.com/AV-19000-BL-01_260_250.jpg",
              "Signature2x": "QsX52fkJ0yCKU4PKiVSgrw==",
              "ImageUrl3x": "https://productcatalogue2015.s3.amazonaws.com/AV-19000-BL-01_460_350.jpg",
              "Signature3x": "NVtubZxgdT9AoBgzb78aRA==",
              "ImageUrlXL": "https://productcatalogue2015.s3.amazonaws.com/AV-19000-BL-01_default.jpg",
              "SignatureXL": "A61+TRISGt9a3ZRDWJObNQ=="
          },
          {
              "Name": "AV-19000-BL-01-NO-LOGO",
              "DateCreatedUTC": "2020-07-27T08:22:36.473",
              "DateModifiedUTC": "2022-09-16T09:30:35.077",
              "ImageType": "additional",
              "ImageSizeType": "resized",
              "VariantColourCode": "BL",
              "ImageUrl": "https://productcatalogue2015.s3.amazonaws.com/AV-19000-BL-01-NO-LOGO_151_141.jpg",
              "Signature": "e34gJK2904z2c6DzvB3N1A==",
              "ImageUrl2x": "https://productcatalogue2015.s3.amazonaws.com/AV-19000-BL-01-NO-LOGO_260_250.jpg",
              "Signature2x": "xGk3DFMxcAL+SohuvTEWSg==",
              "ImageUrl3x": "https://productcatalogue2015.s3.amazonaws.com/AV-19000-BL-01-NO-LOGO_460_350.jpg",
              "Signature3x": "YiJNAsNJDatiak5ayf8Fug==",
              "ImageUrlXL": "https://productcatalogue2015.s3.amazonaws.com/AV-19000-BL-01-NO-LOGO_default.jpg",
              "SignatureXL": "SZbN4BZ8+9b+XDa+dgXLog=="
          },
          {
              "Name": "AV-19000-BL-02-NO-LOGO",
              "DateCreatedUTC": "2022-09-16T09:30:48.470",
              "DateModifiedUTC": null,
              "ImageType": "additional",
              "ImageSizeType": "resized",
              "VariantColourCode": "BL",
              "ImageUrl": "https://productcatalogue2015.s3.amazonaws.com/AV-19000-BL-02-NO-LOGO_151_141.jpg",
              "Signature": "9dBWdlAhCWDP5zRP+fD5FA==",
              "ImageUrl2x": "https://productcatalogue2015.s3.amazonaws.com/AV-19000-BL-02-NO-LOGO_260_250.jpg",
              "Signature2x": "ovc15UoONtcI7dDA2xV2Qw==",
              "ImageUrl3x": "https://productcatalogue2015.s3.amazonaws.com/AV-19000-BL-02-NO-LOGO_460_350.jpg",
              "Signature3x": "NPMCTWwGI8u0IfdYqm9z6w==",
              "ImageUrlXL": "https://productcatalogue2015.s3.amazonaws.com/AV-19000-BL-02-NO-LOGO_default.jpg",
              "SignatureXL": "EL8Gb/TsGjSHcslNCzIEDw=="
          },
          {
              "Name": "AV-19000-BL-02",
              "DateCreatedUTC": "2022-09-16T09:31:01.397",
              "DateModifiedUTC": null,
              "ImageType": "additional",
              "ImageSizeType": "resized",
              "VariantColourCode": "BL",
              "ImageUrl": "https://productcatalogue2015.s3.amazonaws.com/AV-19000-BL-02_151_141.jpg",
              "Signature": "3e13RIqu3hUIPDKkuV7H5A==",
              "ImageUrl2x": "https://productcatalogue2015.s3.amazonaws.com/AV-19000-BL-02_260_250.jpg",
              "Signature2x": "sOPEar/YlhsTQOhotRRilA==",
              "ImageUrl3x": "https://productcatalogue2015.s3.amazonaws.com/AV-19000-BL-02_460_350.jpg",
              "Signature3x": "gfoG4MLi7E7sxdKa7DBeWw==",
              "ImageUrlXL": "https://productcatalogue2015.s3.amazonaws.com/AV-19000-BL-02_default.jpg",
              "SignatureXL": "cQihJIdwhD6kQNNdUxji8A=="
          },
          {
              "Name": "AV-19000-BL-03",
              "DateCreatedUTC": "2022-09-16T09:31:15.350",
              "DateModifiedUTC": null,
              "ImageType": "additional",
              "ImageSizeType": "resized",
              "VariantColourCode": "BL",
              "ImageUrl": "https://productcatalogue2015.s3.amazonaws.com/AV-19000-BL-03_151_141.jpg",
              "Signature": "xEKTCUxPN3zQsrwn9qzmSw==",
              "ImageUrl2x": "https://productcatalogue2015.s3.amazonaws.com/AV-19000-BL-03_260_250.jpg",
              "Signature2x": "UG/GU6hY+mKamLj51xxKvQ==",
              "ImageUrl3x": "https://productcatalogue2015.s3.amazonaws.com/AV-19000-BL-03_460_350.jpg",
              "Signature3x": "x1W5F+ybptPkRCDYmMXCEA==",
              "ImageUrlXL": "https://productcatalogue2015.s3.amazonaws.com/AV-19000-BL-03_default.jpg",
              "SignatureXL": "GgL8Sg3j59jk6bm07A7SUw=="
          },
          {
              "Name": "AV-19000-GY-02-NO-LOGO",
              "DateCreatedUTC": "2022-09-16T09:31:54.720",
              "DateModifiedUTC": null,
              "ImageType": "additional",
              "ImageSizeType": "resized",
              "VariantColourCode": "GY",
              "ImageUrl": "https://productcatalogue2015.s3.amazonaws.com/AV-19000-GY-02-NO-LOGO_151_141.jpg",
              "Signature": "770/lkNi1RlgASwS0humMQ==",
              "ImageUrl2x": "https://productcatalogue2015.s3.amazonaws.com/AV-19000-GY-02-NO-LOGO_260_250.jpg",
              "Signature2x": "NSlRUl5/uWhclGVe6upnrw==",
              "ImageUrl3x": "https://productcatalogue2015.s3.amazonaws.com/AV-19000-GY-02-NO-LOGO_460_350.jpg",
              "Signature3x": "jiu+6sllD8/0MuDZyIf0gw==",
              "ImageUrlXL": "https://productcatalogue2015.s3.amazonaws.com/AV-19000-GY-02-NO-LOGO_default.jpg",
              "SignatureXL": "Hu8u0PHP/uhA1PfJ8PrVXw=="
          },
          {
              "Name": "AV-19000-GY-02",
              "DateCreatedUTC": "2022-09-16T09:32:07.547",
              "DateModifiedUTC": null,
              "ImageType": "additional",
              "ImageSizeType": "resized",
              "VariantColourCode": "GY",
              "ImageUrl": "https://productcatalogue2015.s3.amazonaws.com/AV-19000-GY-02_151_141.jpg",
              "Signature": "ew4/W/yHhs54wx3bD+CNWQ==",
              "ImageUrl2x": "https://productcatalogue2015.s3.amazonaws.com/AV-19000-GY-02_260_250.jpg",
              "Signature2x": "SAbx0sqkyvOTs8k3r8ea9Q==",
              "ImageUrl3x": "https://productcatalogue2015.s3.amazonaws.com/AV-19000-GY-02_460_350.jpg",
              "Signature3x": "y0dd1txB9NhjMp2ejlo5KQ==",
              "ImageUrlXL": "https://productcatalogue2015.s3.amazonaws.com/AV-19000-GY-02_default.jpg",
              "SignatureXL": "4AijRq3Fj11OBB3XzCTiTQ=="
          },
          {
              "Name": "AV-19000-BL",
              "DateCreatedUTC": "2020-07-27T08:23:07.297",
              "DateModifiedUTC": "2022-09-16T09:31:28.910",
              "ImageType": "defaultvariant",
              "ImageSizeType": "resized",
              "VariantColourCode": "BL",
              "ImageUrl": "https://productcatalogue2015.s3.amazonaws.com/AV-19000-BL_151_141.jpg",
              "Signature": "7teKKfalmf1sQXOLVZl6QA==",
              "ImageUrl2x": "https://productcatalogue2015.s3.amazonaws.com/AV-19000-BL_260_250.jpg",
              "Signature2x": "Xj5jVF4oH3lDfdf9yEc1Dw==",
              "ImageUrl3x": "https://productcatalogue2015.s3.amazonaws.com/AV-19000-BL_460_350.jpg",
              "Signature3x": "K1cbDbTxvEzlriJC13l+UQ==",
              "ImageUrlXL": "https://productcatalogue2015.s3.amazonaws.com/AV-19000-BL_default.jpg",
              "SignatureXL": "r7gY3s8kspZrR56HUMKUOA=="
          },
          {
              "Name": "AV-19000-GY-01-NO-LOGO",
              "DateCreatedUTC": "2022-09-16T09:31:41.820",
              "DateModifiedUTC": null,
              "ImageType": "additional",
              "ImageSizeType": "resized",
              "VariantColourCode": "GY",
              "ImageUrl": "https://productcatalogue2015.s3.amazonaws.com/AV-19000-GY-01-NO-LOGO_151_141.jpg",
              "Signature": "Rx2nAiA5JrBL9REzNxowgg==",
              "ImageUrl2x": "https://productcatalogue2015.s3.amazonaws.com/AV-19000-GY-01-NO-LOGO_260_250.jpg",
              "Signature2x": "PdEqL7RrDoQX+RSZhrDn4w==",
              "ImageUrl3x": "https://productcatalogue2015.s3.amazonaws.com/AV-19000-GY-01-NO-LOGO_460_350.jpg",
              "Signature3x": "LZ55KuF5GJvN62RILDpG1w==",
              "ImageUrlXL": "https://productcatalogue2015.s3.amazonaws.com/AV-19000-GY-01-NO-LOGO_default.jpg",
              "SignatureXL": "qD2BFPHuRQwRXBqhc8EjVw=="
          },
          {
              "Name": "AV-19000-N",
              "DateCreatedUTC": "2022-09-16T09:33:49.360",
              "DateModifiedUTC": null,
              "ImageType": "defaultvariant",
              "ImageSizeType": "resized",
              "VariantColourCode": "N",
              "ImageUrl": "https://productcatalogue2015.s3.amazonaws.com/AV-19000-N_151_141.jpg",
              "Signature": "jC6bnQuf9bPiQiONA3fwOA==",
              "ImageUrl2x": "https://productcatalogue2015.s3.amazonaws.com/AV-19000-N_260_250.jpg",
              "Signature2x": "o+RqzJN1efCJZVxCY5yZrw==",
              "ImageUrl3x": "https://productcatalogue2015.s3.amazonaws.com/AV-19000-N_460_350.jpg",
              "Signature3x": "pUOBY7ZxkOrjwJg+X4XeQA==",
              "ImageUrlXL": "https://productcatalogue2015.s3.amazonaws.com/AV-19000-N_default.jpg",
              "SignatureXL": "depdLCeyCQ7roYtqqoXtEQ=="
          },
          {
              "Name": "AV-19000-GY-03",
              "DateCreatedUTC": "2022-09-16T09:32:22.027",
              "DateModifiedUTC": null,
              "ImageType": "additional",
              "ImageSizeType": "resized",
              "VariantColourCode": "GY",
              "ImageUrl": "https://productcatalogue2015.s3.amazonaws.com/AV-19000-GY-03_151_141.jpg",
              "Signature": "rA/AJU3Gc2JwSCntwKNO5g==",
              "ImageUrl2x": "https://productcatalogue2015.s3.amazonaws.com/AV-19000-GY-03_260_250.jpg",
              "Signature2x": "VdFC/zOvOLBnKbe8uiLZqA==",
              "ImageUrl3x": "https://productcatalogue2015.s3.amazonaws.com/AV-19000-GY-03_460_350.jpg",
              "Signature3x": "BK2bnIck3RauS44dU+OSCw==",
              "ImageUrlXL": "https://productcatalogue2015.s3.amazonaws.com/AV-19000-GY-03_default.jpg",
              "SignatureXL": "O4xNdn8wLtheYczs5sB4LA=="
          },
          {
              "Name": "AV-19000-GY",
              "DateCreatedUTC": "2022-09-16T09:32:42.033",
              "DateModifiedUTC": null,
              "ImageType": "defaultvariant",
              "ImageSizeType": "resized",
              "VariantColourCode": "GY",
              "ImageUrl": "https://productcatalogue2015.s3.amazonaws.com/AV-19000-GY_151_141.jpg",
              "Signature": "ecfrUJUK/vS4XnqxHX4COg==",
              "ImageUrl2x": "https://productcatalogue2015.s3.amazonaws.com/AV-19000-GY_260_250.jpg",
              "Signature2x": "zkAQyxZkxjL+xt4pScVMXw==",
              "ImageUrl3x": "https://productcatalogue2015.s3.amazonaws.com/AV-19000-GY_460_350.jpg",
              "Signature3x": "LZ5gw0r+dR30MFHA51VmSQ==",
              "ImageUrlXL": "https://productcatalogue2015.s3.amazonaws.com/AV-19000-GY_default.jpg",
              "SignatureXL": "WMh+z5qCLxBUZfcKW4vVEQ=="
          },
          {
              "Name": "AV-19000-N-01-NO-LOGO",
              "DateCreatedUTC": "2022-09-16T09:32:55.127",
              "DateModifiedUTC": null,
              "ImageType": "additional",
              "ImageSizeType": "resized",
              "VariantColourCode": "N",
              "ImageUrl": "https://productcatalogue2015.s3.amazonaws.com/AV-19000-N-01-NO-LOGO_151_141.jpg",
              "Signature": "0qhurBnE2dZv37jDlEPq3Q==",
              "ImageUrl2x": "https://productcatalogue2015.s3.amazonaws.com/AV-19000-N-01-NO-LOGO_260_250.jpg",
              "Signature2x": "gEOah4NZZypsqCn7VYbybg==",
              "ImageUrl3x": "https://productcatalogue2015.s3.amazonaws.com/AV-19000-N-01-NO-LOGO_460_350.jpg",
              "Signature3x": "x+bNrGJE7lkdNzpD3EqLmg==",
              "ImageUrlXL": "https://productcatalogue2015.s3.amazonaws.com/AV-19000-N-01-NO-LOGO_default.jpg",
              "SignatureXL": "k6j5B2P7rlLJuE2jw9rOJg=="
          },
          {
              "Name": "AV-19000-N-02-NO-LOGO",
              "DateCreatedUTC": "2022-09-16T09:33:08.357",
              "DateModifiedUTC": null,
              "ImageType": "additional",
              "ImageSizeType": "resized",
              "VariantColourCode": "N",
              "ImageUrl": "https://productcatalogue2015.s3.amazonaws.com/AV-19000-N-02-NO-LOGO_151_141.jpg",
              "Signature": "4pxTcEo0HYt0Qm239/LE9A==",
              "ImageUrl2x": "https://productcatalogue2015.s3.amazonaws.com/AV-19000-N-02-NO-LOGO_260_250.jpg",
              "Signature2x": "cbz/99hVjeJ4FCME96IBUw==",
              "ImageUrl3x": "https://productcatalogue2015.s3.amazonaws.com/AV-19000-N-02-NO-LOGO_460_350.jpg",
              "Signature3x": "+nAIKLN78OzfOO4y034ZSw==",
              "ImageUrlXL": "https://productcatalogue2015.s3.amazonaws.com/AV-19000-N-02-NO-LOGO_default.jpg",
              "SignatureXL": "8hxD8US+GOJ/b7ZsRMtUmg=="
          },
          {
              "Name": "AV-19000-N-02",
              "DateCreatedUTC": "2022-09-16T09:33:22.227",
              "DateModifiedUTC": null,
              "ImageType": "additional",
              "ImageSizeType": "resized",
              "VariantColourCode": "N",
              "ImageUrl": "https://productcatalogue2015.s3.amazonaws.com/AV-19000-N-02_151_141.jpg",
              "Signature": "vy35T0I/XfCR4ne2/XdM5Q==",
              "ImageUrl2x": "https://productcatalogue2015.s3.amazonaws.com/AV-19000-N-02_260_250.jpg",
              "Signature2x": "1IXxPkcDryJ/ntPCPuodXA==",
              "ImageUrl3x": "https://productcatalogue2015.s3.amazonaws.com/AV-19000-N-02_460_350.jpg",
              "Signature3x": "E5fjsTFHfVZxkN2AFCs3pw==",
              "ImageUrlXL": "https://productcatalogue2015.s3.amazonaws.com/AV-19000-N-02_default.jpg",
              "SignatureXL": "e79oEDbDATxptLiA4d9QFw=="
          },
          {
              "Name": "AV-19000-N-03",
              "DateCreatedUTC": "2022-09-16T09:33:35.563",
              "DateModifiedUTC": null,
              "ImageType": "additional",
              "ImageSizeType": "resized",
              "VariantColourCode": "N",
              "ImageUrl": "https://productcatalogue2015.s3.amazonaws.com/AV-19000-N-03_151_141.jpg",
              "Signature": "WLlRNB7to+0NoG1xFgKM+Q==",
              "ImageUrl2x": "https://productcatalogue2015.s3.amazonaws.com/AV-19000-N-03_260_250.jpg",
              "Signature2x": "FWUihn0fZkpvQ56IisjKsw==",
              "ImageUrl3x": "https://productcatalogue2015.s3.amazonaws.com/AV-19000-N-03_460_350.jpg",
              "Signature3x": "ozpZo4oGg5cRPnQ4Ek9Slw==",
              "ImageUrlXL": "https://productcatalogue2015.s3.amazonaws.com/AV-19000-N-03_default.jpg",
              "SignatureXL": "8o7T9KsF3xOd1Ro/RBHOqg=="
          }
      ],
      "Sizes": null,
      "Attributes": [
          {
              "SizeCode": "Cartons",
              "Attributes": [
                  {
                      "AttributeName": "Carton Dimensions (in cm) - H",
                      "AttributeValue": "25H"
                  },
                  {
                      "AttributeName": "Carton Dimensions (in cm) - L",
                      "AttributeValue": "47L"
                  },
                  {
                      "AttributeName": "Carton Dimensions (in cm) - W",
                      "AttributeValue": "35W"
                  },
                  {
                      "AttributeName": "Carton Weight (in kg)",
                      "AttributeValue": "15.5"
                  },
                  {
                      "AttributeName": "Quantity per Carton",
                      "AttributeValue": "40"
                  }
              ]
          }
      ],
      "Prices": [
          {
              "SizeGroup": null,
              "Pricelist": "Jade",
              "Price": 179.99,
              "PriceWithCurrency": 0.0
          },
          {
              "SizeGroup": null,
              "Pricelist": "Quartz",
              "Price": 179.99,
              "PriceWithCurrency": 0.0
          },
          {
              "SizeGroup": null,
              "Pricelist": "Chrome",
              "Price": 175.49,
              "PriceWithCurrency": 0.0
          },
          {
              "SizeGroup": null,
              "Pricelist": "Bronze",
              "Price": 170.99,
              "PriceWithCurrency": 0.0
          },
          {
              "SizeGroup": null,
              "Pricelist": "Cobalt",
              "Price": 166.49,
              "PriceWithCurrency": 0.0
          },
          {
              "SizeGroup": null,
              "Pricelist": "Silver",
              "Price": 161.99,
              "PriceWithCurrency": 0.0
          },
          {
              "SizeGroup": null,
              "Pricelist": "Gold",
              "Price": 157.49,
              "PriceWithCurrency": 0.0
          },
          {
              "SizeGroup": null,
              "Pricelist": "Platinum",
              "Price": 152.99,
              "PriceWithCurrency": 0.0
          },
          {
              "SizeGroup": null,
              "Pricelist": "Diamond",
              "Price": 148.49,
              "PriceWithCurrency": 0.0
          },
          {
              "SizeGroup": null,
              "Pricelist": "Titanium",
              "Price": 143.99,
              "PriceWithCurrency": 0.0
          },
          {
              "SizeGroup": null,
              "Pricelist": "Tanzanite",
              "Price": 139.49,
              "PriceWithCurrency": 0.0
          }
      ],
      "VarientPrices": [
          {
              "ColourCode": null,
              "SizeCode": null,
              "Price": 179.99,
              "PriceWithCurrency": 179.99
          }
      ],
      "Uoms": [
          {
              "ItemCode": "AV-19000",
              "Name": "CS",
              "Quantity": 40,
              "Width": 35.0,
              "Height": 25.0,
              "Length": 47.0,
              "Weight": 15.5,
              "UnitDimension": "CM",
              "UnitWeight": "KG"
          },
          {
              "ItemCode": "AV-19000",
              "Name": "EA",
              "Quantity": 1,
              "Width": 1.0,
              "Height": 1.0,
              "Length": 1.0,
              "Weight": 1.0,
              "UnitDimension": "CM",
              "UnitWeight": "KG"
          },
          {
              "ItemCode": "AV-19000-BL",
              "Name": "CS",
              "Quantity": 40,
              "Width": 35.0,
              "Height": 25.0,
              "Length": 47.0,
              "Weight": 15.5,
              "UnitDimension": "CM",
              "UnitWeight": "KG"
          },
          {
              "ItemCode": "AV-19000-BL",
              "Name": "EA",
              "Quantity": 1,
              "Width": 1.0,
              "Height": 1.0,
              "Length": 1.0,
              "Weight": 1.0,
              "UnitDimension": "CM",
              "UnitWeight": "KG"
          },
          {
              "ItemCode": "AV-19000-GY",
              "Name": "CS",
              "Quantity": 40,
              "Width": 35.0,
              "Height": 25.0,
              "Length": 47.0,
              "Weight": 15.5,
              "UnitDimension": "CM",
              "UnitWeight": "KG"
          },
          {
              "ItemCode": "AV-19000-GY",
              "Name": "EA",
              "Quantity": 1,
              "Width": 14.6,
              "Height": 3.1,
              "Length": 26.4,
              "Weight": 0.364,
              "UnitDimension": "CM",
              "UnitWeight": "KG"
          },
          {
              "ItemCode": "AV-19000-N",
              "Name": "CS",
              "Quantity": 40,
              "Width": 35.0,
              "Height": 25.0,
              "Length": 47.0,
              "Weight": 15.5,
              "UnitDimension": "CM",
              "UnitWeight": "KG"
          },
          {
              "ItemCode": "AV-19000-N",
              "Name": "EA",
              "Quantity": 1,
              "Width": 14.6,
              "Height": 3.1,
              "Length": 26.4,
              "Weight": 0.364,
              "UnitDimension": "CM",
              "UnitWeight": "KG"
          }
      ],
      "SetInfo": null,
      "BrandingGuideJpgUrl": "https://d33yj9nw58rehz.cloudfront.net/Products/ProductLayout/AV-19000.jpg",
      "BrandingGuidePdfUrl": "https://d33yj9nw58rehz.cloudfront.net/Products/ProductLayout/AV-19000.pdf",
      "BrandingGuideLogo24JpgUrl": null,
      "BrandingGuideLogo24PdfUrl": null,
      "BrandingSpecials": [
          {
              "BaseCode": "AV-19000",
              "ColourCode": "BL",
              "SpecialName": "FREE 1 Position Deboss",
              "SpecialFlags": 6,
              "ValidFrom": "2017-06-10T00:00:00",
              "ValidTo": "3000-07-31T00:00:00",
              "BrandingPositionType": -2,
              "BrandingCode": "BOS-1",
              "BrandingMethod": "Debossing",
              "BrandingReplacementCode": "BOS-FREE",
              "NumberOfColours": -2,
              "MinQuantiy": 1,
              "BrandingPrice": 0.0,
              "BrandingFlags": 0,
              "BrandingPriceCompanyCode": "JHB",
              "BrandingPriceDisplayIndex": 1,
              "BrandingPriceDisplayName": "Quartz"
          },
          {
              "BaseCode": "AV-19000",
              "ColourCode": "GY",
              "SpecialName": "FREE 1 Position Deboss",
              "SpecialFlags": 6,
              "ValidFrom": "2017-06-10T00:00:00",
              "ValidTo": "3000-07-31T00:00:00",
              "BrandingPositionType": -2,
              "BrandingCode": "BOS-1",
              "BrandingMethod": "Debossing",
              "BrandingReplacementCode": "BOS-FREE",
              "NumberOfColours": -2,
              "MinQuantiy": 1,
              "BrandingPrice": 0.0,
              "BrandingFlags": 0,
              "BrandingPriceCompanyCode": "JHB",
              "BrandingPriceDisplayIndex": 1,
              "BrandingPriceDisplayName": "Quartz"
          },
          {
              "BaseCode": "AV-19000",
              "ColourCode": "N",
              "SpecialName": "FREE 1 Position Deboss",
              "SpecialFlags": 6,
              "ValidFrom": "2017-06-10T00:00:00",
              "ValidTo": "3000-07-31T00:00:00",
              "BrandingPositionType": -2,
              "BrandingCode": "BOS-1",
              "BrandingMethod": "Debossing",
              "BrandingReplacementCode": "BOS-FREE",
              "NumberOfColours": -2,
              "MinQuantiy": 1,
              "BrandingPrice": 0.0,
              "BrandingFlags": 0,
              "BrandingPriceCompanyCode": "JHB",
              "BrandingPriceDisplayIndex": 1,
              "BrandingPriceDisplayName": "Quartz"
          }
      ],
      "IsEssential": true,
      "IsWorkwear": false,
      "WorkwearInfo": null,
      "Brand": null,
      "OrderQuantity": null
  };
    this.routerSubscription = this.router.events.subscribe(event => {
      // Scroll to top if accessing a page, not via browser history stack
      if (event instanceof NavigationEnd && !this.isPopState) {
        window.scrollTo(0, 0);
        this.isPopState = false;
      }

      // Ensures that isPopState is reset
      if (event instanceof NavigationEnd) {
        this.isPopState = false;
      }
    });

    this.cartState = this.store.select('cart');
    this.paramSubscription = this.route.params.subscribe(
      (params: Params) => {
        this.productUrl = params.productUrl;

        this.innerLoading = true;
        this.productService.getFullProduct(this.productUrl)
          .pipe(take(1), catchError(
            error => {
              this.fetchError = error;
              this.innerLoading = false;
              return throwError(error);
            }
          ))
          .subscribe(
            (data: ProductDetail) => {
              this.product = data;
              this.variant = params.variant ? params.variant : this.product.productVariantDetails[0].id;
              this.activeProductVariant = data.productVariantDetails.find(p => p.id === Number(this.variant));
              if (!this.activeProductVariant) {
                this.activeProductVariant = data.productVariantDetails[0];
              }
              this.innerLoading = false;
            }
          );
      }
    );

  }

  ngOnDestroy() {
    if (this.paramSubscription) {
      this.paramSubscription.unsubscribe();
    }
    if (this.routerSubscription) {
      this.routerSubscription.unsubscribe();
    }

  }

  setActiveTab(tab: number) {
    this.activeTab = tab;
  }

  setActiveVariant(variantId: number) {
    this.router.navigate(['/detail/', this.productUrl, variantId]);
  }

  addToCart(amountElement: HTMLInputElement) {
    const amount = amountElement.value;
    const reg = new RegExp('^[0-9]+$');
    if (!reg.test(amount) || parseInt(amount) === 0) {
      alert('Please enter a valid amount.');
      return;
    }

    this.store.select('auth')
      .pipe(take(1))
      .subscribe(data => {
        if (data.authenticated) {
          this.store.dispatch(new CartActions.AddToCart({ id: this.activeProductVariant.id, amount }));
        }
        else {
          this.router.navigate(['/login']);
        }
      });
  }
}
