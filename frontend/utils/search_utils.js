export const commentUpdate = (comments, comment) => {
    if (comment.parent_comment_id == null){
        return;
    }
    const parent_comment = comments[comment.parent_comment_id];

    if (parent_comment.child_comments){
      const targetIdx = keySearch(parent_comment.child_comments, comment.id);
      if(targetIdx == -1){ // key not found
        parent_comment.child_comments.push(comment);
      }else{
        parent_comment.child_comments[targetIdx] = comment;
      }
    }else{
        parent_comment.child_comments = [comment];
    }
    commentUpdate(comments, parent_comment);
}

export const keySearch = (commentsList, targetId) => {
    let idx = 0;
    while(idx < commentsList.length){
        if (commentsList[idx].id == targetId){
            return idx;
        }
        idx++;
    }
    return -1;
}