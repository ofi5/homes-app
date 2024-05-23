import { Injectable } from '@angular/core';
import { Housingdata } from './housingdata';

@Injectable({
  providedIn: 'root'
})
export class HousingService {
    url = 'http://localhost:3000/locations';
 

  constructor() {}

    async getAllHousingLocations(): Promise <Housingdata[]> {

      // return this.housingDataList;
    
      const data = await fetch(this.url)
      return await data.json() ?? [];
    }

    async getHousingId(id: Number): Promise<Housingdata | undefined> {

      const data = await fetch(`${this.url}/${id}`);
      return await data.json() ?? {};
      // return this.housingDataList.find(housingDataItem => housingDataItem.id===id);
    } 
   
    submitApplication(firstName: string, lastName:string, email: string){
      console.log("Your data has been submitted")
    }
}
