import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import MDXContainer from '../components/MDXContainer';
import Table from '../components/Table';
import SEO from '../components/seo';

const basicDocPageTemplate = ({ data }) => {
  const { mdx } = data;
  const { frontmatter, body } = mdx;

  return (
    <>
      <SEO title={frontmatter.title} />
      <h1>{frontmatter.title}</h1>
      <MDXContainer>{body}</MDXContainer>
      <Table />
    </>
  );
};

basicDocPageTemplate.propTypes = {
  data: PropTypes.object.isRequired,
};

export const pageQuery = graphql`
  query($slug: String!, $nav: String) {
    mdx(fields: { slug: { eq: $slug } }) {
      body
      frontmatter {
        title
      }
    }
    ...MainLayout_query
  }
`;

export default basicDocPageTemplate;