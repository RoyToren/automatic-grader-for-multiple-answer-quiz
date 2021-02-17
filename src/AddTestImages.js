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


export default function StyledDropzone(props) {
    const onDrop = useCallback(acceptedFiles => {
        let formData = new FormData();
        formData.append('name', 'John');
        formData.append('password', 'John123');
        formData.append('tests',acceptedFiles[0],acceptedFiles[0].name)
        const options = {
          headers: {
            'Accept': 'application/json',
          },
          method: 'POST',
          body: formData,
        };
        fetch('/api/getimage', options).then(res => res.json()).then(data => {
          alert('yay');
        //   setCurrentImage(data.image);
        });
      }, []);
    
    //   const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})

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