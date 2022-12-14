import React from 'react';
import BeforeLink from 'next/link'
import { withRouter } from 'next/router';

interface LinkFunctionType {
    scroll?: any
    router: any
    href: any
    className?: any
    children?: any
    onClick?: any
}
const Link = ({ children, className, router, href, scroll, ...props }: LinkFunctionType) => {
    return <BeforeLink href={href}  {...{ scroll }} ><a className={className} {...props}>{children}</a></BeforeLink>;
};

export default withRouter(Link);