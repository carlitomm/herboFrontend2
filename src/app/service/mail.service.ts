import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MailService {

  constructor(private http:HttpClient) { 

  }

  send(data:any){
    return this.http.post('assets/mailer/mailer.php', data);
  }
}
