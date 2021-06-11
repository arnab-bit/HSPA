import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { HousingService } from 'src/app/services/housing.service';
import { Property } from 'src/app/model/property';
// import { IPropertyBase } from 'src/app/model/ipropertybase';

@Component({
  selector: 'app-property-detail',
  templateUrl: './property-detail.component.html',
  styleUrls: ['./property-detail.component.css']
})
export class PropertyDetailComponent implements OnInit {
public propertyId: number;
property =  new Property();
// propertyImg : IPropertyBase;



  constructor(private route: ActivatedRoute,
              private housingService: HousingService) { }

  ngOnInit() {
    this.propertyId = +this.route.snapshot.params['id'];

    this.route.params.subscribe(
      (params) => {
        this.propertyId = +params['id'];
        this.housingService.getProperty(this.propertyId).subscribe(
          (data: Property) => {
            this.property = data;
          }
        );
      }
    );

  }
}
