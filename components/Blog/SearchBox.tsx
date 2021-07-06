import { blogData, tagList } from 'data/blogData';
import { useRouter } from 'next/router';
import React from 'react';
import { MdCancel } from 'react-icons/md';
import { SearchBoxContainer } from './styles';

const calcPostLength = (tagId: number) => {
  let result = 0;
  blogData.forEach(post => {
    post.tags.findIndex(taggedId => taggedId === tagId) !== -1 ? (result += 1) : null;
  });
  return result;
};
type TagItemProps = {
  tagData: { id: number; name: string };
};
function TagItem({ tagData }: TagItemProps): JSX.Element {
  const router = useRouter();
  const postLength = React.useMemo(() => calcPostLength(tagData.id), [tagData]);
  const currentTag = router.query.tag || '9999';

  const onClickTag = () => {
    if (+currentTag === tagData.id) {
      router.push(`${router.pathname}`);
    } else {
      router.push(`${router.pathname}/?tag=${tagData.id}`);
    }
  };

  return (
    <li onClick={onClickTag} className={+currentTag === tagData.id ? 'active' : ''}>
      <b>{tagData.name}</b>
      <small>{postLength}</small>
      <strong>
        <MdCancel />
      </strong>
    </li>
  );
}

export default function SearchBox(): JSX.Element {
  return (
    <SearchBoxContainer>
      <div className="inner">
        <ul>
          {tagList.map(tag => (
            <TagItem key={tag.id + 'tag'} tagData={tag} />
          ))}
        </ul>
      </div>
    </SearchBoxContainer>
  );
}
