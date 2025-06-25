import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navigation } from "./components/shared/navigation/navigation";
import { Footer } from './components/shared/footer/footer';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navigation, Footer],
  template: `<app-navigation/> <router-outlet/> <app-footer/>`,
  styleUrl: './app.css'
})
export class App {
  protected title = 'Stanger-Things-API';
}
