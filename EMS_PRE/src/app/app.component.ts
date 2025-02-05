import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./common/header/header.component";
import { EventsSearchPageComponent } from "./pages/events-search-page/events-search-page.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ HeaderComponent, EventsSearchPageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'EMS_PRE';
}
