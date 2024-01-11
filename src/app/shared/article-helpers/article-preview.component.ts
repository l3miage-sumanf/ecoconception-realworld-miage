import { Component, Input } from "@angular/core";
import { Article } from "../../core/models/article.model";
import { ArticleMetaComponent } from "./article-meta.component";
import { FavoriteButtonComponent } from "../buttons/favorite-button.component";
import { RouterLink } from "@angular/router";
import { NgForOf } from "@angular/common";
import {Howl} from "howler";

@Component({
  selector: "app-article-preview",
  templateUrl: "./article-preview.component.html",
  imports: [ArticleMetaComponent, FavoriteButtonComponent, RouterLink, NgForOf],
  standalone: true,
})
export class ArticlePreviewComponent {
  @Input() article!: Article;

  private sound = new Howl({
    src: ['assets/sons/Fail.mp3']
  });


  playSound() {
    this.sound.play();
  }

  toggleFavorite(favorited: boolean): void {
    this.playSound();
    this.article.favorited = favorited;

    if (favorited) {
      this.article.favoritesCount++;
    } else {
      this.article.favoritesCount--;
    }
  }
}
