import { Container, Grid, Typography } from "@mui/material";
import { ApolloError } from '@apollo/client';
import { Note } from '../utils/NoteInterface';
import NoteCard from "./NoteCard";

interface NoteListProps {
  loading: boolean;
  error: ApolloError | undefined;
  data: any;
  // { notes: Note[]};
}

const NotesList = (props: NoteListProps): React.ReactElement => {
  const { loading, error, data } = props;

  return (
    <Container>
      {loading &&
        <Grid container spacing={0} alignItems="center" justifyContent="center">
          <Typography variant="h6" align='center' >
            ...Loading
          </Typography>
        </Grid>
      }
      {error &&
        <Grid container spacing={0} alignItems="center" justifyContent="center">
          <Typography variant="h6" align='center'>
            Error: {error.message}
          </Typography>
        </Grid>
      }
      {!loading && !error &&
        data?.notes?.map((note: Note) => {
          const { id, text } = note;
          return (
            <NoteCard
              key={id}
              text={text}
            />
          )
        })
      }
    </Container >
  )
}

export default NotesList