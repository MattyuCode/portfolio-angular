import { ElementRef } from '@angular/core';
import { AfterViewInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import Typewriter from 't-writer.js';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})

export class SidebarComponent implements OnInit, AfterViewInit {

  @ViewChild('asTitle') asTitle: ElementRef;

  social: Array<socialLink> = [
    {
      link: 'https://www.youtube.com/channel/UCMekmHf8jji7mEJoZhFajeQ',
      icon: '<i class="fab fa-youtube"></i>'
    },
    {
      link: 'https://github.com/MattyuCode',
      icon: '<i class="fab fa-github"></i>'
    },
    {
      link: 'https://api.whatsapp.com/send?phone=50245412844&text=Hola, tengo una pregunta',
      icon: '<i class="fab fa-whatsapp"></i>'
    },
    {
      link: 'https://www.facebook.com/mateo.carmelomendoza',
      icon: '<i class="fab fa-facebook-f"></i>'
    }
  ];



  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.initEffect();
  }

  initEffect = () => {

    const target = this.asTitle.nativeElement;

    const writer = new Typewriter(target, {
      loop: true,
      typeColor: 'crimson'
    });

    writer
      .changeCursorColor('crimson')
      .type('Mateo Mendoza')
      .rest(5000)
      .start();
  }

}

class socialLink {
  link: string;
  icon: string;
}
