import { Component, HostBinding } from '@angular/core';
@Component({
  selector: 'app-empty',
  templateUrl: './empty.component.html',
  styleUrls: ['./empty.component.scss']
})
export class EmptyComponent{
  title="Page Not Found";
  thumb="assets/img/404.png";
  details="The page you are looking for might have been removed had its name changed or is temporarily unavailable.";
  btnHome="Go to Home";
  constructor() { }
}
