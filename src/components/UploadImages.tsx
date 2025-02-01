/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { IconButton, Box } from '@mui/material';
import { Delete as DeleteIcon } from '@mui/icons-material';
import colors from '../consts/colors';
import { Image } from '../consts/types';

interface Props {
  data: Image[];
  setState: any;
}

const UploadImages: React.FC<Props> = ({ data, setState }) => {
  const convertToBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = error => reject(error);
    });
  };

  const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (!files) return;

    const newImages = await Promise.all(
      Array.from(files).map(async (file, index) => ({
        id: Date.now() + index,
        base64: await convertToBase64(file),
      })),
    );

    setState((prev: any) => ({ ...prev, images: [...prev.images, ...newImages] }));
  };

  const removeImage = (id: number) => {
    setState((prev: any) => ({ ...prev, images: prev.images.filter((img: Image) => img.id !== id) }));
  };

  return (
    <Box sx={{ textAlign: 'center', marginTop: '20px' }}>
      <input type="file" accept="image/*" multiple onChange={handleFileChange} />

      <Box sx={{ display: 'flex', flexWrap: 'wrap', marginTop: '10px' }}>
        {data.map(img => (
          <Box key={img.id} sx={{ position: 'relative', margin: '5px' }}>
            <img src={img.base64} alt="preview" style={{ maxWidth: '100px', borderRadius: '5px' }} />
            <IconButton
              onClick={() => removeImage(img.id)}
              sx={{
                position: 'absolute',
                top: '5px',
                right: '5px',
                background: colors.montana,
                color: 'white',
                height: 25,
                width: 25,
              }}>
              <DeleteIcon fontSize="small" />
            </IconButton>
          </Box>
        ))}
      </Box>
    </Box>
  );
};
export default UploadImages;
