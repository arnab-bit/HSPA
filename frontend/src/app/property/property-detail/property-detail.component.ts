import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { HousingService } from 'src/app/services/housing.service';
import { Property } from 'src/app/model/property';
// import { IPropertyBase } from 'src/app/model/ipropertybase';
import {NgxGalleryOptions} from '@kolkov/ngx-gallery';
import {NgxGalleryImage} from '@kolkov/ngx-gallery';
import {NgxGalleryAnimation} from '@kolkov/ngx-gallery';

@Component({
  selector: 'app-property-detail',
  templateUrl: './property-detail.component.html',
  styleUrls: ['./property-detail.component.css']
})
export class PropertyDetailComponent implements OnInit {

galleryOptions: NgxGalleryOptions[];
galleryImages: NgxGalleryImage[];

public propertyId: number;
property =  new Property();
// propertyImg : IPropertyBase;



  constructor(private route: ActivatedRoute,
              private housingService: HousingService) { }

  ngOnInit() {
    this.propertyId = +this.route.snapshot.params['id'];
    this.route.data.subscribe(
      (data: Property) => {
        this.property = data['prp']
      }
    );

    // this.route.params.subscribe(
    //   (params) => {
    //     this.propertyId = +params['id'];
    //     this.housingService.getProperty(this.propertyId).subscribe(
    //       (data: Property) => {
    //         this.property = data;
    //       }
    //     );
    //   }
    // );


    this.galleryOptions = [
      {
        width: '100%',
        height: '465px',
        thumbnailsColumns: 4,
        imageAnimation: NgxGalleryAnimation.Slide
      },
      // // max-width 800
      // {
      //   breakpoint: 800,
      //   width: '100%',
      //   height: '600px',
      //   imagePercent: 80,
      //   thumbnailsPercent: 20,
      //   thumbnailsMargin: 20,
      //   thumbnailMargin: 20
      // },
      // // max-width 400
      // {
      //   breakpoint: 400,
      //   preview: false
      // }
    ];

    this.galleryImages = [
      {
        small: 'assets/images/inner-view-1.jpg',
        medium: 'assets/images/inner-view-1.jpg',
        big: 'assets/images/inner-view-1.jpg'
      },
      {
        small: 'assets/images/inner-view-2.jpg',
        medium: 'assets/images/inner-view-2.jpg',
        big: 'assets/images/inner-view-2.jpg'
      },
      {
        small: 'assets/images/inner-view-3.jpg',
        medium: 'assets/images/inner-view-3.jpg',
        big: 'assets/images/inner-view-3.jpg'
      },{
        small: 'assets/images/inner-view-4.jpg',
        medium: 'assets/images/inner-view-4.jpg',
        big: 'assets/images/inner-view-4.jpg'
      },
      {
        small: 'assets/images/inner-view-5.jpg',
        medium: 'assets/images/inner-view-5.jpg',
        big: 'assets/images/inner-view-5.jpg'
      }
    ];


  }
}
