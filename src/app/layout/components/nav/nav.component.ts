import { Component, OnInit } from '@angular/core';
import { LinkModel } from '../../models/link.model';
import { TokenModel } from 'src/app/core/models/token.model';
import { SessionService } from 'src/app/core/services/session.service';

const anonymousNav: LinkModel[] = [
  { title: 'Accueil', url: '/' },
];
const memberNav: LinkModel[] = [
  { title: 'Accueil', url: '/' },
];
const adminNav: LinkModel[] = [
  { title: 'Accueil', url: '/' },
];

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  links!: LinkModel[]

  connectedUser: TokenModel | undefined;
  logged!: boolean

  constructor(
    private readonly _sessionService: SessionService
  ) { }

  ngOnInit(): void {
    this._sessionService.data$.subscribe({
      next: (response) => {
        this.connectedUser = response;
        this.logged = response !== undefined;
        this.links = response?.roles.some(r => r.name === 'Admin') ? adminNav :
          response?.roles.some(r => r.name === 'Member') ? memberNav :
            anonymousNav;
      }
    });
  }

  toggleLink(i: number): void {
    for (let j: number = 0; j < this.links.length; j++) {
      if (j != i) {
        this.links[j].isVisible = false;
      }
    }
    this.links[i].isVisible = !this.links[i].isVisible;
  }

  logout(): void {
    this._sessionService.stop();
  }

}
