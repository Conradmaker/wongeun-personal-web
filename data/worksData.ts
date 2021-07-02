import { IconType } from './IconData';
export type ProjectListData = {
  [key in
    | 'develoPic'
    | 'wikea'
    | 'booksy'
    | 'starbucks'
    | 'vueMovie'
    | 'shoppingMall'
    | 'vueTodoApp']: ProjectData;
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
    thumbnail: 'https://i.ibb.co/XJGDxTy/2021-06-28-4-27-46.png',
    shares: '80%',
    gif: 'https://i.ibb.co/L0fc5pJ/Jul-03-2021-00-24-51.gif',
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
    ghLink: 'https://github.com/forCozi/ikea-clone-client',
    thumbnail: 'https://i.imgur.com/623unUu.png',
    shares: '80%',
    gif: 'https://i.ibb.co/Ttgj5tX/Jul-03-2021-00-23-36.gif',
    stack: {
      front: ['javaScript', 'react', 'redux', 'saga', 'styledComponents'],
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
    docLink: 'https://www.craft.do/s/MpbDWC9Bn6ZRSh',
    ghLink: 'https://github.com/Conradmaker/shopping-mall-project',
    thumbnail: 'https://i.ibb.co/3fCQG2j/2021-06-28-4-49-37.png',
    shares: '80%',
    gif: '움짤',
    stack: {
      front: ['typeScript', 'react', 'redux', 'styledComponents'],
      back: ['typeScript', 'express', 'jest', 'mongoDb'],
    },
  },
  booksy: {
    id: 'booksy',
    title: 'BOOKSY',
    summary: '인터파크 API를 이용한 도서 서비스',
    type: '개인프로젝트',
    feature: '특징',
    siteLink: 'https://v-booksy.netlify.app',
    docLink: 'https://www.craft.do/s/FQaHIdaMk54gvf',
    ghLink: 'https://github.com/Conradmaker/v-boosy-front',
    thumbnail: 'https://i.ibb.co/09x9FpY/2021-07-02-11-57-59.png',
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
    docLink: 'https://www.craft.do/s/BjfcBcNfEY8GYB',
    ghLink: 'https://github.com/Conradmaker/starbucks-clone',
    thumbnail: 'https://i.ibb.co/3fCQG2j/2021-06-28-4-49-37.png',
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
    docLink: 'https://www.craft.do/s/0twrmWuA9nnu4s',
    ghLink: 'https://github.com/Conradmaker/vue-movie-app',
    thumbnail: 'https://i.ibb.co/NKk4x2W/2021-07-02-11-59-40.png',
    shares: '100%',
    gif: '움짤',
    stack: {
      front: ['javaScript', 'vueJs', 'vuex'],
      back: [],
    },
  },
  vueTodoApp: {
    id: 'vue-todo-app',
    title: '영화검색서비스',
    summary: 'vue.js로 구현한 투두앱',
    type: '개인프로젝트',
    feature: '특징',
    siteLink: 'https://wongeun-vue-todo.netlify.app',
    docLink: 'https://www.craft.do/s/zRPdSwGlK4UHvF',
    ghLink: 'https://github.com/Conradmaker/vue-todo-app',
    thumbnail: 'https://i.ibb.co/pQm1rbV/2021-07-03-12-03-10.png',
    shares: '100%',
    gif: '움짤',
    stack: {
      front: ['javaScript', 'vueJs', 'sass'],
      back: [],
    },
  },
};
export default projectData;
