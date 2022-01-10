import { Component, OnInit } from '@angular/core';
import { SwUpdate, VersionReadyEvent } from '@angular/service-worker';
import { filter, map } from 'rxjs';
import { Platform } from '@angular/cdk/platform'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  isOnline: boolean;
  modalVersion: boolean;
  constructor(private swUpdate: SwUpdate,private platform:Platform) {
    this.isOnline = false;
    this.modalVersion = false;
  }
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
    this.updateOnlineStatus();

    window.addEventListener('online', this.updateOnlineStatus.bind(this));
    window.addEventListener('offline', this.updateOnlineStatus.bind(this));

    if (this.swUpdate.isEnabled) {

      this.swUpdate.versionUpdates.pipe(filter((evt: any): evt is VersionReadyEvent => evt.type === 'VERSION_READY'),
        map((evt: any) => {
          console.log('currentVersion=[${evt.currentVersion} | latestVersion=[${evt.latestVersion}]');
          this.modalVersion = true;
        }),
      );

    }
this.loadModalPwa();
  }








  private updateOnlineStatus(): void {
    this.isOnline = window.navigator.onLine;
    console.info('isOnline=[${this.isOnline}]');

  }

  private loadModalPwa():void{
 if(this.platform.ANDROID)

 {
//code will be platform specific
 }
 if(this.platform.isBrowser)
 {
//code will be platform 
 }

if(this.platform.IOS)
{
//code will be platform specific

}


  }

  updateVersion(): void {

    this.modalVersion = false;
    window.location.reload();

  }

  public closeVersion(): void {
    this.modalVersion = false;

  }

}
function evt(evt: any, any: any): import("rxjs").OperatorFunction<import("@angular/service-worker").VersionEvent, import("@angular/service-worker").VersionEvent> {
  throw new Error('Function not implemented.');
}

