import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;

    colors: {
      backgroudrgba: string;
      backgroundInput: string;
      backgroundButtton: string;
      backgroundMenu: string;
      backgroundButtonMenu: string;
      boxShadowEstablishment: string;

      text: string;
      textButtton: string;

      danger: string;
      warning: string;
      sucess: string;
    };
  }
}
