import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/Header'
import './index.css'

import favicon from '../images/favicon.png'


const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Arghya Guha"
      meta={[
        { name: 'description', content: 'Arghya Guha' },
        { name: 'keywords', content: 'This is my webpage' },
      ]}
      link={[
        { rel: 'shortcut icon', type: 'image/png', href: `${favicon}` }
      ]}
    />
    <Header />
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '0px 1.0875rem 1.45rem',
        paddingTop: 0,
      }}
    >
      {children()}
    </div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
