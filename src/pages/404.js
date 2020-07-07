import React from 'react'
import Layout from '../components/Layout'
import './404.scss'

const NotFoundPage = ({ error, errorText }) => (<Layout>
  <div className='not-found'>
    <div className='oops'><span aria-label='oops' role='img'>😱</span> Oooops!</div>
      <p className='error-title'>
        <strong>404 </strong>
        Page Not Found
      </p>
      <div>
        It seems you found a broken link.
        Sorry about that.
        <br />
        Do not hesitate to report this page <span aria-label='grin' role='img'>😁</span>.
      </div>
    </div>
  </Layout>
)

export default NotFoundPage
