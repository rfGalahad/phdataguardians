import { CameraAlt, CloudUpload, Close } from "@mui/icons-material";
import { Box, Divider, Typography, IconButton } from "@mui/material";

import { Header } from "../Header";
import { FormButtons } from "../../../../components/ui/FormButtons";

import { useUpload } from "../../hooks/useUpload";





export const UploadPicture = ({ handleBack, handleNext }) => {
  
  const {
    image,
    imagePreview,
    dragActive,
    error,
    handleDrag,
    handleDrop,
    handleFileInput,
    removeImage,
    handleSubmit
  } = useUpload(handleNext);

  

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
      {/* Header */}
      <Header title={'Upload Picture'} icon={<CameraAlt sx={{ color: '#053261' }}/>}/>
      
      {/* Upload Picture */}
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        {/* Drag & Drop Zone */}
        {!image ? (
          <Box
            onDragEnter={handleDrag}
            onDragLeave={handleDrag}
            onDragOver={handleDrag}
            onDrop={handleDrop}
            sx={{
              border: dragActive ? '3px dashed #053261' : '2px dashed #ccc',
              borderRadius: 2,
              padding: 4,
              textAlign: 'center',
              backgroundColor: dragActive ? '#f0f7ff' : '#fafafa',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              '&:hover': {
                borderColor: '#053261ff',
                backgroundColor: '#f0f7ff'
              }
            }}
            onClick={() => document.getElementById('file-input').click()}
          >
            <CloudUpload sx={{ fontSize: 60, color: '#053261', mb: 2 }} />
            <Typography variant='h6' color='#053261'>
              Drag and drop images here
            </Typography>
            <Typography variant='body2' color='text.secondary'>
              or click to browse
            </Typography>
            <Typography variant='caption' color='text.secondary' display='block' mt={1}>
              Supported formats: JPG, JPEG, PNG (Max 5MB each)
            </Typography>
            <input
              id="file-input"
              type="file"
              multiple
              accept="image/jpeg,image/jpg,image/png"
              onChange={handleFileInput}
              style={{ display: 'none' }}
            />
          </Box>
          ) : 
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center'
              }}
            >
              <Box sx={{ position: 'relative', }}>
                <Box
                  component={'img'}
                  src={imagePreview}
                  alt={'image name'}
                  style={{
                    width: 'auto',
                    height: '250px',
                    objectFit: 'cover',
                    borderRadius: 5
                  }}
                />
                <IconButton
                  size='small'
                  onClick={(e) => {
                    e.stopPropagation();
                    removeImage();
                  }}
                  sx={{
                    position: 'absolute',
                    top: 5,
                    right: 5 ,
                    backgroundColor: 'rgba(255, 255, 255, 0.9)',
                    '&:hover': {
                      backgroundColor: 'rgba(255, 255, 255, 1)'
                    }
                  }}
                >
                  <Close fontSize='small' />
                </IconButton>
                <Box 
                  sx={{
                    position: 'absolute',
                    bottom: 6,
                    width: '100%',
                    background: 'rgba(33, 33, 33, 0.5)'
                  }}
                  >
                    <Typography variant='subtitle1'>
                      {image.name}
                    </Typography>
                  </Box>
              </Box>
            </Box>
          }

        {/* Error Message */}
        {error && (
          <Typography color='error' variant='body2'>
            {error}
          </Typography>
        )}

        {/* Form Buttons */}
        <FormButtons handleBack={handleBack} handleNext={handleSubmit}  />
      </Box>      
    </Box>
  );
};