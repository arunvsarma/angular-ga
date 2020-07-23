import { Injectable } from '@angular/core';
declare let gtag;

import { Globals } from '../globals';

@Injectable({
  providedIn: 'root'
})
export class AnalyticsService {

  constructor(
    private globals: Globals
  ) {
    this.init();
  }

  app: object = this.globals.application;
  appUser: object = this.globals.user;
  ga: object = this.globals.analytics;
  dimensionsData: object = {
    appName: this.app['name'],
    appUser: this.appUser['ldapId']
  };

  init(): void {
    if (this.app['environment'] === 'PRODUCTION') {
      gtag(
        'config',
        this.ga['trackingId'],
        {
          custom_map: this.ga['customDimensions']
        }
      );
    }
  }

  sendPageViewEvent(): void {
    if (this.app['environment'] === 'PRODUCTION') {
      gtag('event', 'page_view', this.dimensionsData);
    }
  }

  sendKeyEvent(eventAction: string, eventCategory: string, eventLabel: string = null, eventValue: number = null): void {
    if (this.app['environment'] === 'PRODUCTION') {
      gtag('event', eventAction, {
        event_category: eventCategory,
        event_label: eventLabel,
        value: eventValue
      });
    }
  }

}
