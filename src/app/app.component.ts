import { Component } from '@angular/core';
import { Article } from './article/Article';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  articles:Article[];
  constructor(){

    this.articles=[
      new Article('test','http://baidu.com',1),
      new Article('test2','http://baidu.com',2),
      new Article('test3','http://baidu.com',5),
    ] 
  }

  addArticle(title:HTMLInputElement,link:HTMLInputElement):Boolean{
  
    console.log(`Adding article title: ${title.value} and link: ${link.value}`);
    var temp:Article=new Article(title.value,link.value,0);
    this.articles.push(temp);
    title.value='';
    link.value='';
    return false;
  }

  sortArticle():Article[]{
    return this.articles.sort((a:Article,b:Article)=>a.votes-b.votes);
  }
}
