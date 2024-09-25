import axios from 'axios';
import {fetchPosts} from './fetchPosts';
import {Post} from '@/types';

jest.mock('axios');

describe('fetchPosts', () => {
  it('fetches a list of posts', async () => {
    const mockPosts: Post[] = [
      {
        userId: 1,
        id: 1,
        title: 'Test Post 1',
        body: 'This is the body of test post 1',
      },
      {
        userId: 2,
        id: 2,
        title: 'Test Post 2',
        body: 'This is the body of test post 2',
      },
    ];

    (axios.get as jest.Mock).mockResolvedValueOnce({data: mockPosts});

    const posts = await fetchPosts();
    expect(posts).toEqual(mockPosts);
    expect(axios.get).toHaveBeenCalledWith(`${process.env.NEXT_PUBLIC_API_BASE_URL}/posts`);
  });

  it('throws an error when the API request fails', async () => {
    (axios.get as jest.Mock).mockRejectedValueOnce(new Error('Failed to fetch posts'));

    await expect(fetchPosts()).rejects.toThrow('Failed to fetch posts');
  });
});
