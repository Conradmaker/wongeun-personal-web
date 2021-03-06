import { IconType } from './IconData';
export type ProjectListData = {
  [key in 'develoPic' | 'wikea' | 'booksy' | 'starbucks' | 'shoppingMall']: ProjectData;
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
  desc: string[];
};
const projectData: ProjectListData = {
  develoPic: {
    id: 'developic',
    title: 'DeveloPic',
    summary: '사진작가를 위한 블로그 플랫폼',
    type: '팀프로젝트',
    feature: '특징',
    siteLink: 'https://developic.shop',
    docLink: 'https://www.craft.do/s/JtJncxG95X79qx',
    ghLink: '깃헙링크',
    // thumbnail: 'https://i.ibb.co/XJGDxTy/2021-06-28-4-27-46.png',
    thumbnail: 'https://i.ibb.co/MchWzvg/2021-07-09-11-49-45.png',
    shares: '0%',
    gif: 'https://i.ibb.co/L0fc5pJ/Jul-03-2021-00-24-51.gif',
    stack: {
      front: ['typeScript', 'next', 'react', 'redux', 'styledComponents'],
      back: ['typeScript', 'express', 'sequelize', 'aws', 'mySql'],
    },
    desc: [
      'SEO 최적화를 위해 next를 활용하여 SSR 적용',
      'Redux(tookit)을 이용하여 전역 상태관리',
      '사진을 서버상에 올리는 등의 다기능 에디터 적용',
      '시리즈, 임시저장, 구독, 추천 글 등의 블로그 기능 추가',
      '사진 메타데이터 / 포토 앨범 등의 사진 특화 기능 적용',
      '페이스북,카카오,구글 + 로컬로그인 활용을 위한 passport사용',
      'S3+lambda를 이용한 이미지 리사이징 구현',
      'DB상 로그 기록을 이용한 실시간 순위 구현',
      '모바일 기기를 지원하는 반응형 웹 구현',
      'AWS 리소스를 이용한 cloud 서버 및 배포 진행',
    ],
  },
  wikea: {
    id: 'wikea',
    title: 'Wikea',
    summary: '이케아의 클론 프로젝트',
    type: '팀프로젝트',
    feature: '특징',
    siteLink: 'https://wikea.site',
    docLink: 'https://www.craft.do/s/3gEdwFogZC1icf',
    ghLink: 'https://github.com/forCozi/ikea-clone-client',
    // thumbnail: 'https://i.imgur.com/623unUu.png',
    thumbnail: 'https://i.ibb.co/5TTvWWc/2021-07-11-6-36-43.png',
    shares: '0%',
    gif: 'https://i.ibb.co/Ttgj5tX/Jul-03-2021-00-23-36.gif',
    stack: {
      front: ['javaScript', 'react', 'redux', 'saga', 'styledComponents'],
      back: ['typeScript', 'express', 'sequelize', 'aws', 'azure', 'mySql', 'jest'],
    },
    desc: [
      'React를 이용한 SPA 이케아 클론 프로젝트',
      'Redux + Redux-saga 를 활용한 전역 상태관리',
      'Puppeteer를 이용한 상품등의 데이터 약 9000개 크롤링 후 DB활용',
      '장바구니, 위시리스트, 결제등의 기능 적용',
      '이메일을 이용한 회원정보 관리 등 회원 기능 적용',
      '모바일 기기를 지원하는 반응형 웹 구현',
      'typescript + express + sequelize를 이용한 백앤드 서버 구현',
      'jest를 이용한 Unit test 및 E2E 테스트 커버리지 90%이상',
      'Azure리소스를 이용한 cloud 서버 및 배포 진행',
    ],
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
    // thumbnail: 'https://i.ibb.co/09x9FpY/2021-07-02-11-57-59.png',
    thumbnail: 'https://i.ibb.co/Px7Rwpn/2021-07-11-11-50-43.png',
    shares: '100%',
    gif: '움짤',
    stack: {
      front: ['javaScript', 'vueJs', 'vuex', 'sass'],
      back: [],
    },
    desc: [
      'vue.js 를 이용한 spa 도서관련 프로젝트',
      'interpark-api CORS해결을 위한 배포시 netlify PROXY 셋팅',
      'vuex를 이용한 전역상태 관리',
      'vue-testing-librery를 이용한 test',
      '모바일 기기를 지원하는 반응형 웹 구현',
    ],
  },
  shoppingMall: {
    id: 'shoppingMall',
    title: 'Shopping Mall',
    summary: '쇼핑몰 프로젝트',
    type: '개인프로젝트',
    feature: '특징',
    siteLink: '',
    docLink: 'https://www.craft.do/s/MpbDWC9Bn6ZRSh',
    ghLink: 'https://github.com/Conradmaker/shopping-mall-project',
    // thumbnail: 'https://i.ibb.co/3fCQG2j/2021-06-28-4-49-37.png',
    thumbnail: 'https://i.ibb.co/tB9JBqp/2021-07-12-2-06-19.png',
    shares: '100%',
    gif: '움짤',
    stack: {
      front: ['typeScript', 'react', 'redux', 'styledComponents'],
      back: ['javaScript', 'express', 'jest', 'mongoDb'],
    },
    desc: [
      'react + redux + ant-design을 사용한 프로젝트',
      'redux 코드 간결화를 위해 type-safe-actions 적용',
      '간단한 프로젝트를 빠르게 구현하기 위해 MongoDB를 사용하여 DB서버 구성',
      'typescript + express + mongoose를 이용한 백앤드 서버 구현',
      'jest를 이용한 Unit test 및 E2E 테스트 커버리지 90% 이상',
    ],
  },

  starbucks: {
    id: 'starbucks',
    title: 'Starbucks',
    summary: '스타벅스 웹페이지 스타일 클론코딩',
    type: '개인프로젝트',
    feature: '특징',
    siteLink: 'https://conrad-starbucks-clone.netlify.app',
    docLink: '',
    ghLink: 'https://github.com/Conradmaker/starbucks-clone',
    // thumbnail: 'https://i.ibb.co/3fCQG2j/2021-06-28-4-49-37.png',
    thumbnail: 'https://i.ibb.co/SrM35Td/2021-07-11-6-49-55.png',
    shares: '100%',
    gif: '움짤',
    stack: {
      front: ['javaScript'],
      back: [],
    },
    desc: ['HTML5 + CSS3 + JavaScript를 이용', 'gsap을 이용한 스크롤 트리거 애니메이션'],
  },
  // vueMovie: {
  //   id: 'vue-movie-app',
  //   title: '영화검색서비스',
  //   summary: 'vue.js와 imdb로 구현한 영화검색서비스',
  //   type: '개인프로젝트',
  //   feature: '특징',
  //   siteLink: 'https://vue-movie-app-cad18.firebaseapp.com/',
  //   docLink: 'https://www.craft.do/s/0twrmWuA9nnu4s',
  //   ghLink: 'https://github.com/Conradmaker/vue-movie-app',
  //   thumbnail: 'https://i.ibb.co/NKk4x2W/2021-07-02-11-59-40.png',
  //   shares: '100%',
  //   gif: '움짤',
  //   stack: {
  //     front: ['javaScript', 'vueJs', 'vuex'],
  //   },
  //   desc: [],
  // },
  // vueTodoApp: {
  //   id: 'vue-todo-app',
  //   title: '영화검색서비스',
  //   summary: 'vue.js로 구현한 투두앱',
  //   type: '개인프로젝트',
  //   feature: '특징',
  //   siteLink: 'https://wongeun-vue-todo.netlify.app',
  //   docLink: 'https://www.craft.do/s/zRPdSwGlK4UHvF',
  //   ghLink: 'https://github.com/Conradmaker/vue-todo-app',
  //   thumbnail: 'https://i.ibb.co/pQm1rbV/2021-07-03-12-03-10.png',
  //   shares: '100%',
  //   gif: '움짤',
  //   stack: {
  //     front: ['javaScript', 'vueJs', 'sass'],
  //   },
  //   desc: [],
  // },
};
export default projectData;
