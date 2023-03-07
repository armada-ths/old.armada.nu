import React from 'react'
import PropTypes from 'prop-types'
import './page.scss'
import { MDXProvider } from '@mdx-js/react'
import { MDXRenderer } from 'gatsby-plugin-mdx'

const Page = props => {
    return (
        <div className='page-container'>
            {props.header}{' '}
            <MDXProvider>
                <MDXRenderer>{props.body}</MDXRenderer>
            </MDXProvider>
            {props.children}
            {props.footer}
        </div>
    )
}

Page.propTypes = {
    header: PropTypes.element,
    body: PropTypes.string.isRequired,
    children: PropTypes.element,
    footer: PropTypes.element,
}

export default Page
