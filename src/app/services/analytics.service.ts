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

  init(): void {
    gtag(
      'config',
      this.ga['trackingId'],
      {
        custom_map: {
          dimension1: 'appName',
          dimension2: 'appUser'
        }
      }
    );
  }

  sendPageViewEvent(): void {
    if (gtag) {
      gtag('event', 'page_view', {
        appName: this.app['name'],
        appUser: this.appUser['ldapId']
      });

    }
  }

  sendKeyEvent(eventAction: string, eventCategory: string, eventLabel: string = null, eventValue: number = null): void {
    if (gtag) {
      gtag('event', eventAction, {
        event_category: eventCategory,
        event_label: eventLabel,
        value: eventValue
      });
    }
  }

}
