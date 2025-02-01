import React from 'react';
import { styled } from '@mui/material/styles';
import MuiButton from '@mui/material/Button';
import MuiTextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';

import { TitleText } from '../styledComponents/AppTexts';
import colors from '../consts/colors';
import { AppContext, AppProps } from '../providers/AppProvider';
import TextFieldList from './TextFieldList';
import UploadImages from './UploadImages';

const Container = styled('div')({
  width: '100%',
  maxWidth: 800,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'center',
});

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

const TitleWrapper = styled('div')({
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginTop: 15,
  background: colors.grayLight,
});

const TableTitle = styled('div')({
  flex: 1,
  textAlign: 'start',
  color: colors.black,
  fontSize: 22,
  fontWeight: 600,
});

const Button = styled(MuiButton)({
  '& .MuiButton-endIcon': {
    marginLeft: 0,
    marginRight: 5,
  },
});

const ElectricalInspectionForm = () => {
  const { electricalData, setElectricalData } = React.useContext<AppProps>(AppContext);

  const handleChange = (section: string, item: any) => (event: React.ChangeEvent<HTMLInputElement>) => {
    const updatedItem = { ...item, [event.target.name]: event.target.value };
    setElectricalData((prev: any) => ({
      ...prev,
      [section]: prev?.[section]?.map((row: any) => (row.id === item.id ? updatedItem : row)),
    }));
  };

  const addCircuitBreakerTestResultsNewRow = () => {
    setElectricalData((prev: any) => ({
      ...prev,
      circuitBreakerTestResults: [
        ...prev?.circuitBreakerTestResults,
        {
          id: prev?.circuitBreakerTestResults.length + 1,
          boardNumber: '',
          boardName: '',
          protectiveCircuitBreakerModel: '',
          measuredTime: '',
          measuredCurrent: '',
          status: '',
        },
      ],
    }));
  };

  const addDefectsToBeRepairedNewRow = () => {
    setElectricalData((prev: any) => ({
      ...prev,
      defectsToBeRepaired: [...prev?.defectsToBeRepaired, { id: prev?.defectsToBeRepaired.length + 1, eclipseDetails: '' }],
    }));
  };

  const deleteRow = (section: string, id: number) => () => {
    setElectricalData((prev: any) => ({
      ...prev,
      [section]: prev?.[section]?.filter((item: any) => item.id !== id),
    }));
  };

  return (
    <Container>
      <TitleText>בדיקת חשמל</TitleText>

      <TitleWrapper>
        <TableTitle>פרטי בדיקה</TableTitle>
        <TableTitle />
      </TitleWrapper>
      <TextFieldList data={electricalData.testDetails} setState={setElectricalData} section="testDetails" />

      <TitleWrapper>
        <TableTitle>פרטי המתקן החשמלי</TableTitle>
        <TableTitle />
      </TitleWrapper>
      <TextFieldList data={electricalData.facilityDetails} setState={setElectricalData} section="facilityDetails" />

      <TitleWrapper>
        <TableTitle>תוצאות בדיקת איכות הבדדה</TableTitle>
        <TableTitle />
      </TitleWrapper>
      <TextFieldList
        data={electricalData.insulationQualityTestResults}
        setState={setElectricalData}
        section="insulationQualityTestResults"
      />

      <TitleWrapper>
        <TableTitle>תוצאות בדיקת מפסק מגן</TableTitle>
        <TableTitle />
      </TitleWrapper>
      {electricalData.circuitBreakerTestResults.map((item: any, index: number) => (
        <TextFieldWrapper key={index} sx={{ alignItems: 'flex-end' }}>
          <TextField
            label="מס' לוח"
            name="boardNumber"
            value={item.boardNumber}
            onChange={handleChange('circuitBreakerTestResults', item)}
            fullWidth
            multiline
            maxRows={4}
            variant="standard"
          />
          <TextField
            label="שם הלוח"
            name="boardName"
            value={item.boardName}
            onChange={handleChange('circuitBreakerTestResults', item)}
            fullWidth
            multiline
            maxRows={4}
            variant="standard"
          />
          <TextField
            label="דגם מפסק מגן"
            name="protectiveCircuitBreakerModel"
            value={item.protectiveCircuitBreakerModel}
            onChange={handleChange('circuitBreakerTestResults', item)}
            fullWidth
            multiline
            maxRows={4}
            variant="standard"
          />
          <TextField
            label="t(msec)"
            name="measuredTime"
            value={item.measuredTime}
            onChange={handleChange('circuitBreakerTestResults', item)}
            fullWidth
            multiline
            maxRows={4}
            variant="standard"
          />
          <TextField
            label="I (ma)"
            name="measuredCurrent"
            value={item.measuredCurrent}
            onChange={handleChange('circuitBreakerTestResults', item)}
            fullWidth
            multiline
            maxRows={4}
            variant="standard"
          />
          <TextField
            label="סטטוס"
            name="status"
            value={item.status}
            onChange={handleChange('circuitBreakerTestResults', item)}
            fullWidth
            multiline
            maxRows={4}
            variant="standard"
          />
          <IconButton
            aria-label="delete"
            size="large"
            onClick={deleteRow('circuitBreakerTestResults', item.id)}
            sx={{ padding: 0 }}>
            <DeleteIcon />
          </IconButton>
        </TextFieldWrapper>
      ))}
      <TextFieldWrapper sx={{ marginTop: 2 }}>
        <Button variant="outlined" endIcon={<AddIcon />} onClick={addCircuitBreakerTestResultsNewRow}>
          הוסף שורה חדשה
        </Button>
      </TextFieldWrapper>

      <TitleWrapper>
        <TableTitle>רשימת הליקויים לתיקון</TableTitle>
        <TableTitle />
      </TitleWrapper>
      {electricalData.defectsToBeRepaired.map((item: any, index: number) => (
        <TextFieldWrapper key={index} sx={{ alignItems: 'flex-end' }}>
          <TextField
            label="פרוט הליקוי"
            name="eclipseDetails"
            value={item.eclipseDetails}
            onChange={handleChange('defectsToBeRepaired', item)}
            fullWidth
            multiline
            maxRows={4}
            variant="standard"
          />
          <IconButton aria-label="delete" size="large" onClick={deleteRow('defectsToBeRepaired', item.id)} sx={{ padding: 0 }}>
            <DeleteIcon />
          </IconButton>
        </TextFieldWrapper>
      ))}
      <TextFieldWrapper sx={{ marginTop: 2 }}>
        <Button variant="outlined" endIcon={<AddIcon />} onClick={addDefectsToBeRepairedNewRow}>
          הוסף שורה חדשה
        </Button>
      </TextFieldWrapper>
      <UploadImages data={electricalData.images} setState={setElectricalData} />
    </Container>
  );
};

export default ElectricalInspectionForm;
