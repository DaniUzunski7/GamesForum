import { inject, Injectable } from "@angular/core";
import { Theme } from "../types/theme";
import { doc, Firestore, getDoc, updateDoc } from "@angular/fire/firestore";
import { UserComment } from "../types/comment";

@Injectable({
  providedIn: 'root'
})
export class LikesService {
  private firestore = inject(Firestore);

  constructor() { }

  async commentLike(themeId: string, comment: string, username: string) {
    
    const themeRef = doc(this.firestore, 'themes', themeId);
    const themeSnap = await getDoc(themeRef);

    const themeData = themeSnap.data()!;
    const comments = themeData['comments'];
    
    const updatedComments = comments.map((likedComment: any) => {
    if (likedComment.content === comment) {
      let likedBy = likedComment.likedBy || [];

      if (likedBy.includes(username)) {
        const index = likedComment.likedBy.indexOf(username);
        
        likedComment.likedBy.splice(index, 1);

        return {...likedComment}
      } else {
        likedBy.push(username);

        return { ...likedComment, likedBy };
      }

    }
    
    return likedComment;
  });

  await updateDoc(themeRef, { comments: updatedComments });
  }
  
  themeLike(themes: Theme[], title: string) {
    const filtered = themes.find(themes => themes.title === title);
    
    
  }
  
}