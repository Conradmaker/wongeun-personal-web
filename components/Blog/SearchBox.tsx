import { blogData, tagList } from 'data/blogData';
import React from 'react';
import { SearchBoxContainer } from './styles';

const calcPostLength = (tagId: number) => {
  let result = 0;
  blogData.forEach(post => {
    post.tags.findIndex(taggedId => taggedId === tagId) !== -1 ? (result += 1) : null;
  });
  return result;
};

function TagItem({ tagData }: { tagData: { id: number; name: string } }): JSX.Element {
  const postLength = React.useMemo(() => calcPostLength(tagData.id), [tagData]);

  return (
    <li>
      <strong>{tagData.name}</strong> <small>{postLength}</small>
    </li>
  );
}

function SearchInput(): JSX.Element {
  return (
    <form className="search__input">
      <input type="text" placeholder="SEARCH" />
      <div className="line"></div>
    </form>
  );
}

export default function SearchBox(): JSX.Element {
  return (
    <SearchBoxContainer>
      <div className="inner">
        <SearchInput />
        <ul>
          {tagList.map(tag => (
            <TagItem key={tag.id + 'tag'} tagData={tag} />
          ))}
        </ul>
      </div>
    </SearchBoxContainer>
  );
}
