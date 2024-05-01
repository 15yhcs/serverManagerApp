import { ActivatedRoute, ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { ServersService } from "../servers.service";
import { Injectable } from "@angular/core";


interface Server{
    id: number,
    name: string,
    status: string
    
}

@Injectable()
export class ServerResolve implements Resolve<Server>{
    constructor(private services: ServersService){

    }
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Server | Observable<Server> | Promise<Server> {
        return this.services.getServer(+route.params.id)
    }

}