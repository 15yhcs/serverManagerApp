import { AfterViewInit, Component, OnInit } from '@angular/core';

import { ServersService } from '../servers.service';
import { Subscription } from 'rxjs';
import { ActivatedRoute, CanDeactivate, Params, Router } from '@angular/router';
import { NgTemplateOutlet } from '@angular/common';
import { CanComponentDeactivate } from './can-deactive-guard.service';
import { Observable } from 'rxjs/Observable';
@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit, AfterViewInit, CanComponentDeactivate {
  server: {id: number, name: string, status: string};
  serverName = '';
  serverStatus = '';
  routeSub: Subscription;
  changeSaved = false;
  allowModification = false;
  constructor(private serversService: ServersService,
              private route: ActivatedRoute,
              private router: Router
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
    this.changeSaved = true;
    this.router.navigate(['../'], {relativeTo: this.route});
  }

  canDeactivate(): Observable<boolean> | Promise<boolean> | boolean{
    if(!this.allowModification){
      return true;
    }
    if((this.serverName !== this.server.name || this.serverStatus !== this.server.status) && !this.changeSaved){
      return confirm('DO you want to leave ?')
    }
    else{
      return true;
    }
  }

}
