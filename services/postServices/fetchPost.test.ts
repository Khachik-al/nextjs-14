import axios from 'axios';
import {fetchPost} from './fetchPost';
import {Post} from '@/types';

jest.mock('axios');

describe('fetchPost', () => {
  it('fetches a single post by id', async () => {
    const mockPost: Post = {
      userId: 1,
      id: 1,
      title: 'Test Post',
      body: 'This is the body of the test post',
    };

    (axios.get as jest.Mock).mockResolvedValueOnce({data: mockPost});

    const post = await fetchPost('1');
    expect(post).toEqual(mockPost);
    expect(axios.get).toHaveBeenCalledWith(`${process.env.NEXT_PUBLIC_API_BASE_URL}/posts/1`);
  });

  it('throws an error when the API request fails', async () => {
    (axios.get as jest.Mock).mockRejectedValueOnce(new Error('Failed to fetch post'));

    await expect(fetchPost('1')).rejects.toThrow('Failed to fetch post');
  });
});
