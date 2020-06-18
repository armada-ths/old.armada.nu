import React from 'react'
import './page.scss'

import Loadable from 'react-loadable';
import Loading from '../components/Loading';

const Page = (props) => {
  return (<div className='page-container'>
        {props.header}
        <div
            dangerouslySetInnerHTML={{ __html: props.html }}
        />
        {props.children}
        {props.footer}
    </div>)
}

export default Page;
