import React from 'react'
import './page.scss'

import Loadable from 'react-loadable';
import Loading from '../components/Loading';

const Page = (props) => {
  return (<>
        <div
            dangerouslySetInnerHTML={{ __html: props.html }}
        />
        {props.children}
    </>)
}

export default Loadable({ loader: () =>  import('./test') , loading() { return <Loading/> }});
