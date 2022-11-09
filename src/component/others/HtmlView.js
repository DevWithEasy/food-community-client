import React from 'react';

const HtmlView = ({html}) => {
    return <div dangerouslySetInnerHTML={{__html: html}} />
};

export default HtmlView;