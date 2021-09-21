import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-like-and-dislike',
  templateUrl: './like-and-dislike.component.html',
  styleUrls: ['./like-and-dislike.component.scss']

})
export class LikeAndDislikeComponent  {
  numberOfLikes : number=100;
  numberOfDislike: number=25;
  liked:boolean = true;
  disliked:boolean = true;


  likeButtonClick() {
    if (this.liked === true && this.disliked === true) {
      this.numberOfLikes++;
      this.liked = false;
    } else if (this.liked === true && this.disliked === false) {
      this.numberOfLikes++;
      this.liked = false;
      this.numberOfDislike--;
      this.disliked = true;
    } else if (this.liked === false && this.disliked === true) {
      this.numberOfLikes--;
      this.liked = true;
    }
  }
  dislikeButtonClick() {
    if (this.disliked === true && this.liked === true) {
      this.numberOfDislike++;
      this.disliked = false;
    } else if (this.disliked === true && this.liked === false) {
      this.numberOfDislike++;
      this.numberOfLikes--;
      this.disliked = false;
      this.liked = true;
    } else if (this.disliked === false && this.liked === true) {
      this.numberOfDislike--;
      this.disliked = true;
    }
  }
}
