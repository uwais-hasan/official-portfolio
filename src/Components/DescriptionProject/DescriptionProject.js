import React from 'react';

import './DescriptionProject.css'
const DescriptionProject = ({des,nameIcon}) => {
    return (
        <div className='descriptionProject'>
            {nameIcon}
          <p>{des}</p>

        </div>
    );
};

export default DescriptionProject;