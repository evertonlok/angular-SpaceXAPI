import { Component, OnInit } from '@angular/core'

declare const particlesJS: any

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor (
  ) {}


  ngOnInit (): void {
    particlesJS.load('particles-js', '../assets/particles-config.json', null)
  }
}
