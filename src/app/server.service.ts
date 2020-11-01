import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ServerService {

    constructor(private http: HttpClient) {
    }

    reviewRevid;

    private async request(method: string, url: string, data?: any) {
      const result = this.http.request(method, url, {
        body: data,
        responseType: 'json',
        observe: 'body',
        headers: {
          Authorization: `None`
        }
      });
      return new Promise((resolve, reject) => {
        result.subscribe(resolve, reject);
      });
    }

    getEvents() {
      return this.request('GET', `${environment.serverUrl}/event`);
    }

    createEvent(event) {
      return this.request('POST', `${environment.serverUrl}/event`, event);
    }

    updateEvent(event) {
      return this.request('PUT', `${environment.serverUrl}/event/${event.id}`, event);
    }

    deleteEvent(event) {
      return this.request('DELETE', `${environment.serverUrl}/event/${event.id}`);
    }

    getGenre() {
      return this.request('GET', `${environment.serverUrl}/genre`);
    }

    getreviewTopic(event) {
      return this.request('GET', `${environment.serverUrl}/reviewTopic?keyword=${event.keyword}`);
      // http://localhost:8080/reviewTopic?keyword=headphones
    }

    getsubgenre(event) {
      return this.request('GET', `${environment.serverUrl}/subgenre?id=${event.id}`);
      // http://localhost:8080/subgenre?id=1
    }

    getreview(event) {
      return this.request('GET', `${environment.serverUrl}/review?id=${event.id}`);
      // http://localhost:8080/subgenre?id=1
    }

    gethomepagereview() {
      return this.request('GET', `${environment.serverUrl}/homepagereview`);
      // http://localhost:8080/subgenre?id=1
    }

    getreview_revid(event) {
      return this.request('GET', `${environment.serverUrl}/review_revid?id=${event.id}`);
      // http://localhost:8080/subgenre?id=1
    }

    getProducts(event) {
      return this.request('GET', `${environment.serverUrl}/products?id=${event.id}`);
      // http://localhost:8080/subgenre?id=1
    }

    getProducts_prdid(event) {
      return this.request('GET', `${environment.serverUrl}/products_prdid?id=${event.id}`);
      // http://localhost:8080/subgenre?id=1
    }

    getreviewGroupItem() {
      return this.request('GET', `${environment.serverUrl}/reviewgrp`);
    }

    getReviewGroupById(event) {
      return this.request('GET', `${environment.serverUrl}/reviewgrpbyid?id=${event.id}`);
    }

    getReviewByGroupId(event) {
      return this.request('GET', `${environment.serverUrl}/reviewbygrpid?id=${event.id}`);
    }

}
