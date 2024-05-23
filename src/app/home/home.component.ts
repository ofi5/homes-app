import { Component ,inject} from '@angular/core';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { Housingdata } from '../housingdata';
import {  NgFor } from '@angular/common';
import { HousingService } from '../housing.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HousingLocationComponent, NgFor],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  housingDataList: Housingdata[] = [];
  housingService: HousingService = inject(HousingService)
  filteredDataList:Housingdata[] = []
  
  constructor() {

    this.housingDataList = this.housingService.getAllHousingLocations()
    this.filteredDataList = this.housingDataList
    
    // this.housingService.getAllHousingLocations().then((housingDataList: Housingdata[])=>{
    //   this.housingDataList = housingDataList
    // this.filteredDataList = housingDataList

    // });
 


    // this.housingDataList = this.housingService.getAllHousingLocations();
  }

  filterResults(text:string){
    if (!text){this.filteredDataList=this.housingDataList}

    this.filteredDataList = this.housingDataList.filter(housingData=>housingData?.city.toLowerCase().includes(text.toLowerCase()))

  }


}
