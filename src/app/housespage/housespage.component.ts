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

  constructor(private _landService: LandsService,private dialog: MatDialog) { }
  
  ngOnInit(): void {
    this.getHouseList();
  }

  houseData: HouseProps[] = []
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
