import { Component } from '@angular/core';
import { LandsService } from '../services/lands.service';
import { MatDialog } from '@angular/material/dialog';
import { ViewdialogboxComponent } from '../viewdialogbox/viewdialogbox.component';

export interface HouseProps {
  id: number;
  name?: string;
  area?: number;
  price: number;
  location: string;
  owner: string;
  description: string;
  image: string
}

@Component({
  selector: 'app-housespage',
  templateUrl: './housespage.component.html',
  styleUrls: ['./housespage.component.css']
})
export class HousespageComponent {

  constructor(private _landService: LandsService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.getHouseList();
  }

  houseData: HouseProps[] = [
    {
      "id": 1,
      "name": "Nugegoda CITY House",
      "area": 100,
      "price": 100000,
      "location": "Nugegoda",
      "owner": "Kamindu Gayantha",
      "description": "description1",
      "image": "https://e1.pxfuel.com/desktop-wallpaper/241/699/desktop-wallpaper-interior-design-room-house-home-apartment-condo-274-and-mobile-backgrounds-luxury-apartment.jpg"
    },
    {
      "id": 2,
      "name": "Kandy CITY House",
      "area": 100,
      "price": 100000,
      "location": "Ratnapura",
      "owner": "Gayantha Kamindu",
      "description": "description1",
      "image": "https://www.propertysolutionsturkey.com/front/images/projects/bosphorus-view-apartments-with-private-pools/bosphorus-view-apartments-with-private-pools-303320110.jpg"
    }
  ]
  isLoading: boolean = false;

  getHouseList() {
    this.isLoading = true;
    this._landService.getHousesList().subscribe({
      next: (res) => {
        console.log(res);
        this.houseData = res;
        this.isLoading = false;
      },
      error: (err) => {
        console.log(err);
        this.isLoading = false;
      }
    });
  }

  openDialog(data: any) {
    this.dialog.open(ViewdialogboxComponent, {
      data
    });
  }
}
