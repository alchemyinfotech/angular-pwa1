import { Component, OnInit } from '@angular/core';
import { SwUpdate,VersionReadyEvent } from '@angular/service-worker';
import { filter, map } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
 isOnline:boolean;
 modalVersion: boolean ;
 constructor(private swUpdate:SwUpdate)
 {
   this.isOnline=false;
   this.modalVersion=false;
 }
  ngOnInit(): void {
   // throw new Error('Method not implemented.');
 this.updateOnlineStatus();

  window.addEventListener('online',this.updateOnlineStatus.bind(this));
  window.addEventListener('offline',this.updateOnlineStatus.bind(this));
 
 if(this.swUpdate.isEnabled)
 {

this.swUpdate.versionUpdates.pipe(filter((evt:any):evt is VersionReadyEvent=>evt.type==='VERSION_READY'),
map((evt:any)=> {
  console.log('currentVersion=[${evt.currentVersion} | latestVersion=[${evt.latestVersion}]');
  this.modalVersion=true;
}),
);

 }

  }

 






  private updateOnlineStatus():void{
this.isOnline=window.navigator.onLine;
console.info('isOnline=[${this.isOnline}]');
   
  }

 updateVersion():void{

this.modalVersion=false;
window.location.reload();

}

public closeVersion():void{
this.modalVersion=false;

}

}
function evt(evt: any, any: any): import("rxjs").OperatorFunction<import("@angular/service-worker").VersionEvent, import("@angular/service-worker").VersionEvent> {
  throw new Error('Function not implemented.');
}

