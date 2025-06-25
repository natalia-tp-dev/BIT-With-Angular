import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class APIServices {

  constructor() { }
  httpClient = inject(HttpClient)

  getCharacters(){
    return this.httpClient.get('https://stranger-things-api.fly.dev/api/v1/characters')
  }
  getCharacter(name: string) {
    return this.httpClient.get(`https://stranger-things-api.fly.dev/api/v1/characters?name=${name}`)
  }
}
