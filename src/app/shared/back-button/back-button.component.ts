import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'back-button',
  templateUrl: './back-button.component.html',
  styleUrls: ['./back-button.component.scss']
})
export class BackButtonComponent implements OnInit {

  @Output() onClick: EventEmitter<any> = new EventEmitter();
  
  constructor(
    private router: Router) { }

  ngOnInit() {
  }

  isVisible(){
    return this.router.url != "/";
  }
  
  buttonAction(){
    if(this.onClick)this.onClick.emit();   
  }  
}
