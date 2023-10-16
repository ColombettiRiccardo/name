import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-generic',
  templateUrl: './generic.component.html',
  styleUrls: ['./generic.component.css']
})
export class GenericComponent implements OnInit {

  classes: any[] = ["5F inf"]
  movements: Bruhs[] = []
  constructor(private route: ActivatedRoute, public http: HttpClient) {}

  ngOnInit() {
    console.log("balls");
    
    this.route.params.subscribe(params => {
      let s = params[1]
      console.log(s);
      
      this.http.get("https://5000-studerriccardo-server-k0a5iqm3gnb.ws-eu105.gitpod.io/" + "?name=5F%20inf").forEach(o => {
        this.classes.push(o)
      })
      
    });
  }

  getMovements(a:string) {
    //http with a
    this.movements = [
      {name: "HI", cognome: "bRA", entrata: true, orario: "340934"},
      {name: "HI", cognome: "bRA", entrata: true, orario: "340934"},
      {name: "HI", cognome: "bRA", entrata: false, orario: "340934"},
      {name: "HI", cognome: "bRA", entrata: true, orario: "340934"},
      {name: "HI", cognome: "bRA", entrata: true, orario: "340934"},
    ]
  }

}
interface Bruhs {
  name: string,
  cognome: string,
  entrata: boolean,
  orario: string
}