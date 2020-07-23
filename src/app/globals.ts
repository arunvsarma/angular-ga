import { Injectable } from '@angular/core';

@Injectable()
export class Globals {
    constructor(){ }

    application = {
        name: 'Angular8Analytics',
        evnironment: 'PRODUCTION'
    };

    user = {
        ldapId: 'UserName'
    };

    analytics = {
        trackingId: '<YOUR TRACKING ID HERE>',
        customDimensions: {
            dimension1: 'appName',
            dimension2: 'appUser'
        }
    };
}
