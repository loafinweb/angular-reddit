import { Component, OnInit, Input } from '@angular/core';
import { Article } from './Article';
import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

 selArticle:Article;

 @Input() article:Article;

  constructor() { 
    this.article=new Article(
    'Augular 2',
    'http://augular.io',
    10);
  
  }

  ngOnInit() {
  }

  voteUp():boolean{
    this.article.voteUp();
    return false;
  }

  voteDown():boolean{
    this.article.voteDown();
    return false;
  }

  selected(article:Article):void{
    console.log("current article title:"+article.title);
    this.selArticle=article;
  }
  

  isSelected(article:Article):boolean{
    // console.log("--");
     if(!article || !this.selArticle){
         return false;
     }
     return article.title===this.selArticle.title;
  }
}
