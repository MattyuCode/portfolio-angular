import { Component, OnInit } from '@angular/core';
import { GithubService } from './../../github.service';

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.css']
})
export class WorksComponent implements OnInit {

  repos: any;
  config: any;

  constructor(private GitSer: GithubService) { }

  ngOnInit(): void {
    this.GitSer.loadRepos().subscribe((res: any) => {
      this.repos = res;
    });
  }


}
