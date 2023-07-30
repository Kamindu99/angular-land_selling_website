import { Component, OnInit } from '@angular/core';
import { LandsService } from '../services/lands.service';

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

  constructor(private _landService: LandsService) { }

  ngOnInit(): void {
    this.getLandsList();
    console.log(this.landsData);
  }

  landsData: LandProps[] = []

  getLandsList() {
    this._landService.getLandsList().subscribe({
      next: (res) => {
        console.log(res);
        this.landsData = res;
      },
      error: console.log,
    });
  }

}
