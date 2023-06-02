import { styled, Card, CardContent } from '@mui/material';
import { NavLink } from 'react-router-dom';

export const StyledWorkshopLink = styled(NavLink)`
  text-decoration: none;
  display: block;
  color: initial;

  &:visited {
    text-decoration: none;
    color: initial;
  }
`;

export const StyledCard = styled(Card)`
  background: ${({ theme }) => theme.palette.common.white};
  box-shadow: rgba(155, 148, 148, 0.25) 0px 4px 4px;
  border-radius: 5px;
  border: 1px solid ${({ theme }) => theme.palette.others.borderColor};
`;

export const StyledCardContent = styled(CardContent)`
  display: flex;
  gap: 12px;
  padding: 16px;
`;
