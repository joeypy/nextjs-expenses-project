import { Box, Button, Typography } from '@mui/material';
import styled from '@emotion/styled';
import { iconMap } from '../common';

interface Props {}

export const ListTransactions = (props: Props) => {
  return (
    <Box>
      <Typography variant="h3" p="1rem 0">
        Historial
      </Typography>
      <List>
        {[8, 6, 5].map((item) => {
          const Icon = iconMap[item];
          return (
            <Item key={item}>
              <Box className="icon">
                <Icon />
              </Box>
              <Box className="description">Categoría</Box>
              <Box className="porcentage">50%</Box>
              <Box className="amount">158 $</Box>
            </Item>
          );
        })}
      </List>
    </Box>
  );
};

const List = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Item = styled(Box)`
  width: 100%;
  padding: 0.5rem 1.5rem;
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.2rem;
  cursor: pointer;
  color: white;
  transition: all 0.3s ease-in-out;
  background: linear-gradient(to right top, #232526ef, #414345ce);

  &:hover {
    background-color: #0e0e0e;
  }

  .icon {
    flex: 0.7;
    display: flex;
    align-items: center;

    svg {
      width: 40px;
      height: 40px;
      font-size: 1rem;
      padding: 5px;
      background-color: #009643;
      border-radius: 10px;
      color: #ffffff;
    }
  }
  .description {
    flex: 6.3;
    text-align: left;
  }
  .porcentage {
    flex: 1;
  }
  .amount {
    flex: 2;
    text-align: right;
  }
`;
