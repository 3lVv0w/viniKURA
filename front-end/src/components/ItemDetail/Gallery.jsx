import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import img1 from 'img/1_1.jpg';

const Container = styled.div`
`;
const LargeImage = styled.img`
  display: block;
  margin: auto;
  height: 25rem;
  width: 25rem;
  object-fit: cover;
`;
const ImageSelector = styled.div`
  display: flex;
  justify-content: center;
`;
const SmallImage = styled.img`
  height: 5rem;
  width: 5rem;
  margin: 20px;
  object-fit: cover;
  outline: ${props => (props.selected ? '10px solid #ccffee' : '')};
`;

class Gallery extends React.Component {
  state = {
    selectedImageIndex: 0,
  };
  selectImage(index) {
    this.setState({
      selectedImageIndex: index,
    });
  }
  render() {
    const { images } = this.props;

    const imageUrls = images.map(image => (
      'https://d6415d7f.ngrok.io'+image
    ));
    console.log(images);
    console.log(imageUrls);
    
    return (
      <Container>
        <LargeImage src={imageUrls[0]} />
        <ImageSelector>
          {imageUrls.map((url, i) => (
            <SmallImage
              key={i}
              src={url}
              small
              onClick={() => this.selectImage(i)}
              selected={(this.state.selectedImageIndex === i)}
            />
          ))}
        </ImageSelector>
      </Container>
    );
  }
}
export default Gallery;

Gallery.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string),
};
Gallery.defaultProps = {
  images: [],
};
