import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

//Interfaces
import { Account } from '../logging-interfaces/account-interface';
import { LoginData } from '../logging-interfaces/login-data';


@Injectable({
  providedIn: 'root'
})
export class LoggingService {

  constructor() { }

  sendData(formData: LoginData): Observable<Response|any>
  {
    // need to change POST source
    async () => {
      const response = await fetch('', {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'multipart/form-data',
          
        },
        body: JSON.stringify(formData),
      })
      .then(response => {
        const responseJson = response.json;
        if(response.ok) {
          alert("Authorization succeeded.")
        }
      })
      .catch((error) => {
        console.error('Error:', error);
        alert(error);
        return of(error);
      })
    }
    return of();
  }
}
