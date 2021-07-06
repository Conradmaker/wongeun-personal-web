import { blogData, Post, tagList } from 'data/blogData';
import { useRouter } from 'next/router';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { BlogListContainer, PostCardBox } from './styles';

function Tag({ tagId }: { tagId: number }) {
  const [tag] = useState(tagList.find(v => v.id === tagId));

  if (!tag) return <></>;

  return <li>{tag.name}</li>;
}

type PostCardProps = {
  postData: Post;
  openPost: (src: string) => void;
};
function PostCard({ postData, openPost }: PostCardProps): JSX.Element {
  return (
    <PostCardBox onClick={() => openPost(postData.src)}>
      <div className="img__wrapper">
        <img src={postData.thumbnail} alt="post-thumbnail" />
        <ul className="tag__list">
          {postData.tags.map(tagId => (
            <Tag key={tagId + 'posttag' + postData.id} tagId={tagId} />
          ))}
        </ul>
      </div>
      <div className="summary">
        <b>{postData.title}</b>
        <p>{postData.desc}</p>
        <small>{postData.createdAt}</small>
      </div>
    </PostCardBox>
  );
}

type BlogListProps = {
  openPost: (src: string) => void;
};
export default function BlogList({ openPost }: BlogListProps): JSX.Element {
  const [postList, setPostList] = useState(blogData);
  const router = useRouter();

  useEffect(() => {
    if (router.query.tag) {
      setPostList(
        blogData.filter(post => post.tags.includes(+(router.query.tag as string)))
      );
    } else {
      setPostList(blogData);
    }
  }, [router.query]);

  return (
    <BlogListContainer>
      <div className="inner">
        {postList.map(post => (
          <PostCard key={post.id} postData={post} openPost={openPost} />
        ))}
      </div>
    </BlogListContainer>
  );
}
