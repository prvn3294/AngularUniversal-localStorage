import { Component, OnInit,Inject, PLATFORM_ID } from '@angular/core';

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.scss']
})
export class AboutPageComponent implements OnInit {

  constructor(@Inject(PLATFORM_ID) private platformId: Object) { }

  ngOnInit() {

     if (this.platformId === 'browser') {

       console.log(localStorage.getItem('mykey'));
       
    }
    

  }

}
