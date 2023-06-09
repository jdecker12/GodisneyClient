import { Component, OnInit, Renderer2 } from '@angular/core';
import { DataService } from '../../service/data.service';
import { Router, NavigationEnd } from '@angular/router';

import { Card } from '../../models/card';
import { window } from 'rxjs/operators';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  public initAnimation: boolean = false;

  constructor(private data: DataService, private router: Router, private renderer: Renderer2) { }
  public cards: Card[] = [];

  ngOnInit(): void {
    this.router.events.subscribe(event => {
        var myWindow = document.getElementById('mat-sidenav-content');
        if (event instanceof NavigationEnd) {
          this.renderer.setProperty(myWindow, 'scrollY', 0);
        }
      });
      this.data.loadCardsByCategory('Main')
          .subscribe((success: any) => {
              if (success) {
                  this.cards = this.data.cards;
                  return true;
              }
              return;
          });
      setTimeout(() => {
          var cards = document.getElementsByClassName('go-dis-card');
          var crdArr = Array.from(cards);
          crdArr[0].classList.add('first-card');
      }, 3000);


      this.animateOnScroll();

  }//end onInit


  animateOnScroll(): void {
      var myWindow = document.getElementById('mat-sidenav-content');
      if (myWindow) {
        myWindow.onscroll = () => {
          setTimeout(() => {
              var myElems = document.getElementsByClassName('go-dis-card');
              var cardArr = Array.from(myElems);
              cardArr.forEach((element) => {
                  var myCard = element.getBoundingClientRect();
                  if (myCard.top <= 900 && !element.classList.contains('first-card')) {
                      element.classList.add('scroll-animation');
                  }
              });//end foreach
          }, 1000);
      }//end onscroll
    }
 
  }//end amimateOnScroll

}
