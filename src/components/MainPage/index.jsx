import React from 'react';
import './styles.scss';
const MainPage = ({header, body, footer}) => { 
    return(
        <React.Fragment>
            {header}
            {body}
            {footer}
        </React.Fragment>
    );
};

export default MainPage;