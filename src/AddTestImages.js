import React, {useCallback } from 'react';
import {useDropzone} from 'react-dropzone';
import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';

const getColor = (props) => {
  if (props.isDragAccept) {
      return '#00e676';
  }
  if (props.isDragReject) {
      return '#ff1744';
  }
  if (props.isDragActive) {
      return '#2196f3';
  }
  return '#eeeeee';
}

const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border-width: 2px;
  border-radius: 2px;
  border-color: ${props => getColor(props)};
  border-style: dashed;
  background-color: #fafafa;
  color: #bdbdbd;
  outline: none;
  transition: border .24s ease-in-out;
`;  

export default function AddTestImages(props) {
    const parentProps = {...props};
    const onDrop = useCallback(acceptedFiles => {
      parentProps.parentCallback(acceptedFiles[0]);

      }, [parentProps]);
    
  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject
  } = useDropzone({accept: 'image/*',onDrop});
  
  return (
    <React.Fragment>
    <Typography variant="h6" gutterBottom>
      Upload images to check
    </Typography>
    <div className="container">
      <Container {...getRootProps({isDragActive, isDragAccept, isDragReject})}>
        <input {...getInputProps()} />
        <p>Drag 'n' drop some files here, or click to select files</p>
        <em>(Only *.jpeg and *.png images will be accepted)</em>
      </Container>
    </div>
    </React.Fragment>
  );
};
