import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  posts = [
    {
      title : 'Neat Tree',
      imageUrl : 'assets/tree.jpeg',
      username : 'nature',
      content : 'I saw this neat tree today'
    },
    {
      title : 'Snowy mountain',
      imageUrl : 'assets/mountain.jpeg',
      username : 'nmountainlover',
      content : 'I saw this snowy mountain today'
    },
    {
      title : 'Biking',
      imageUrl : 'assets/biking.jpeg',
      username : 'biker',
      content : 'I love biking'
    },
    
  ]
}
