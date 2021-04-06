import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, filter } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class GithubService {

  private readonly url = 'https://api.github.com/users/Mattyucode/repos';

  constructor(private httpClient: HttpClient) { }

  loadRepos = () => {

    return this.httpClient.get(this.url)
      .pipe(
        map((item: any) => item.filter(value => !value.fork))
        // map((item: any) => item.filter(value => (value.stargazers_count > 5)))
      );
  }
}

