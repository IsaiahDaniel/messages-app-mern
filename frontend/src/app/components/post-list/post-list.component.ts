import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {

  panelOpenState = false;

  constructor(private httpService: HttpService) { }

  ngOnInit(): void {
    this.getPosts();
  }

  getPosts(){
    const path = "posts";
    this.httpService.get(path, (data: any) => {
      console.log(data);
    });
  }

}
