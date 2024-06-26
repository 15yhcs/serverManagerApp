import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { ServersComponent } from './servers/servers.component';
import { UserComponent } from './users/user/user.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { ServerComponent } from './servers/server/server.component';
import { ServersService } from './servers/servers.service';
import { RouterModule, Routes } from '@angular/router';
import { NgTemplateOutlet } from '@angular/common';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AppRoutingModules } from './app-routing.module';
import { AuthGuard } from './auth-guard.service';
import { AuthService } from './auth.service';
import { CanDeactivateGuard } from './servers/edit-server/can-deactive-guard.service';

// const appRoutes: Routes = [
//   { path: '', component: HomeComponent },
//   { path: 'users', component: UsersComponent, children: [
//     { path: ':id/:name', component: UserComponent},
//   ] },
//   { path: 'servers', component: ServersComponent, children: [
//     { path: ':id/edit', component: EditServerComponent },
//     { path: ':id', component: ServerComponent },
//   ]},
//   { path: 'not-found', component: PageNotFoundComponent },
//   { path: '**', redirectTo: 'not-found'},
// ];


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UsersComponent,
    ServersComponent,
    UserComponent,
    EditServerComponent,
    ServerComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModules
  ],
  providers: [ServersService, NgTemplateOutlet, AuthGuard, AuthService, CanDeactivateGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
