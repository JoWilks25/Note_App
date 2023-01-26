import { Paper } from "@mui/material";
import { styled } from '@mui/material/styles';

const Card = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(1),
  color: theme.palette.text.secondary,
  margin: '16px',
  width: '50%',
  minWidth: '300px',
}));

export default Card;