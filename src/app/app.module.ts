import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ServersComponent } from './servers/servers.component';
import { UsersComponent } from './users/users.component';
import { ServerComponent } from './servers/server/server.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { FormsModule } from '@angular/forms';
import { ServersService } from './servers/servers.service';
import { UserComponent } from './users/user/user.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { AuthGuardService } from './auth-guard.service';
import { AuthService } from './auth.service';
import { CanDeactivateGuardService } from './servers/edit-server/can-deactivate-guard.service';
import { ErrorComponent } from './error/error.component';
import { ServerResolverService } from './servers/server/server-resolver.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ServersComponent,
    UsersComponent,
    ServerComponent,
    EditServerComponent,
    UserComponent,
    NotfoundComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
  ],
  providers: [ServersService,
  AuthGuardService,AuthService,CanDeactivateGuardService,ServerResolverService],
  bootstrap: [AppComponent]
})
export class AppModule { }
