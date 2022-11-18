import { useState } from 'react';
import { tokens } from '@/theme/theme';
import styled from '@emotion/styled';
import { Box, useTheme } from '@mui/material';
import { TopBar, SidebarMenu } from '../common';

interface IProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: IProps) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <LayoutStyled colors={colors} close={isCollapsed}>
      <SidebarMenu isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />
      <TopBar />
      <Box component="main">{children}</Box>
    </LayoutStyled>
  );
};

const LayoutStyled = styled(Box)<{ colors: any; close: boolean }>`
  display: grid;
  grid-template-areas: 'sidebar topbar' 'sidebar main';
  grid-template-columns: auto ${(props) =>
      props.close ? 'calc(100% - 80px)' : 'calc(100% - 260px)'};
  grid-template-rows: 60px 1fr;
  height: 100vh;
  width: 100%;
  background-color: ${(props) => props.colors.general.components};
  transition: all 0.3s ease;

  aside {
    grid-area: sidebar;
  }
  header {
    grid-area: topbar;
  }
  main {
    grid-area: main;
    flex: 1;
    width: ${(props) => (props.close ? '100%' : 'auto')};
  }
`;
