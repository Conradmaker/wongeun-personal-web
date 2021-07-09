export const tagList = [
  { id: 0, name: 'front-end' },
  { id: 1, name: 'back-end' },
  { id: 2, name: 'dev-ops' },
  { id: 3, name: 'type-script' },
  { id: 4, name: 'java-script' },
  { id: 5, name: 'web-pack' },
  { id: 6, name: '디자인' },
  { id: 7, name: 'UX' },
  { id: 8, name: 'UI' },
  { id: 9, name: 'GraphQL' },
  { id: 10, name: 'Java' },
  { id: 11, name: '생각' },
  { id: 12, name: 'DataBase' },
];

export type Post = {
  id: string;
  title: string;
  desc: string;
  src: string;
  thumbnail: string;
  tags: number[];
  createdAt: string;
};

export const blogData = [
  {
    id: 'learn-webpack',
    title: '가볍고 무거운 웹팩 가이드',
    desc: '웹팩에 대하여 자세히 또 가볍게 알아보아요',
    src: 'https://www.craft.do/s/Oyb0htDtayXtv9',
    thumbnail:
      'https://www.innomedio.be/cache/upload/images/page/79/webpack-logo.jpg/1200x900-smart-fill-85.jpg',
    tags: [0, 5],
    createdAt: '2020-01-01',
  },
  {
    id: 'graph-vs-rest',
    title: 'GraphQL vs REST',
    desc: '그래서 뭐가 더 좋을까?',
    src: 'https://www.craft.do/s/bXeUOcIFpAkiwJ',
    thumbnail:
      'https://cdn.sanity.io/images/81pocpw8/production/3058082eb7077e1ee27a85c1e033facea075d3a8-2400x1800.jpg?w=800&h=600&fit=clip&auto=format',
    tags: [0, 1, 9],
    createdAt: '2020-01-01',
  },
  {
    id: 'learn-graphQL',
    title: 'GraphQL 간단히 알아보기',
    desc: 'GraphQL 간단하게 알아보고 사용해보자!',
    src: 'https://www.craft.do/s/dt6MQo41UGA1sF',
    thumbnail:
      'https://media.vlpt.us/images/yhg0337/post/7fd3f2fd-bd60-488f-aa22-d5f773d272c3/123123.png',
    tags: [0, 1, 9],
    createdAt: '2020-01-01',
  },
  {
    id: 'java-basic',
    title: 'Java 핵심만 알아보기',
    desc: 'Java입문기! 최대한 빠르게 알아보기',
    src: 'https://www.craft.do/s/MEauMPfyrIEgma',
    thumbnail:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Java-Debugging-Tips-881x441.jpg/800px-Java-Debugging-Tips-881x441.jpg',
    tags: [1, 10],
    createdAt: '2020-01-01',
  },
  {
    id: 'java-hard',
    title: 'Java 조금더 깊게 알아보기',
    desc: '다양한 방법과 효율성을 높여보기',
    src: 'https://www.craft.do/s/RWVlOTQBwOaCVY',
    thumbnail: 'https://www.yilmazmehmet.com/wp-content/uploads/2016/03/java-pic-jpg.jpg',
    tags: [1, 10],
    createdAt: '2020-01-01',
  },
  {
    id: 'typescript',
    title: '타입스크립트 그게 뭐라고?',
    desc: '왜 타입스크립트는 자바스크립트의 희망일까?',
    src: 'https://www.craft.do/s/e9ISSLZhlSAfsh',
    thumbnail:
      'https://blog.kakaocdn.net/dn/D0NQi/btqUBu6za5e/o2VprnsINsYlUq5Z4KqXw1/img.png',
    tags: [3],
    createdAt: '2020-01-01',
  },
  {
    id: 'es6',
    title: 'ES6 주요기능 알아보기',
    desc: '언제까지 이전 자바스크립트를 사용하실건가요..?',
    src: 'https://www.craft.do/s/WOKr9keSMkgxFZ',
    thumbnail: 'https://miro.medium.com/max/1200/1*g3JGD3I2DiqauhK2CTMLmw.jpeg',
    tags: [4],
    createdAt: '2020-01-01',
  },
  {
    id: 'ux-research',
    title: 'UX디자인 리서치 & 서비스 기획',
    desc: '프로젝트의 시작점 사용자 경험성 향상과 서비스 기획이 이루어지는 과정',
    src: 'https://www.craft.do/s/tTwGWl6MgSziOC',
    thumbnail:
      'https://secure-res.craft.do/v1/XpiwA8Kv35DTvgmwUfUTCdxEX1WUMknYTY1c5zwmkrmKTsNdWtW6JkKbNq1g9u22qMu5HqVYm5jFrLAeAPAYxzXTQsM76AABv69j8aP9LXJR33C8bfUnWMknVFXe9we6y4ExUtbQBMk5ecT5u1KY6kuCg',
    tags: [6, 7],
    createdAt: '2020-01-01',
  },
  {
    id: 'ui-design',
    title: 'UI디자인 기본 사전',
    desc: 'UI디자인의 용어와 기본 과정에 대한 정리',
    src: 'https://www.craft.do/s/nGPYrYSZahBDnO',
    thumbnail: 'https://miro.medium.com/max/2000/1*4583XDHQVv36aSvgw4eRwg.png',
    tags: [6, 8],
    createdAt: '2020-01-01',
  },
  {
    id: 'after-2020',
    title: '나의 2020년을 돌아보며',
    desc: '개발자로의 시작인 의미깊었던 한해를 마무리한 글',
    src: 'https://www.craft.do/s/IxFaZd3x7pDH8k',
    thumbnail:
      'https://media.vlpt.us/images/yhg0337/post/a817cb77-0692-4b0c-ab0e-f7fa9bde1582/2cb045b7ae35039cfeb4ae4137cb09f6.gif',
    tags: [11],
    createdAt: '2020-01-01',
  },
  {
    id: 'learn-rdbms',
    title: '데이터 베이스의 베이스다지기',
    desc: 'ANSI / ORACLE 모두 커버해버리기!',
    src: 'https://www.craft.do/s/fdevzcAljdOPO8',
    thumbnail:
      'https://content.techgig.com/thumb/msid-77786852,width-860,resizemode-4/Top-7-most-used-databases-by-developers-in-2020.jpg?182293',
    tags: [1, 12],
    createdAt: '2020-01-01',
  },
  {
    id: 'js-base',
    title: 'JavaScript 제대로 알고 쓰자!',
    desc: '자바스크립트의 근본을 찾아 떠나는 여행',
    src: 'https://www.craft.do/s/wpM7RZMUcyYMoJ',
    thumbnail:
      'https://www.altaisystems.com/wp-content/uploads/2015/03/toptal-blog-image-1522333595770-14ba14a2f6099482fa9189f8764dd5ad.png',
    tags: [4],
    createdAt: '2020-01-01',
  },
  {
    id: 'db-modeling',
    title: '데이터베이스 모델링 쉽게 알아보기',
    desc: '가장 어려운 DB설계를 쉽게 알아보고 정규화도 적용해보기',
    src: 'https://www.craft.do/s/TSotIlT14VSEz7',
    thumbnail: 'https://www.temok.com/blog/wp-content/uploads/2021/02/rel.jpg',
    tags: [1, 12],
    createdAt: '2020-01-01',
  },
  {
    id: 'html-doc',
    title: 'HTML 사전',
    desc: 'HTML의 태그와 속성들을 역할에 따라 간단히 자세하게 정리한 사전',
    src: 'https://www.craft.do/s/OLQ8aZDmjcLl5F',
    thumbnail:
      'https://secure-res.craft.do/v1/GZH4YHwzRFKUnEefo2KJnBx7b6BzJyWcopQo8pjgiJpkytTsUrNAgMHpv8ABfmESnQx9WND9NSz4Msw6NvUuWyPDKXz4vvmWP1JbDRigqtBsHN6Gvr4H1vz5e3yfj5ZJcciZqsJYJWQzxq6gxMb2k3qF',
    tags: [0],
    createdAt: '2020-01-01',
  },
  {
    id: 'css-doc',
    title: 'CSS 사전',
    desc: 'CSS 기본과 스타일, 속성들을 배워봅니다.',
    src: 'https://www.craft.do/s/VssOuImrHpuzDS',
    thumbnail:
      'https://secure-res.craft.do/v1/h4kDYUf3HjZpEYVobBcKRJ3VwZ19r99tUHJSwijJTph7uv1aHdkjUdhwT2q5NwdzCovTNLPmQSKTBSTCBr5jzaLtKDpniyLYJZxYcMbpTkneK2CSetQpgZ3VZMferweG9HEXHmiRzQtCRzGQXEuGF8LDJ',
    tags: [0],
    createdAt: '2020-01-01',
  },
  {
    id: 'css-layout',
    title: 'CSS로 더 쉽게 레이아웃 잡기',
    desc: '조금더 쉽고 효율적인 Flex & Grid를 알아보아요.',
    src: 'https://www.craft.do/s/UcS1WcAJKeEXnC',
    thumbnail:
      'https://secure-res.craft.do/v1/8veGq84DFEKZk9mgo7eww9zfBTHyQv3JXvFqMoH4Vr6wTLE6jzRhBmVfMY7tVzJ8fUudu9pSZihofVW66tr1CF3kkN77jfeC8pBT57boG4zw5xkJ2aootGGFtaYnHJzjeMKW6tabe9ZToQP255Papup52',
    tags: [0],
    createdAt: '2020-01-01',
  },
  {
    id: 'vue-basic',
    title: 'Vue.js 가이드',
    desc: '공식문서 + α 로 Vue.js 배워보기.',
    src: 'https://www.craft.do/s/aBc6bwbzWi7BnF',
    thumbnail:
      'https://secure-res.craft.do/v1/KUacDSj5jFjVBAF6Zd6Z7syEuMRZ1JAH1Ko2edvsK9mRmbmjiyRES3iZZY6nACXtLPrmg78t7wCMtnP1L7TRBDFmyL4fju81Vg269jn9zTZumtZhihYMAFjg3pcXSBxd9jieGEoh9aqKgabCX3KAdsTDX',
    tags: [0],
    createdAt: '2020-01-01',
  },
  {
    id: 'azure-funda',
    title: 'Azure Fundamental',
    desc: 'Micro Soft 트레이닝 데이 기록.',
    src: 'https://www.craft.do/s/ezvi6ASCCJbnDE',
    thumbnail:
      'https://secure-res.craft.do/v1/c8P7UHbnJjsN8PtxCZGzYKRZNS5oPzStYqNNwSa5BtThJogfdD3j5QNriEFJQfjMfNrvq3zaLC29suXdWoLy2uf7jKYr6hayY67RSWveDFFA5NU1KENGeawg2XCke7GnNspGRzK3RcoyE8NdjkXyBiw6b',
    tags: [2],
    createdAt: '2020-01-01',
  },
  {
    id: 'node-js-doc',
    title: 'Node.js 사전',
    desc: '알아두면 쓸모있는 Node.js 지식들',
    src: 'https://www.craft.do/s/y2T6Uu0u6tJcL5',
    thumbnail:
      'https://secure-res.craft.do/v1/PUgLfxEAcbY9mTWcNytxrXLWruB4PbuLiVnCfXjYPFtSLrrF5t8WjuACHMfiD4GCsXBxPaPQziCiuvrrKAU2ejdBriaPPahtXHBrtgRdq6dJboBMwZSFZFucjmXRwshqjMDjfyCVhbyVe9dzYKawoqMH9',
    tags: [1, 4],
    createdAt: '2020-01-01',
  },
];
