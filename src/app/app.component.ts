import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

import { AnalyticsService } from './services/analytics.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'angular-ga';

  constructor(
    private router: Router,
    private analyticsService: AnalyticsService
  ){
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.analyticsService.sendPageViewEvent();
      }
    });
  }

  generateKeyEvent(): void {
    this.analyticsService.sendKeyEvent('GenerateReport', 'Report', 'Semi-Annual Report');
  }

}
