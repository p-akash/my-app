import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit{
  constructor(){
    setTimeout(() => {
      this.allowNewServer = false;
    }, 5000);
  }
 serverId = 22;
 allowNewServer = true;
 serverStates = 'Online';
 getServerStates(){
   return this.serverStates;
 }
ngOnInit(){}
}
