import { Component, OnInit,Inject, PLATFORM_ID } from '@angular/core';



@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  constructor(@Inject(PLATFORM_ID) private platformId: Object) { }

  ngOnInit() {
     
     if (this.platformId === 'browser') {
       localStorage.setItem('mykey', 'localStorage working');
    }
    
  }

}
