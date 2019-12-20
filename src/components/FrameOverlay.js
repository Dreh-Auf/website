import React from 'react';
import Subheadline from 'components/essentials/Subheadline';
import TextBlock from 'components/essentials/TextBlock';

const FrameItem = ({ caption, text, button }) => {

  return(
    <div className="carousel_overlay">
      <Subheadline text={caption}/>
      <div className='u-margin-top-bottom--medium'>
        <TextBlock>
          <p>{text}</p>
        </TextBlock>
      </div>
      {button}
    </div>
  );

};

export default FrameItem;