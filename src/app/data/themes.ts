import { DatePipe } from "@angular/common";
import { Theme } from "../types/theme";

export let themes: Theme[] = [
    {
      title: 'The Ultimate Open World',
      gameTitle: 'Elden Ring',
      content: 'What are your favorite moments exploring the Lands Between?',
      createdAt: new Date(),
      likes: 120,
      liked: false,
      comments: [
        {
            content: 'Every moment! Love exploring!',
            likes: 3,
            author: 'DaniU7',
            createdAt: new Date(),
            isLiked: false
        },
        {
            content: 'I do not know',
            likes: 0,
            author: 'Marti8787',
            createdAt: new Date(),
            isLiked: false
        }
      ],
      owner: 'Krisi2007',
      id: '5'
    },
    {
      title: 'A Visual Masterpiece',
      gameTitle: 'Stellar Blade',
      content: 'Let’s talk about the graphics and combat system!',
      createdAt: new Date,
      likes: 85,
      liked: false,
      comments: [
        {
            content: 'Really good! One of the best games in that aspect!',
            likes: 7,
            author: 'DaniU7',
            createdAt: new Date(),
            isLiked: false
        },
        {
            content: 'Not a fan of the graphics',
            likes: 1,
            author: 'Krisi2007',
            createdAt: new Date(),
            isLiked: false
        }
      ],
      owner: 'Marti8787',
      id: '3'
    },
    {
      title: 'Cooperative Chaos',
      gameTitle: 'Helldivers 2',
      content: 'Share your craziest co-op moments!',
      createdAt: new Date(),
      likes: 200,
      liked: false,
      comments: [
        {
            content: 'I do not know',
            likes: 0,
            author: 'IcoPeikata',
            createdAt: new Date(),
            isLiked: false
        }
      ],
      owner: 'IcoPeikata',
      id: '1'
    },
    {
        title: 'Shittiest game ever!',
        gameTitle: 'EAFC25',
        content: 'Absolute disaster of a game! Unbelievable!',
        createdAt: new Date(),
        likes: 1000000,
        liked: false,
        comments: [
            {
                content: 'After the new update is even worse!',
                likes: 25,
                author: 'IcoPeikata',
                createdAt: new Date(),
                isLiked: false
            },
            {
                content: 'Every year it gets worse and worse...',
                likes: 100,
                author: 'Marti8787',
                createdAt: new Date(),
                isLiked: false
            }
          ],
        id: '2',
        owner: 'DaniU7'
    }
  ];