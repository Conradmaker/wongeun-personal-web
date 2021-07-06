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
    tags: [0],
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
      'https://www.reachfirst.com/wp-content/uploads/2019/07/User-Experience.jpg',
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
];
