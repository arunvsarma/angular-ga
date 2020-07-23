import { Injectable } from '@angular/core';

@Injectable()
export class Globals {
    constructor(){ }

    application = {
        name: 'Angular8Analytics'
    };

    user = {
        ldapId: 'UserName'
    };

    analytics = {
        trackingId: '<YOUR TRACKING ID HERE>',
        customDimensions: {
            appUser: 'dimension1',
            appName: 'dimension2'
        }
    };
}
