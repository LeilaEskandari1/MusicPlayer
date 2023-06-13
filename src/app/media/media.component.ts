import { Component, OnInit } from '@angular/core';
import {Music} from '../models/music';
import { PalyerService } from './services/palyer.service';
@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.css']
})
export class MediaComponent implements OnInit{
  path:string='';
  constructor( private  playerservice:PalyerService){}
musiclist:Music[]=[];
ngOnInit(): void {
 this.musiclist= this.playerservice.getAll();
 this.path=this.playerservice.pathimage;
}
audio=new Audio();
play(id:number){
  console.log(id)
this.playerservice.findMusic(id);

//  this.audio.load();
//   this.audio.play();
}
pause(){
this.playerservice.pause();
}
p(){
this.playerservice.paly();
this.path=this.playerservice.pathimage;
}
after(){
  this.playerservice.next();
  this.path=this.playerservice.pathimage;
}
befor(){
this.playerservice.befor();
this.path=this.playerservice.pathimage;
}
}
