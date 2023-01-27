import { useState } from 'react';
import { useQuery } from '@apollo/client';
import { Button, Container, Grid, Typography } from "@mui/material";
import { GET_NOTES } from './utils/queries';
import NotesList from './components/NotesList';
import AddNote from './components/AddNote';

const App = () => {
  const [showAddNote, setShowAddNote] = useState<boolean>(false)
  const { loading, error, data, refetch } = useQuery(GET_NOTES)
  
  return (
    <Container>
      <Grid container spacing={0} alignItems="center" justifyContent="center">
        <Typography variant="h2" align='center' >
          Notes
        </Typography>
      </Grid>
      <Grid container spacing={0} alignItems="center" justifyContent="center">
        <Button onClick={() => setShowAddNote(!showAddNote)} variant="contained">{showAddNote ? 'X' : 'Add Note'}</Button>
      </Grid>
      {
        showAddNote &&
        <AddNote
          setShowAddNote={setShowAddNote}
          refetch={refetch}
        />
      }
      <NotesList 
        loading={loading} 
        error={error} 
        data={data}
      />
    </Container >
  );
}

export default App;
