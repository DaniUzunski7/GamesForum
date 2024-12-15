import { Theme } from "../types/theme";

function commentLike(themes: Theme[], title: string, comment: string) {
  const commentsTheme = themes.find(theme => theme.title === title);
  const commentMatch = commentsTheme!.comments.find(c => c.content === comment);

  if (commentMatch!.isLiked === false) {
    commentMatch!.likes++;
    commentMatch!.isLiked = true;
  }
}

function themeLike(themes: Theme[], title: string) {
  const filtered = themes.find(themes => themes.title === title);

  if (filtered!.liked === false) {
    filtered!.likes++;
    filtered!.liked = true;
  }
}

export const likingFn = {
    commentLike,
    themeLike
}