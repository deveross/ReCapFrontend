import { Component, OnInit } from '@angular/core';
import { Rental } from 'src/app/models/rental';
import { RentalService } from 'src/app/services/rental.service';
import { faCheck} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-rental',
  templateUrl: './rental.component.html',
  styleUrls: ['./rental.component.css', '.././utilities/border.css']
})
export class RentalComponent implements OnInit {

  rentals: Rental[] = [];
  dataLoaded = false;
  faCheck = faCheck;

  constructor(private rentalService: RentalService) { }

  ngOnInit(): void {
    this.getRentals();
  }

  getRentals() {
    this.rentalService.getRentals().subscribe(response => {
      if (response.success) {
        this.rentals = response.data;
        this.dataLoaded = true;
      }
    })
  }

}
