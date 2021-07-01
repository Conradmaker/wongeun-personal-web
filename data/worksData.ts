import { IconType } from './IconData';
export type ProjectListData = {
  [key in
    | 'develoPic'
    | 'wikea'
    | 'booksy'
    | 'starbucks'
    | 'vueMovie'
    | 'shoppingMall']: ProjectData;
};
export type ProjectData = {
  id: string;
  title: string;
  summary: string;
  type: string;
  feature: string;
  siteLink: string;
  docLink: string;
  ghLink: string;
  thumbnail: string;
  shares: string;
  gif: string;
  stack: {
    front: IconType[] | [];
    back: IconType[] | [];
  };
};
const projectData: ProjectListData = {
  develoPic: {
    id: 'developic',
    title: 'DeveloPic',
    summary: '한줄요약',
    type: '팀프로젝트',
    feature: '특징',
    siteLink: 'https://developic.shop',
    docLink: 'https://www.craft.do/s/JtJncxG95X79qx',
    ghLink: '깃헙링크',
    thumbnail: '썸내일',
    shares: '80%',
    gif: '움짤',
    stack: {
      front: ['typeScript', 'next', 'react', 'redux', 'styledComponents'],
      back: ['typeScript', 'express', 'sequelize', 'aws', 'mySql'],
    },
  },
  wikea: {
    id: 'wikea',
    title: 'Wikea',
    summary: '이케아의 클론코딩',
    type: '팀프로젝트',
    feature: '특징',
    siteLink: 'https://wikea.shop',
    docLink: 'https://www.craft.do/s/3gEdwFogZC1icf',
    ghLink: '깃헙링크',
    thumbnail: '썸내일',
    shares: '80%',
    gif: '움짤',
    stack: {
      front: ['javaScript', 'react', 'redux', 'styledComponents'],
      back: ['typeScript', 'express', 'sequelize', 'aws', 'mySql'],
    },
  },
  shoppingMall: {
    id: 'shoppingMall',
    title: 'Shopping Mall',
    summary: '쇼핑몰 프로젝트',
    type: '개인프로젝트',
    feature: '특징',
    siteLink: 'https://wikea.shop',
    docLink: 'https://www.craft.do/s/3gEdwFogZC1icf',
    ghLink: '깃헙링크',
    thumbnail: '썸내일',
    shares: '80%',
    gif: '움짤',
    stack: {
      front: ['javaScript', 'react', 'redux', 'styledComponents'],
      back: ['typeScript', 'express', 'sequelize', 'aws', 'mySql'],
    },
  },
  booksy: {
    id: 'booksy',
    title: 'BOOKSY',
    summary: '도서 서비스',
    type: '개인프로젝트',
    feature: '특징',
    siteLink: 'https://v-booksy.netlify.app',
    docLink: 'https://www.craft.do/s/FQaHIdaMk54gvf',
    ghLink: 'https://github.com/Conradmaker/v-boosy-front',
    thumbnail: '썸내일',
    shares: '100%',
    gif: '움짤',
    stack: {
      front: ['javaScript', 'vueJs', 'vuex', 'sass'],
      back: [],
    },
  },
  starbucks: {
    id: 'starbucks',
    title: 'starbucks 클론',
    summary: '스타벅스 웹페이지 스타일 클론코딩',
    type: '개인프로젝트',
    feature: '특징',
    siteLink: 'https://conrad-starbucks-clone.netlify.app',
    docLink: 'https://www.craft.do/s/tHzxAtBPktMEGy',
    ghLink: '깃헙링크',
    thumbnail: '썸내일',
    shares: '100%',
    gif: '움짤',
    stack: {
      front: ['javaScript'],
      back: [],
    },
  },
  vueMovie: {
    id: 'vue-movie-app',
    title: '영화검색서비스',
    summary: 'vue.js와 imdb로 구현한 영화검색서비스',
    type: '개인프로젝트',
    feature: '특징',
    siteLink: 'https://vue-movie-app-cad18.firebaseapp.com/',
    docLink: 'https://v-booksy.netlify.app/',
    ghLink: '깃헙링크',
    thumbnail: '썸내일',
    shares: '100%',
    gif: '움짤',
    stack: {
      front: ['javaScript'],
      back: [],
    },
  },
};
export default projectData;
