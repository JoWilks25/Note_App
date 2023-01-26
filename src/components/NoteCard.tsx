import { Grid, Typography } from "@mui/material";
import Card from './Card';

interface NoteCardProps {
  text: string;
}

const NoteCard = (props: NoteCardProps): React.ReactElement => {
  const { text } = props;
  return (
    <Grid container spacing={0} alignItems="center" justifyContent="center">
      <Card>
        <Grid item xs={12}>
          <Typography align='center' style={{wordWrap: "break-word"}} >{text}</Typography>
        </Grid>
      </Card>
    </Grid>
  );
}

export default NoteCard;