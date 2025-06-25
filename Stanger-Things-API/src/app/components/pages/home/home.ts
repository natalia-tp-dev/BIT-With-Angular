import { Component, inject , OnInit } from '@angular/core';
import { CommonModule, NgOptimizedImage} from '@angular/common';
import { APIServices } from '../../../services/api-services';

@Component({
  selector: 'app-home',
  imports: [CommonModule, NgOptimizedImage],
  templateUrl: './home.html',
  styleUrl: './home.css'
})

export class Home {
  private strangerThingsApi = inject(APIServices)
  characters: any[] = []
  allCharacters: any[] = []
  name: string = ''
  vecnaGif = 'https://media1.tenor.com/m/XICG-8GGCngAAAAC/vecna-epic-gems.gif'
  hoveredCharacter: any = null

  ngOnInit(): void {
    this.strangerThingsApi.getCharacter('Eleven').subscribe((res: any) => {
      this.characters.push(...res)
    })
    this.strangerThingsApi.getCharacter('Mike').subscribe((res: any) => {
      this.characters.push(...res)
    })
    this.strangerThingsApi.getCharacter('Will').subscribe((res: any) => {
      this.characters.push(...res)
    })
    this.strangerThingsApi.getCharacter('Dustin').subscribe((res: any) => {
      this.characters.push(...res)
    })
    this.strangerThingsApi.getCharacter('Lucas').subscribe((res: any) => {
      this.characters.push(...res)
    })
  }
}
