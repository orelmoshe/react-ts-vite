import React from 'react';
import { styled } from '@mui/material/styles';
import MuiButton from '@mui/material/Button';
import MuiTextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';

const TextFieldWrapper = styled('div')({
  width: '100%',
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'flex-start',
  alignItems: 'center',
});

const TextField = styled(MuiTextField)({
  flex: 1,
  margin: 5,
  '& label': {
    transformOrigin: 'right !important',
    left: 'inherit !important',
    right: '5px !important',
    fontSize: 12,
    color: '#807D7B',
    fontWeight: 400,
    overflow: 'unset',
  },
});

const Button = styled(MuiButton)({
  '& .MuiButton-endIcon': {
    marginLeft: 0,
    marginRight: 5,
  },
});

interface Props {
  data: any[];
  setState: any;
  section: string;
}
const TextFieldList: React.FC<Props> = ({ data, setState, section }) => {
  const handleChange = (item: any) => (event: React.ChangeEvent<HTMLInputElement>) => {
    const updatedItem = { ...item, [event.target.name]: event.target.value };
    setState((prev: any) => ({
      ...prev,
      [section]: prev?.[section]?.map((row: any) => (row.id === item.id ? updatedItem : row)),
    }));
  };

  const addNewRow = () => {
    setState((prev: any) => ({
      ...prev,
      [section]: [...prev?.[section], { id: prev[section].length + 1, fieldName: '', value: '' }],
    }));
  };

  const deleteRow = (id: number) => () => {
    setState((prev: any) => ({
      ...prev,
      [section]: prev?.[section]?.filter((item: any) => item.id !== id),
    }));
  };
  return (
    <>
      {data.map(item => (
        <TextFieldWrapper key={item.id} sx={{ alignItems: 'flex-end' }}>
          <TextField
            label="תיאור"
            name="fieldName"
            value={item.fieldName}
            onChange={handleChange(item)}
            fullWidth
            multiline
            maxRows={4}
            variant="standard"
          />
          <TextField
            label="ערך"
            name="value"
            value={item.value}
            onChange={handleChange(item)}
            fullWidth
            multiline
            maxRows={4}
            variant="standard"
          />
          <IconButton aria-label="delete" size="large" onClick={deleteRow(item.id)} sx={{ padding: 0 }}>
            <DeleteIcon />
          </IconButton>
        </TextFieldWrapper>
      ))}
      <TextFieldWrapper sx={{ marginTop: 2 }}>
        <Button variant="outlined" endIcon={<AddIcon />} onClick={addNewRow}>
          הוסף שורה חדשה
        </Button>
      </TextFieldWrapper>
    </>
  );
};

export default TextFieldList;
