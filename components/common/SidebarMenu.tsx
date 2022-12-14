import { tokens } from '@/theme/index';
import { Box, Divider, Tooltip, Typography, useTheme } from '@mui/material';
import styled from '@emotion/styled';
import logoTs from '@/public/logo.png';
import Image from 'next/image';
import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
// Icons
import {
  HomeOutlinedIcon,
  AccountBalanceOutlinedIcon,
  BarChartOutlinedIcon,
  CategoryOutlinedIcon,
  CurrencyExchangeOutlinedIcon,
  DataUsageOutlinedIcon,
  TimelineOutlinedIcon,
  CalendarMonthOutlinedIcon,
  ReceiptLongOutlinedIcon,
  SettingsOutlinedIcon,
} from './Icons';

interface IProps {
  isCollapsed: boolean;
  setIsCollapsed: React.Dispatch<React.SetStateAction<boolean>>;
}

interface IItem {
  active: boolean;
  close?: boolean;
}

interface IMenuTitle {
  title: string;
  colors: any;
  close: boolean;
}

interface ISidebar {
  collapsed?: boolean;
  colors: any;
}

export const SidebarMenu = ({ isCollapsed, setIsCollapsed }: IProps) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const { pathname } = useRouter();

  const handleToggle = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <Sidebar
      component="aside"
      colors={colors}
      collapsed={isCollapsed}
      sx={{ bg: 'sidebar.bg' }}
    >
      <Box mb="25px" mt="15px">
        <Box display="flex" justifyContent="center" alignItems="center">
          <Image
            src={logoTs}
            alt="Logo image"
            style={{ transition: 'all .3s ease' }}
            width={isCollapsed ? 50 : 80}
            onClick={handleToggle}
          />
        </Box>
        <Box textAlign="center">
          <Typography
            variant="h2"
            color={colors.grey[100]}
            fontWeight="bold"
            sx={{
              mt: '10px',
              fontSize: isCollapsed ? '12px' : undefined,
              transition: 'all .3s ease',
            }}
          >
            Finanzas
          </Typography>
          {!isCollapsed && (
            <Typography
              variant="h5"
              color={colors.greenAccent[300]}
              fontWeight="bold"
              sx={{
                mt: '10px',
              }}
            >
              Joseph Bosc??n
            </Typography>
          )}
        </Box>
      </Box>

      <Menu>
        <MenuItem
          title="Dashboard"
          href="/"
          icon={<HomeOutlinedIcon />}
          page={pathname}
          colors={colors}
          close={isCollapsed}
        />
        {/* Datos */}
        <MenuTitle title="Datos" colors={colors} close={isCollapsed} />
        <MenuItem
          title="Cuentas"
          href="/accounts"
          icon={<AccountBalanceOutlinedIcon />}
          page={pathname}
          colors={colors}
          close={isCollapsed}
        />
        <MenuItem
          title="Transacciones"
          href="/transactions"
          icon={<CurrencyExchangeOutlinedIcon />}
          page={pathname}
          colors={colors}
          close={isCollapsed}
        />
        <MenuItem
          title="Categor??as"
          href="/categories"
          icon={<CategoryOutlinedIcon />}
          page={pathname}
          colors={colors}
          close={isCollapsed}
        />

        {/* Gr??ficas */}
        <MenuTitle title="Gr??ficas" colors={colors} close={isCollapsed} />
        <MenuItem
          title="Line Chart"
          href="/chart/line"
          icon={<TimelineOutlinedIcon />}
          page={pathname}
          colors={colors}
          close={isCollapsed}
        />
        <MenuItem
          title="Bar Chart"
          href="/chart/bar"
          icon={<BarChartOutlinedIcon />}
          page={pathname}
          colors={colors}
          close={isCollapsed}
        />
        <MenuItem
          title="Pie Chart"
          href="/chart/pie"
          icon={<DataUsageOutlinedIcon />}
          page={pathname}
          colors={colors}
          close={isCollapsed}
        />

        {/* Pages */}
        <MenuTitle title="P??ginas" colors={colors} close={isCollapsed} />
        <MenuItem
          title="Calendario"
          href="/calendar"
          icon={<CalendarMonthOutlinedIcon />}
          page={pathname}
          colors={colors}
          close={isCollapsed}
        />
        <MenuItem
          title="Reportes"
          href="/reports"
          icon={<ReceiptLongOutlinedIcon />}
          page={pathname}
          colors={colors}
          close={isCollapsed}
        />
        <MenuItem
          title="Configuraciones"
          href="/settings"
          icon={<SettingsOutlinedIcon />}
          page={pathname}
          colors={colors}
          close={isCollapsed}
        />
      </Menu>
    </Sidebar>
  );
};

interface IMenuItem {
  title: string;
  href: string;
  page: string;
  colors: any;
  close: boolean;
  icon: JSX.Element;
}

const MenuItem = ({ title, href, icon, page, colors, close }: IMenuItem) => {
  const isActive = page === href;

  return (
    <Item active={isActive} style={{ color: colors.grey[100] }} close={close}>
      <Link href={href}>
        {close ? (
          <Tooltip title={title} placement="right">
            {icon}
          </Tooltip>
        ) : (
          icon
        )}
        {close ? null : <Typography>{title}</Typography>}
      </Link>
    </Item>
  );
};

// MenuTitle
const MenuTitle = ({ title, colors, close }: IMenuTitle) => {
  return (
    <>
      {close ? (
        <Divider />
      ) : (
        <Typography
          variant="h6"
          color={colors?.grey[300]}
          sx={{ m: '15px 0 5px 0px' }}
        >
          {title}
        </Typography>
      )}
    </>
  );
};

// Sidebar
const Sidebar = styled(Box)<ISidebar>`
  height: 100%;
  background: ${(props) => props.colors.general.bg};
  flex-shrink: 0;
  overflow: hidden;
  padding: ${(props) => (props.collapsed ? '10px' : '1.5rem')};
`;

const Menu = styled(Box)``;

const Item = styled(Box)<IItem>`
  width: 100%;
  padding: ${(props) => (props.close ? '.8rem 0' : '0.5rem 1rem')};
  padding-left: 0;

  a {
    display: flex;
    align-items: center;
    justify-content: ${(props) => (props.close ? 'center' : undefined)};
    gap: 1rem;
    text-decoration: none;

    &:hover p,
    &:hover svg {
      color: #0ebe5d;
    }
  }

  p {
    font-size: 1rem;
    font-weight: 600;
    color: ${(props) => (props.active ? '#0ebe5d' : '#fff')};
    transition: color 0.3s ease;
  }

  svg {
    font-size: 1.6rem;
    color: ${(props) => (props.active ? '#0ebe5d' : '#fff')};
    transition: color 0.3s ease;
  }
`;
