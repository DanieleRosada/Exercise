import {customElement, bindable, bindingMode} from "aurelia-framework";
import {HttpClient} from 'aurelia-http-client';
@customElement("httprequest")
export class httprequest{
    datahttp:any;
    constructor(){
     this.get();
    }
    get(){
      let client = new HttpClient();
      client.get('http://localhost:3200/api/users')
        .then(data => {
         this.datahttp=JSON.parse(data.response);
        });
    }
    insert(username: String){
      let fullName="Mattia Cettolin";
      let birthDate= new Date();
      let json={"username":username,"fullName":fullName,"birthDate":birthDate};
      let client = new HttpClient();
      console.log(json);
      client.post('http://localhost:3200/api/users',json) //il server vuole @username,@fullName,@birthDate
        .then(data => {
         console.log("Riga inserita");
         this.get();
        });
    }
    put(id: number, username: String){
      let fullName="Mattia Cettolin";
      let birthDate= new Date();
      let json={"username":username,"fullName":fullName,"birthDate":birthDate, "id":id};
      let client = new HttpClient();
      console.log(json);
      client.put('http://localhost:3200/api/users',json) //il server vuole @username,@fullName,@birthDate,@id
        .then(data => {
         console.log("Riga inserita");
         this.get();
        });
    }
    delete(id: number){
      let client = new HttpClient();
      let url= "http://localhost:3200/api/users/"+id;
      client.delete(url) //il server vuole @id
        .then(data => {
         console.log("Riga eliminata");
         this.get();
        });
    }
  }