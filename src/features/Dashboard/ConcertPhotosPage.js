import React, { useState, useEffect } from 'react';
import {
  Image, 
  Segment, 
  Header, 
  Divider, 
  Grid, 
  Button, 
  Card
} from 'semantic-ui-react';
import CropperInput from './components/CropperInput';
import DropzoneInput from './components/DropzoneInput';

const ConcertPhotosPage = ({history}) => {
  const [files, setFiles] = useState([]);
  const [image, setImage] = useState(null);

  useEffect(() => {
      return () => {
          files.forEach(file => URL.revokeObjectURL(file.preview))
      }
  }, [files]);

  const handleCancelCrop = () => {
    setFiles([]);
    setImage(null);
  };

  console.log(image);
  return (
    <main className="cd_main__wrap">
      <Segment>
          <Header dividing size='large' content='Upload Pictures for ConcertName' />
          <Grid>
              <Grid.Row />
              <Grid.Column width={4}>
                <Header color='teal' sub content='Step 1 - Add Photo'/>
                <DropzoneInput setFiles={setFiles} />
              </Grid.Column>
              <Grid.Column width={1} />
              <Grid.Column width={4}>
                  <Header sub color='teal' content='Step 2 - Resize image' />
                  {files.length > 0 &&
                    <CropperInput setImage={setImage} imagePreview={files[0].preview} />}
              </Grid.Column>
              <Grid.Column width={1} />
              <Grid.Column width={4}>
                  <Header sub color='teal' content='Step 3 - Preview and Upload' />
                  {files.length > 0 && (
                    <>
                      <div 
                        className='img-preview'
                        style={{minHeight: '200px', minWidth: '200px', overflow: 'hidden'}}
                      />
                      <Button.Group>
                        <Button 
                          // onClick={handleUploadImage}
                          style={{width: '100px'}}
                          positive
                          icon='check'
                        />
                        <Button 
                          onClick={handleCancelCrop}
                          style={{width: '100px'}}
                          icon='close'
                        />
                      </Button.Group>
                    </>
                    )}
              </Grid.Column>

          </Grid>

          <Divider/>
          <Header sub color='teal' content='All Photos'/>

          <Card.Group itemsPerRow={5}>
            <Card>
                <Image src='https://randomuser.me/api/portraits/men/20.jpg'/>
                <Button positive>Main Photo</Button>
            </Card>

            <Card >
                <Image
                    src='https://randomuser.me/api/portraits/men/20.jpg'
                />
                <div className='ui two buttons'>
                    <Button basic color='green'>Main</Button>
                    <Button basic icon='trash' color='red' />
                </div>
            </Card>
          </Card.Group>
          <Button type="button" onClick={() => history.push('/dashboard/concerts')} floated="right">Skip</Button>
          <div style={{clear:'both'}}></div>
      </Segment>
    </main>
  );
}

export default ConcertPhotosPage;