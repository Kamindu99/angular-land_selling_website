import { Component, OnInit } from '@angular/core';
import { LandsService } from '../services/lands.service';
import { MatDialog } from '@angular/material/dialog';
import { ViewdialogboxComponent } from '../viewdialogbox/viewdialogbox.component';

export interface ApartmentProps {
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
  selector: 'app-apartmentspage',
  templateUrl: './apartmentspage.component.html',
  styleUrls: ['./apartmentspage.component.css']
})
export class ApartmentspageComponent implements OnInit{

  constructor(private _landService: LandsService,private dialog: MatDialog) { }

  ngOnInit(): void {
    this.getApartmentList();
  }

  apartmentData: ApartmentProps[] = [
    {
      "id":1,
      "name":"FLORENCE CITY Apartment",
      "area":100,
      "price":100000,
      "location":"Ratnapura",
      "owner":"Kamindu Gayantha",
      "description":"description1",
      "image":"https://img.pikbest.com/origin/06/43/60/51dpIkbEsTsy3.jpg!w700wp"
    }
  ]
  isLoading: boolean = false;

  getApartmentList() {
    this.isLoading = true;
    this._landService.getApartmentsList().subscribe({
      next: (res) => {
        console.log(res);
        this.apartmentData = res;
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
