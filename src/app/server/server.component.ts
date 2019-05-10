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
 serverCreationStates ="No server was created!"
 allowNewServer = true;
 serverStates = 'Online';
 serverName = ''
 onCreateServer(){
   this.serverCreationStates = "Server was crated!"
 }
 getServerStates(){
   return this.serverStates;
 }
 onUpdateServerName(event:Event){
   this.serverName = (<HTMLInputElement>event.target).value;
 }
ngOnInit(){}
}
