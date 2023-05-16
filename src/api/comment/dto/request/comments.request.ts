export class CommentsRequest {
  postId: number;
  // @ApiProperty({ required: true, description: '아이템 조회 개수', example: 5 })
  // countOfItems!: number;
  //
  // @ApiProperty({ required: false, description: '이전 조회 아이템 목록 마지막 아이템 아이디', example: 5 })
  // lastItemId?: number;

  setPostId(postId: number): CommentsRequest {
    this.postId = postId;
    return this;
  }
}
