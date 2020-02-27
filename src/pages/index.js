import React from "react";
import { Layout } from "../components/Layout";
import { Link, graphql } from "gatsby";
import Dump from "../components/Dump";

export default ({ data }) => {
    console.log(data);
    return (
        <div>
            <Layout>
                {/* <Dump date={data} /> */}
                {data.allMdx.nodes.map(({ frontmatter, excerpt, fields }) => (
                    <div>
                        <Link to={fields.slug}>
                            <h3>{frontmatter.title}</h3>
                        </Link>

                        <p>{excerpt}</p>
                    </div>
                ))}
            </Layout>
            {/* <p>{data}</p> */}
            hello
        </div>
    );
};

export const query = graphql`
    query SITE_INDEX_QUERY {
        allMdx {
            nodes {
                frontmatter {
                    date
                    title
                }
                excerpt(pruneLength: 150)
                fields {
                    slug
                }
            }
        }
    }
`;

// {data.allMdx.nodes.map(({ frontmatter }) => (
//     <>
//         <h1>{frontmatter.title}</h1>
//         <p>{frontmatter.date}</p>
//     </>
// ))}
