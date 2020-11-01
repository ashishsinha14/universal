import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { ServerService } from '../server.service';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];
  reviewevents: any[] = [];
  songs: any;
  constructor(private heroService: HeroService, private server: ServerService, private http: HttpClient) { }

  ngOnInit() {
    this.getHeroes();
    // this.heroService.test();
    // this.getReviewforHomePage();
    this.test();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes.slice(1, 5));
  }

  private getReviewforHomePage() {
    // this.http.get<any>('https://reviewstory-11799.nodechef.com//homepagereview');
    this.http.get<any>('https://api.npms.io/v2/search?q=scope:angular').subscribe(data => {
      console.log(data.total);
    })
    // this.server.gethomepagereview().then((response: any) => {
    //   console.log('HomePageReviewResponse', response);
    //   this.reviewevents = response.map((ev) => {
    //     return ev;
    //   });
    // });
  }
  private test() {
    console.log('JSS1');
    this.http.get<any>(`${environment.serverUrl}/get-songs`).subscribe(data => {
      console.log(data.total);
    })
    // return this.http.get<any[]>(`${environment.serverUrl}/get-songs`)
    // .pipe(
    //   tap(songs => {
    //     console.log('Songs retrieved!');
    //     this.songs = songs;
    //   }),
    //   catchError(this.handleError<any[]>('Get Songs', []))
    // );
  }
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error);
      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
