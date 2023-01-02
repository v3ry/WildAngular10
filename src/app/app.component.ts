import { Component } from '@angular/core';
import { HelloWorldService } from './hello-world.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'ServiceTest';
  hello = '';
  constructor(public helloWorldService: HelloWorldService) {
    this.hello = helloWorldService.getHelloWorld();
  }
}
