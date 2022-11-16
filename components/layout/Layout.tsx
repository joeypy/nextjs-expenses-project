import { tokens } from '@/theme/theme';
import styled from '@emotion/styled';
import { Box, useTheme } from '@mui/material';
import { TopBar, SidebarMenu } from '../common';

interface IProps {
  children: React.ReactNode;
}

const LayoutStyled = styled(Box)<{ colors: any }>`
  display: grid;
  grid-template-areas: 'sidebar topbar' 'sidebar main';
  grid-template-columns: auto 1fr;
  grid-template-rows: 60px 1fr;
  height: 100vh;
  width: 100vw;
  background-color: ${(props) => props.colors.general.components};

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
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <LayoutStyled colors={colors}>
      <SidebarMenu />
      <TopBar />
      <Box component="main">{children}</Box>
    </LayoutStyled>
  );
};
