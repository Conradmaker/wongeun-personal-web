const size = {
  mobile: '770px',
  tablet: '1024px',
  desktop: '1700px',
};

export type colorTheme = {
  primary: {
    1: string;
  };
  background: {
    initial: string;
    lighter: string;
    darker: string;
  };
  textColor: {
    initial: string;
    lighter: string;
    darker: string;
    warm: string;
  };
  layerColor: {
    imageLayer: string;
    modalLayer: string;
  };
  grayScale: {
    1: string;
    2: string;
    3: string;
    4: string;
  };
  viewPortSize: {
    mobile: string;
    tablet: string;
    desktop: string;
  };
};

export interface ThemeType {
  dark: colorTheme;
  light: colorTheme;
}

const commonTheme = {
  primary: {
    1: '#39549A',
  },
  viewPortSize: {
    mobile: `(max-width: ${size.mobile})`,
    tablet: `(max-width: ${size.tablet})`,
    desktop: `(max-width: ${size.desktop})`,
  },
};
const theme: ThemeType = {
  dark: {
    ...commonTheme,
    background: {
      initial: '#1F2029',
      lighter: '#2C2E3A',
      darker: '',
    },
    textColor: {
      initial: '#fff',
      lighter: '#E1DFDC',
      darker: '#2B2B2B',
      warm: '#561D1D',
    },
    layerColor: {
      imageLayer: 'rgba(0,0,0,.3)',
      modalLayer: 'rgba(115,115,115,.4)',
    },
    grayScale: {
      1: '#EFEFEF',
      2: '#E1DFDC',
      3: '#484848',
      4: '#484848',
    },
  },
  light: {
    ...commonTheme,
    background: {
      initial: '#F1F1F1',
      lighter: '#F6F6F6',
      darker: '',
    },
    textColor: {
      initial: '#2B2B2B',
      lighter: '#AAAAAA',
      darker: '#FCFCFC',
      warm: '#561D1D',
    },
    layerColor: {
      imageLayer: 'rgba(0,0,0,.3)',
      modalLayer: 'rgba(30,30,30,.7)',
    },
    grayScale: {
      1: '#484848',
      2: '#C4C4C4',
      3: '#E1DFDC',
      4: '#EFEFEF',
    },
  },
};

export default theme;
