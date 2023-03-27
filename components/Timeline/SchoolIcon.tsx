import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faSchool, faStar } from '@fortawesome/free-solid-svg-icons';
import { FC } from 'react';
import React from 'react';

const schoolIcon: FC = () =>  {
    return(
        <React.Fragment>
            <FontAwesomeIcon icon={faSchool}
            />,
    {/* iconStyle: { 
                color: '#fff', 
                background: 'rgb(33, 150, 243)' 
                } */}
        
    </React.Fragment>
    )
  };
 export default schoolIcon