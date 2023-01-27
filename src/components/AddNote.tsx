import { useState } from 'react';
import { Button, Grid, TextField, } from "@mui/material";
import { useMutation } from '@apollo/client';
import { ADD_NOTE } from '../utils/queries';
import Card from './Card';

interface AddNoteProps {
  setShowAddNote: (value: boolean) => void;
  refetch: () => void;
}

const AddNote = (props: AddNoteProps): React.ReactElement => {
  const { setShowAddNote, refetch } = props;
  const [text, setText] = useState<string>('')
  const [addNote, {loading, error}] = useMutation(ADD_NOTE);

  const handleSave: () => Promise<void> = async () => {
    await addNote({
      variables: {
        text
      } 
    })
    if (!loading && !error) {
      await refetch()
      setShowAddNote(false)
    }
  }

  return (
    <Grid container spacing={0} alignItems="center" justifyContent="center">
      <Card>
        <Grid item xs={12}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                id="filled-basic"
                label="Type note here"
                variant="filled"
                onChange={(e) => setText(e.target.value)}
                value={text}
                inputProps={{ maxLength: 180 }}
                multiline
                maxRows={4}
              />
            </Grid>
            <Grid item xs={12}>
              <Button onClick={handleSave} variant="contained" disabled={text.length === 0}>Save</Button>
            </Grid>
          </Grid>
        </Grid>
      </Card>
    </Grid>
  )
}

export default AddNote;