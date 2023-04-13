import React from 'react'
import PropTypes from 'prop-types'
import Page from '../../templates/page'
import Newsfeed from '../../components/Newsfeed'
import './news.scss'

const News = props => {
    const pageDate = props.frontmatter.date
        ? new Date(props.frontmatter.date)
        : null

    return (
        <div className='newspage'>
            <div className='body'>
                <div className='newsarticle'>
                    <img alt='' src={props.frontmatter.cover_wide} />
                    <div className='article-text'>
                        <h1> {props.frontmatter.title} </h1>
                        <p className='ingress'> {props.frontmatter.ingress} </p>
                        <Page
                            {...props}
                            footer={
                                <div className='signature'>
                                    THS ARMADA <br />
                                    {pageDate && (
                                        <small>
                                            <time key={pageDate.toISOString()}>
                                                {pageDate.toDateString()}
                                            </time>
                                        </small>
                                    )}
                                </div>
                            }
                        ></Page>
                        <Newsfeed current={props.frontmatter.slug} />
                    </div>
                </div>
            </div>
        </div>
    )
}

News.propTypes = {
    frontmatter: PropTypes.shape({
        date: PropTypes.string,
        slug: PropTypes.string,
        title: PropTypes.string,
        header: PropTypes.string,
        layout: PropTypes.string,
        cover_wide: PropTypes.string,
        ingress: PropTypes.string,
    }),
}

export default News
