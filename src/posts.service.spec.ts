import { Post, PostsService } from './posts.service';

describe('PostsService', () => {
  let postsService: PostsService;
  const post: Omit<Post, 'id' | 'date'> = {
    text: 'Mocked post',
  };
  let createdPost: Post
  const DEFAULT_NEW_POST = { text: 'Some pre-existing post' }

  beforeEach(async () => {
    postsService = new PostsService();
    createdPost = postsService.create(DEFAULT_NEW_POST);
  });

  it('should add a new post', () => {
    // реализуйте тест-кейс
    expect(createdPost).toStrictEqual({
      ...DEFAULT_NEW_POST,
      id: createdPost.id,
      date: createdPost.date,
    });
  });

  it('should find a post', () => {
    // реализуйте тест-кейс
    const NEW_POST = {text: 'Some pre-existing post'}
    const { id } = postsService.create(NEW_POST);
    expect(postsService.find(id)).toEqual(expect.objectContaining(NEW_POST));
  });
});
