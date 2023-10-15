import React, { ReactElement } from 'react';
import './PageContent.scss';

interface PageContentProps {
    children: ReactElement | ReactElement[];
}

const PageContent: React.FC<PageContentProps> = ({ children }) => {
    return <div className="page-content">{children}</div>;
};

export default PageContent;
