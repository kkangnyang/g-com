export async function getFollowingPosts() {
    const res = await fetch(`http://localhost:9090/api/post/followings`, {
      next: {
        tags: ['posts', 'followings'],
      },
      cache: 'no-store',
    });
  
    if (!res.ok) {
      throw new Error('Failed to fetch data');
    }

    console.log('api/followingPosts')
  
    return res.json();
  }
  