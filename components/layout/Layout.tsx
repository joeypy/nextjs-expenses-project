import styled from '@emotion/styled';
import { Box } from '@mui/material';
import { TopBar, SidebarMenu } from '../common';

interface IProps {
  children: React.ReactNode;
}

const LayoutStyled = styled(Box)`
  display: grid;
  grid-template-areas: 'sidebar topbar' 'sidebar main';
  grid-template-columns: auto 1fr;
  grid-template-rows: 60px 1fr;
  height: 100vh;
  width: 100vw;

  aside {
    grid-area: sidebar;
  }
  header {
    grid-area: topbar;
  }
  main {
    grid-area: main;
  }
`;

export const Layout = ({ children }: IProps) => {
  return (
    <LayoutStyled>
      <SidebarMenu />
      <TopBar />
      <Box component="main">{children}</Box>
    </LayoutStyled>
  );
};
