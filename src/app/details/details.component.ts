import { Component , inject} from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { HousingService } from '../housing.service';
import { Housingdata } from '../housingdata';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-details',
  standalone: true,
  imports: [ReactiveFormsModule, RouterModule],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  housingService = inject(HousingService);
  houseLocation: Housingdata | undefined;
  
  applyForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl('')
  })

  constructor() {
    const houseId = Number(this.route.snapshot.params["id"])
    // this.houseLocation = this.housingService.getHousingId(houseId)

    this.housingService.getHousingId(houseId).then((houseLocation)=>{
      this.houseLocation = houseLocation
    })

  }
  submitApplication() {
    this.housingService.submitApplication(
      this.applyForm.value.firstName ?? '',
      this.applyForm.value.lastName ?? '',
      this.applyForm.value.email ?? '')

      alert("Thanks, we will process your request !")
    }
 
  }

