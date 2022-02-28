import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from '../home/home.component';
import { UsersComponent } from '../users/users.component';
import { UserComponent } from '../users/user/user.component';
import { ServersComponent } from '../servers/servers.component';
import { EditServerComponent } from '../servers/edit-server/edit-server.component';
import { ServerComponent } from '../servers/server/server.component';
import { NotfoundComponent } from '../notfound/notfound.component';
import { AuthGuardService } from '../auth-guard.service';
import { CanDeactivateGuardService } from '../servers/edit-server/can-deactivate-guard.service';
import { ErrorComponent } from '../error/error.component';
import { ServerResolverService } from '../servers/server/server-resolver.service';

const appRoutes:Routes=[
  {path:'',component:HomeComponent},
  {path:'users',component:UsersComponent,children :[
    {path:':id/:name',component:UserComponent},
  ]},
  {path:'servers',canActivateChild  :[AuthGuardService] , component:ServersComponent,children :[
    {path:':id/edit',component:EditServerComponent,canDeactivate : [CanDeactivateGuardService]},
    {path:':id',component:ServerComponent, resolve :{server:ServerResolverService}}
  ]},
 {path:'notfound',component:ErrorComponent ,data:{'message':'page not found!'}},
 {path:'**',redirectTo:'notfound'},

]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports :[
  RouterModule
  ], 
})
export class AppRoutingModule { }
