import { Component, OnDestroy, OnInit } from '@angular/core';

import { ServersService } from '../servers.service';
import { ActivatedRoute, Data, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit, OnDestroy {
  server: {id: number, name: string, status: string};
  routeSub: Subscription;
  constructor(private serversService: ServersService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.routeSub = this.route.data.subscribe((data: Data) => {
      this.server = data.server
    })
    // this.routeSub = this.route.params.subscribe((param: Params) => {
    //   this.server = this.serversService.getServer(+param.id);
    // })
  }

  ngOnDestroy(){
    this.routeSub.unsubscribe()
  }

  onedit(){
    this.router.navigate(['edit'], {relativeTo: this.route, 
      queryParamsHandling: 'merge',
      preserveFragment: true})
  }
  
}
