import { tokens } from '@/theme/index';
import { Box, Divider, Tooltip, Typography, useTheme } from '@mui/material';
import styled from '@emotion/styled';
import logoTs from '@/public/logo.png';
import Image from 'next/image';
import { useState } from 'react';
import Link from 'next/link';
// Icons
import {
  HomeOutlinedIcon,
  PeopleOutlineOutlinedIcon,
  BarChartOutlinedIcon,
  CategoryOutlinedIcon,
  CurrencyExchangeOutlinedIcon,
  DataUsageOutlinedIcon,
  TimelineOutlinedIcon,
  CalendarMonthOutlinedIcon,
} from './Icons';

interface ISidebar {
  collapsed?: boolean;
}

export const SidebarMenu = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState('Dashboard');

  const handleToggle = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <Sidebar component="aside" collapsed={isCollapsed}>
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
              color={colors.greenAccent[500]}
              fontWeight="bold"
              sx={{
                mt: '10px',
              }}
            >
              Joseph Boscán
            </Typography>
          )}
        </Box>
      </Box>

      <Menu>
        <MenuItem
          title="Dashboard"
          href="/"
          icon={<HomeOutlinedIcon />}
          selected={selected}
          setSelected={setSelected}
          colors={colors}
          close={isCollapsed}
        />
        {/* Datos */}
        <MenuTitle title="Datos" color={colors} close={isCollapsed} />
        <MenuItem
          title="Cuentas"
          href="/accounts"
          icon={<PeopleOutlineOutlinedIcon />}
          selected={selected}
          setSelected={setSelected}
          colors={colors}
          close={isCollapsed}
        />
        <MenuItem
          title="Transacciones"
          href="/transactions"
          icon={<CurrencyExchangeOutlinedIcon />}
          selected={selected}
          setSelected={setSelected}
          colors={colors}
          close={isCollapsed}
        />
        <MenuItem
          title="Categorías"
          href="/categories"
          icon={<CategoryOutlinedIcon />}
          selected={selected}
          setSelected={setSelected}
          colors={colors}
          close={isCollapsed}
        />

        {/* Pages */}
        <MenuTitle title="Páginas" color={colors} close={isCollapsed} />
        <MenuItem
          title="Calendario"
          href="/calendar"
          icon={<CalendarMonthOutlinedIcon />}
          selected={selected}
          setSelected={setSelected}
          colors={colors}
          close={isCollapsed}
        />

        {/* Gráficas */}
        <MenuTitle title="Gráficas" color={colors} close={isCollapsed} />
        <MenuItem
          title="Line Chart"
          href="/chart/line"
          icon={<TimelineOutlinedIcon />}
          selected={selected}
          setSelected={setSelected}
          colors={colors}
          close={isCollapsed}
        />
        <MenuItem
          title="Bar Chart"
          href="/chart/bar"
          icon={<BarChartOutlinedIcon />}
          selected={selected}
          setSelected={setSelected}
          colors={colors}
          close={isCollapsed}
        />
        <MenuItem
          title="Pie Chart"
          href="/chart/pie"
          icon={<DataUsageOutlinedIcon />}
          selected={selected}
          setSelected={setSelected}
          colors={colors}
          close={isCollapsed}
        />
      </Menu>
    </Sidebar>
  );
};

const MenuItem = ({
  title,
  href,
  icon,
  selected,
  setSelected,
  colors,
  close,
}: any) => {
  return (
    <Item
      active={selected === title}
      style={{ color: colors.grey[100] }}
      onClick={() => setSelected(title)}
      close={close}
    >
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

const MenuTitle = ({ title, colors, close }: any) => {
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

const Sidebar = styled(Box)<ISidebar>`
  height: 100%;
  width: ${(props) => (props.collapsed ? '70px' : '250px')};
  background-color: #2f4050;
  flex-shrink: 0;
  overflow: hidden;
  transition: all 0.3s ease;
`;

const Menu = styled(Box)`
  width: 80%;
  margin: auto;
`;

const Item = styled(Box)<{ active: boolean; close?: boolean }>`
  width: 100%;
  padding: ${(props) => (props.close ? '.8rem' : '0.5rem 1rem')};

  a {
    display: flex;
    align-items: center;
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