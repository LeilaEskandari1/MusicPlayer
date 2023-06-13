import { Injectable } from '@angular/core';
import {Music} from '../../models/music';

@Injectable({
  providedIn: 'root'
})
export class PalyerService {
  musiclist:Music[]=[{id:1,title:'baran',url:"../../../assets/music/1.mp3",img:"../../../assets/images/1.jpg"},{id:2,title:'zamestoon',url:'../../../assets/music/2.mp4',img:"../../../assets/images/3.jpg"},{id:3,title:'tabestoon',url:"../../../assets/music/3.mp3",img:"../../../assets/images/2.jpg"}];
  temp:Music[]=[];
  url:string="../../../assets/music/1.mp3";
  id:number=1;
  pathimage:string="../../../assets/images/1.jpg";
  private audio1=new Audio();
  constructor() { }
  getAll():Music[]{
    return this.musiclist;
  }
  findMusic(id:number):void{
const index=this.musiclist.findIndex(obj=>obj.id==id);
this.url=this.musiclist[index].url;
this.pathimage=this.musiclist[index].img;
this.id=id;
console.log(this.url);
// this.audio1.load();
// this.audio1.play();
  }
  paly():void{
    this.audio1.src=this.url;
    this.audio1.load();
this.audio1.play();
  }
  pause():void{
  
this.audio1.pause();
  }
  next():void{
this.id=this.id+1;
if (this.id>3){
  this.id=1;
}
const index=this.musiclist.findIndex(obj=>obj.id==this.id);
this.url=this.musiclist[index].url;
this.pathimage=this.musiclist[index].img;
console.log(this.id);
this.audio1.src=this.url;
this.audio1.load();
this.audio1.play();
  }
  befor():void{
    this.id=this.id-1;
    if (this.id<1){
      this.id=1;
    }
    const index=this.musiclist.findIndex(obj=>obj.id==this.id);
this.url=this.musiclist[index].url;
this.pathimage=this.musiclist[index].img;
    console.log(this.id);
    this.audio1.src=this.url;
    this.audio1.load();
this.audio1.play();
  }
  
}
