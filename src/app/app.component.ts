import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { MailService } from './service/mail.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'GlobalPainting';
  
  menuclose:boolean;
  mail:any;
  date:Date;
  constructor(
    public translate: TranslateService,
    private mailService:MailService
    ){
    this.menuclose = false;
    translate.addLangs(['en', 'es']);
    translate.setDefaultLang('es');
    const browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/en|es/) ? browserLang : 'es');

    this.mail = {
      name:'',
      lastname:'',
      mail:'',
      subject:'',
      messaje:''
    }
    this.date = new Date(Date.now())
  }
  
  change(language) {
    this.translate.use(language);
  }
  ngOnInit() {

  }

  sendmessage(){
    this.mailService.send(this.mail).subscribe(
      data=>{
        console.log(data)
      }, error =>{
        console.log(error)
      }
    )
  }
}
