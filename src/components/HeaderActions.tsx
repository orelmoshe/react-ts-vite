import React from 'react';
import { toast } from 'react-toastify';
import { styled } from '@mui/material/styles';
import SaveIcon from '@mui/icons-material/Save';
import UploadFileSharpIcon from '@mui/icons-material/UploadFileSharp';

import { AppContext, AppProps, pages } from '../providers/AppProvider';
import httpRequest from '../services/httpRequest';
import LoadingButton from '../styledComponents/LoadingButton';

const Container = styled('div')({
  marginLeft: 5,
  display: 'flex',
});

const HeaderActions = () => {
  const { thermographicData, setThermographicData, electricalData, setElectricalData, pageSelected } =
    React.useContext<AppProps>(AppContext);

  const [submitLoading, setSubmitLoading] = React.useState(false);
  const [loadFileLoading, setLoadFileLoading] = React.useState(false);

  const fileInputRef = React.useRef<HTMLInputElement>(null);

  const downloadFile = (bufferData: any) => {
    const blob = new Blob([bufferData]);
    const url = window.URL.createObjectURL(blob);
    const a: any = document.createElement('a');
    document.body.appendChild(a);
    a.style = 'display: none';
    a.href = url;
    a.download = `${new Date().getTime()}.docx`;
    a.click();
  };
  const submitHandler = async () => {
    try {
      setSubmitLoading(true);
      let url = '';
      let body = {};
      if (pageSelected === pages.ThermographicInspection) {
        url = '/thermographic/document';
        body = thermographicData;
      }
      if (pageSelected === pages.ElctricalInspection) {
        url = '/electrical/document';
        body = electricalData;
      }
      const { data } = await httpRequest.post(url, body, {
        responseType: 'blob',
      });
      toast.info(`Succeed to submit`, {
        autoClose: 2000,
      });
      downloadFile(data);
    } catch (error) {
      console.error('Error:', error);
      toast.error(`Failed to ${error}`, {
        autoClose: 2000,
      });
    } finally {
      setSubmitLoading(false);
    }
  };
  const onChange = (event: any) => {
    const file = event.target.files[0];
    if (!file) {
      return;
    }
    const reader = new FileReader();
    reader.onload = async () => {
      try {
        const parsedData = JSON.parse(reader.result as string);
        if (pageSelected === pages.ThermographicInspection) {
          setThermographicData(parsedData);
        }
        if (pageSelected === pages.ElctricalInspection) {
          setElectricalData(parsedData);
        }
        setLoadFileLoading(false);
        toast.info(`Succeed to loaded`, {
          autoClose: 2000,
        });
      } catch (error) {
        console.error('Error parsing JSON:', error);
        toast.error(`Failed to ${error}`, {
          autoClose: 2000,
        });
      }
    };
    reader.readAsText(file, 'text/plain;charset=utf-8');
  };

  const loadFileHandler = () => {
    setLoadFileLoading(true);
    fileInputRef.current?.click();
  };
  return (
    <Container>
      <LoadingButton endIcon={<SaveIcon />} onClick={submitHandler} loading={submitLoading} disabled={loadFileLoading}>
        שמור נתונים
      </LoadingButton>
      <LoadingButton
        onClick={loadFileHandler}
        endIcon={<UploadFileSharpIcon />}
        loading={loadFileLoading}
        disabled={submitLoading}>
        <>
          <span>טען נתונים</span>
          <input type="file" ref={fileInputRef} onChange={onChange} accept=".json" hidden />
        </>
      </LoadingButton>
    </Container>
  );
};

export default HeaderActions;
