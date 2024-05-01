import { NgModule } from "@angular/core";

import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { ServersComponent } from './servers/servers.component';
import { UserComponent } from './users/user/user.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { ServerComponent } from './servers/server/server.component';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthGuard } from "./auth-guard.service";
import { CanDeactivateGuard } from "./servers/edit-server/can-deactive-guard.service";
import { ErrorNotFoundComponent } from "./error-not-found/error-not-found/error-not-found.component";
import { ServerResolve } from "./servers/server/server-resolver.service";

const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'users', component: UsersComponent, children: [
      { path: ':id/:name', component: UserComponent},
    ] },
    { path: 'servers', canActivateChild: [AuthGuard], component: ServersComponent, children: [
      { path: ':id/edit', component: EditServerComponent, canDeactivate:[CanDeactivateGuard]},
      { path: ':id', component: ServerComponent, resolve: {server: ServerResolve} },
    ]},
    // { path: 'not-found', component: PageNotFoundComponent },
    { path: 'not-found', component: ErrorNotFoundComponent, data: {message: 'NotFoundStatic'} },
    { path: '**', redirectTo: 'not-found'},
  ];



@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [RouterModule]
})

export class AppRoutingModules {

}