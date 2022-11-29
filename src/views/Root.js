import React from 'react';
import { theme } from 'assets/styles/theme';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'assets/styles/GlobalStyle';
import MainTemplate from 'components/templates/MainTemplate';
import { Wrapper } from './Root.styles';
import Dashboard from './Dashboard';

const Root = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <MainTemplate>
        <Wrapper>
          <Dashboard></Dashboard>
        </Wrapper>
      </MainTemplate>
    </ThemeProvider>
  );
};

export default Root;
