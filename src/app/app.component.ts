import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'course-project';
  checkFeature = 'recipes';
  onNavigate(feature: string): any {
    this.checkFeature = feature;
  }
}
