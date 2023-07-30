import { Component, OnInit } from '@angular/core';
import { LandsService } from '../services/lands.service';
import { MatDialog } from '@angular/material/dialog';
import { ViewdialogboxComponent } from '../viewdialogbox/viewdialogbox.component';

export interface LandProps {
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
  selector: 'app-landspage',
  templateUrl: './landspage.component.html',
  styleUrls: ['./landspage.component.css']
})
export class LandspageComponent implements OnInit {

  constructor(private _landService: LandsService,private dialog: MatDialog) { }

  ngOnInit(): void {
    this.getLandsList();
    this.slides[0] = {
      id: 0,
      src: 'https://assets-news.housing.com/news/wp-content/uploads/2020/07/09210345/Investing-in-land-The-pros-and-cons-FB-1200x700-compressed.jpg',
      title: 'First slide',
      subtitle: 'Nulla vitae elit libero, a pharetra augue mollis interdum.'
    };
    this.slides[1] = {
      id: 1,
      src: 'https://www.thepinnaclelist.com/wp-content/uploads/2022/03/9-Tips-To-Successfully-Sell-Land-Online.jpg',
      title: 'Second slide',
      subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    }
    this.slides[2] = {
      id: 2,
      src: 'https://res.cloudinary.com/maa/image/upload/c_lfill,g_auto,f_auto,q_auto:eco,h_553,w_1200/v1/maac/-/media/images/properties/georgia/atlanta/maa-lenox-2/slides/2_9.jpg',
      title: 'Third slide',
      subtitle: 'Praesent commodo cursus magna, vel scelerisque nisl consectetur.'
    }
  }

  landsData: LandProps[] = [
    {
      "id":1,
      "name":"FLORENCE CITY LAND",
      "area":100,
      "price":100000,
      "location":"Ratnapura",
      "owner":"Kamindu Gayantha",
      "description":"description1",
      "image":"https://media.istockphoto.com/id/1372495059/photo/land-for-sale-sign-in-green-grass-field-for-housing-development-and-construction.jpg?s=612x612&w=0&k=20&c=PLIFqiNwamgtLORGB49P4fTJI3CGF1-bApzK8Xxz0-o="
    },
    {
      "id":2,
      "name":"MILANO CITY LAND",
      "area":100,
      "price":75000,
      "location":"Colombo",
      "owner":"Gayantha Kamindu",
      "description":"description1",
      "image":"https://us.123rf.com/450wm/nachai/nachai2108/nachai210800159/174946798-land-or-landscape-of-green-field-in-aerial-view-include-agriculture-farm-icon-of-residential-home.jpg?ver=6"
    },
    {
      "id":3,
      "name":"WELLINGTON PARK",
      "area":100,
      "price":87000,
      "location":"Kandy",
      "owner":"owner1",
      "description":"description1",
      "image":"https://kalutaralands.lk/wp-content/uploads/wp-realestate-uploads/_property_featured_image/5-850x550.jpg"
    },
    {
      "id":4,
      "name":"CITY POINT",
      "area":100,
      "price":95000,
      "location":"Gampaha",
      "owner":"owner1",
      "description":"description1",
      "image":"https://ringkenyaproperties.co.ke/wp-content/uploads/2019/09/jpg5.jpg"
    },
    {
      "id":5,
      "name":"UDUGAMPOLA LAND",
      "area":100,
      "price":125000,
      "location":"Matara",
      "owner":"owner1",
      "description":"description1",
      "image":"https://ringkenyaproperties.co.ke/wp-content/uploads/2019/09/jpg5.jpg"
    }
  ]
  isLoading: boolean = false;
  slides: any[] = new Array(3).fill({id: -1, src: '', title: '', subtitle: ''});

  getLandsList() {
    this.isLoading = true;
    this._landService.getLandsList().subscribe({
      next: (res) => {
        console.log(res);
        this.landsData = res;
        this.isLoading = false;
      },
      error: (err) => {
        console.log(err);
        this.isLoading = false;
      }
    });
  }

  openDialog(data: any) {
    const dialogRef = this.dialog.open(ViewdialogboxComponent, {
      data
    });
  }

}
