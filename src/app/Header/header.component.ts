import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
@Component({
  selector: 'header-component',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isHome: boolean = false;
  isLands: boolean = false;
  isAppartment: boolean = false;
  isHouses: boolean = false;
  isAboutUs: boolean = false;

  constructor(private location: Location, private router: Router) { }

  ngOnInit(): void {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        this.checkUrl();
      });
  }

  checkUrl(): void {
    const url = this.location.path();

    this.isLands = url.includes('/lands');
    this.isAppartment = url.includes('/apartments');
    this.isHouses = url.includes('/houses');
    this.isAboutUs = url.includes('/aboutus');
    this.isHome = url === '';
  }

}
