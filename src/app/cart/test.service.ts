import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
 export class TestService {
      getData():Promise<string> {
        return new Promise((_,reject) => {
            setTimeout(() => {
            reject('Error22')
            },2000)
        })
        
    }
    
 }