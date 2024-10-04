import React, { useEffect, useState } from 'react';
import './index.css';
import Post from '../post';
import queryRunner from '../../../query';

function PostsPage() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    queryRunner.getPosts().then((posts: any) => setPosts(posts));
  }, []);
  return (
    <div className="Posts-page">
      <div className='Posts-content'>
      {posts.map((post) => (<Post post=post/>))}
      </div>
    </div>
  );
}

export default PostsPage;
