import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { IPropertyBase } from '../model/ipropertybase';




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
        for (const id in data) {
          if (data.hasOwnProperty(id) && data[id].SellRent === SellRent) {
            propertiesArray.push(data[id]);
          }
        }
        return propertiesArray;
      })
    );
  }
}

