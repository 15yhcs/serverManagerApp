import { AfterViewInit, Component, OnInit } from '@angular/core';

import { ServersService } from '../servers.service';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Params } from '@angular/router';
import { NgTemplateOutlet } from '@angular/common';
@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit, AfterViewInit {
  server: {id: number, name: string, status: string};
  serverName = '';
  serverStatus = '';
  routeSub: Subscription;
  allowModification = false;
  constructor(private serversService: ServersService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.routeSub = this.route.params.subscribe((param: Params) => {
      this.server = this.serversService.getServer(+param.id);
      this.serverName = this.server.name;
    })
    this.serverStatus = this.server.status;
    this.allowModification = this.server.id === 1 ? true : false
  }

  ngAfterViewInit(){
    
  }

  onUpdateServer() {
    this.serversService.updateServer(this.server.id, {name: this.serverName, status: this.serverStatus});
  }

}
