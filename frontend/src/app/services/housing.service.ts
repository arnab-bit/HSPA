import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { IPropertyBase } from '../model/ipropertybase';
import { Property } from '../model/property';


@Injectable({
  providedIn: 'root'
})
export class HousingService {

  constructor(private http: HttpClient) { }

  // getAllProperties(): Observable<IProperty[]>{
  //   return this.http.get('data/properties.json').pipe(
  //     map(data => {
  //       const jsonData = JSON.stringify(data)
  //       const propertiesArray: Array<IProperty> = JSON.parse(jsonData);;
  //       return propertiesArray;
  //     })
  //   );
  // }

  getAllProperties(SellRent: number): Observable<IPropertyBase[]>{
    return this.http.get('data/properties.json').pipe(
      map(data => {
        const propertiesArray: Array<IPropertyBase> = [];
        const localProperties = JSON.parse(localStorage.getItem('newPropArray'));

        if(localProperties){
          for(const id in localProperties ){
            // localProperties = localStorage.getItem('newProp');
            if(localProperties.hasOwnProperty(id) && localProperties[id].SellRent === SellRent) {
              propertiesArray.push(localProperties[id]);
            }
          }
        }

        for (const id in data) {
          if (data.hasOwnProperty(id) && data[id].SellRent === SellRent) {
            propertiesArray.push(data[id]);
          }
        }
        return propertiesArray;
      })
    );

  }
  addProperty(property: Property){
    let newPropArray = [property];

    if(localStorage.getItem('newPropArray')){
      newPropArray = [property, ...JSON.parse(localStorage.getItem('newPropArray'))];
    }
    localStorage.setItem('newPropArray', JSON.stringify(newPropArray));
  }
  newPropID(){
    if(localStorage.getItem('PID')){
      localStorage.setItem('PID', String(+localStorage.getItem('PID') + 1));
      return +localStorage.getItem('PID');
    } else {
      localStorage.setItem('PID','101');
      return 101;
    }
  }
}

