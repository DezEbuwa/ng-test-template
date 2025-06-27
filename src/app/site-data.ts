import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SiteData {
  actorDataURL = 'assets/data/slj_filmography.json';
  constructor(private http: HttpClient) { }
  get title(): string {
    return SITE_DATA.title;
  }
  get nav_buttons(): any[] {
    return SITE_DATA.nav_buttons;
  }

  get speechForModal(): string {
    return SITE_DATA.speechForModal;
  } 

  async getActorData(): Promise<any> {
    return firstValueFrom(this.http.get(this.actorDataURL, { responseType: 'json' }));
  }
}

const SITE_DATA = { 
  title: 'Angular Test Template',
  nav_buttons: [
    { name: 'Home', route: '/home'},
    { name: 'UI Components', subMenu: [
        { name: 'Table', route: '/table' },
        { name: 'Modal', route: '/modal' },
      ] 
    },
    { name: 'Cool Features', subMenu: [
        { name: 'Signals', route: '/signals'},
        { name: 'Router Guards', route: '/router-guards' },
      ]
    }
  ],
  speechForModal: `
    <p>I don't know what to say, really. Three minutes till the biggest battle of our professional lives all comes down to today. Now either we heal as a team or we're gonna crumble, inch by inch, play by play, 'til we're finished.</p>

    <p>We're in hell right now, gentlemen, believe me. And, we can stay here -- get the s**t kicked out of us -- or we can fight our way back into the light. We can climb outta hell one inch at a time.</p>

    <p>Now, I can't do it for you. I'm too old. I look around. I see these young faces, and I think -- I mean -- I made every wrong choice a middle-aged man can make. I, uh, I pissed away all my money, believe it or not. I chased off anyone who's ever loved me. And lately, I can't even stand the face I see in the mirror.</p>  

    <p>You know, when you get old in life things get taken from you. I mean that's...part of life. But, you only learn that when you start losing stuff. You find out life's this game of inches. So is football. Because in either game, life or football, the margin for error is so small -- I mean one-half a step too late, or too early, and you don't quite make it. One-half second too slow, too fast, you don't quite catch it.</p>

    <p>The inches we need are everywhere around us.</p>     

    <p>They're in every break of the game, every minute, every second.</p> 

    <p>On this team, we fight for that inch. On this team, we tear ourselves and everyone else around us to pieces for that inch. We claw with our fingernails for that inch, because we know when we add up all those inches that's gonna make the f**kin' difference between winning and losing! Between livin' and dyin'!</p>

    <p>I'll tell you this: In any fight, it's the guy who's willing to die who's gonna win that inch. And I know if I'm gonna have any life anymore, it's because I'm still willin' to fight and die for that inch. Because that's what livin' is! The six inches in front of your face!!</p>

    <p>Now I can't make you do it. You got to look at the guy next to you. Look into his eyes! Now I think you're gonna see a guy who will go that inch with you. You're gonna see a guy who will sacrifice himself for this team because he knows, when it comes down to it, you're gonna do the same for him!</p>

    <p>That's a team, gentleman!</p>

    <p>And, either we heal, now, as a team, or we will die as individuals.</p>

    <p>That's football guys.</p>

    <p>That's all it is.</p>

    <p>Now, what are you gonna do?</p>

  `
}
