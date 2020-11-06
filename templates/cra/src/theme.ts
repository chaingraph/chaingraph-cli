// example base theme from @theme-ui/presets
export const theme = {
  breakpoints: ['30em', '40em', '48em', '52em', '64em'],
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  fonts: {
    body: '"Gothic A1" , Roboto, "Helvetica Neue", sans-serif',
    heading: 'Lato',
    numbers: 'Poppins',
    subheads: 'Muli',
    monospace: 'Menlo, monospace',
  },
  fontSizes: [12, 14, 16, 18, 20, 24, 32, 48, 64, 96],
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },
  colors: {
    text: '#5D5D5D',
    background: '#FFFFFF',
    primary: '#7E479B',
    secondary: '#4E179B',
    muted: '#F7F8FC',
    dark: '#272C33',
  },
  text: {
    heading: {
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
    },
  },
  styles: {
    root: {
      fontFamily: 'body',
      lineHeight: 'body',
      fontWeight: 'body',
    },

    h1: {
      variant: 'text.heading',
      fontSize: 5,
      textAlign: 'center',
    },
    h2: {
      variant: 'text.heading',
      fontSize: 4,
    },
    h3: {
      variant: 'text.subheading',
      fontSize: 3,
      fontWeight: 300,
    },
    h4: {
      variant: 'text.heading',
      fontSize: 2,
    },
    h5: {
      variant: 'text.heading',
      fontSize: 1,
    },
    h6: {
      variant: 'text.heading',
      fontSize: 0,
    },
    pre: {
      backgroundColor: 'muted',
      color: 'secondary',
      fontFamily: 'monospace',
      overflowX: 'auto',
      code: {
        color: 'inherit',
      },
    },
    code: {
      fontFamily: 'monospace',
      fontSize: 'inherit',
    },
    table: {
      width: '100%',
      borderCollapse: 'separate',
      borderSpacing: 0,
    },
    th: {
      textAlign: 'left',
      borderBottomStyle: 'solid',
    },
    td: {
      textAlign: 'left',
      borderBottomStyle: 'solid',
    },
  },
  images: {
    quarter: {
      display: 'block',
      border: 0,
      padding: 0,
      maxWidth: '25%',
      margin: '0 auto',
    },
  },
  links: {
    nav: {
      px: 2,
      py: 2,
      color: 'text',
      transition: 'all 0.5s',
      '&:hover': {
        transform: 'scale(1.2)',
        color: 'background',
      },
    },
  },
  buttons: {
    primary: {
      color: 'background',
      bg: 'primary',
      '&:hover': {
        bg: 'text',
      },
    },
    secondary: {
      color: 'primary',
      bg: 'rgba(255, 255, 255, 0.6)',
      fontFamily: 'subheads',
      textAlign: 'center',
      fontSize: [0, 1, 2, 3],
      px: [1, 2, 3, 4],
      py: [0],
    },
    menu: {
      color: 'background',
      cursor: 'pointer',
    },
    close: {
      color: 'background',
      cursor: 'pointer',
    },
  },
  container: {
    linearBG: {
      background: 'linear-gradient(180deg, rgba(126,71,155,1) 0%, rgba(126,71,155,1) 70%, rgba(255,255,255,1) 70%)',
    },
  },
}
