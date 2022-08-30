import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

//Interfaces
import { Account } from './account';
import { IncidentData } from './incident-data';
import { LoginData } from './login-data';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor() { }

  sendData(formData: IncidentData | LoginData): Observable<Response|any>
  {
    // need to change POST source
    async () => {
      const response = await fetch('', {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        headers: {
          'Accept': 'text/html, application/json',
          'Content-Type': 'multipart/form-data; boundary = aBoundaryString',
        },
        body: JSON.stringify(formData),
      })
      .then(response => {
        const responseJson = response.json;
        return of(responseJson);
      })
      .catch((error) => {
        console.error('Error:', error);
        return of(error);
      })
    }
    return of();
  }
}
