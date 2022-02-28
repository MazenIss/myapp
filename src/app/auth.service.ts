import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  loggedIn:boolean=false;


isAuthentified(){
   const promise =new Promise(
    (resolve: (arg0: boolean) => void,reject: any)=>{
      setTimeout(()=>{
        resolve(this.loggedIn); },
         800);
    }
  );
  return promise;
}
login(){
  this.loggedIn=true;
}
logout(){
this.loggedIn=false;
}

}
