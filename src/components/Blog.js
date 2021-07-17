import '../index.css';
import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Switch, Route, useRouteMatch, useParams, useLocation, Link} from "react-router-dom";


// Bootstrap
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

// Child Components
import MainNavbar from './MainNavbar';
import Header from './Header';
import Placeholder from './files/placeholder.png';
import BlogPost from './BlogPost'
import Blogs from './Blogs';

// Icons
import { GithubFill, LinkedInV1Fill } from 'akar-icons';

const BlogWrapper = () => {
  /* Verifying if the user is viewing the blog landing page, or a specific blog
  and redirecting to components accordingly. */
  let { path } = useRouteMatch();
  let location  = useLocation();
  const blogId = location.pathname.split('/')[2]

  const BlogRedirect = () => {
    return (
      <Switch>
        <Route path={`${path}/:blogId`}>
          <BlogPost/>
        </Route>
      </Switch>

    );
  }

  return (
    <React.Fragment>
          {blogId ? <BlogRedirect/>:<BlogLanding/>}
    </React.Fragment>
  );
}

const FeaturedBlog = (props) => {
  // Preview of the featured blog.
  let { path } = useRouteMatch();
  const [height, setHeight] = useState('')
  useEffect(() => {
    const titleHeight = document.getElementById("title").clientHeight
    setHeight(titleHeight)
  })
  return (
    <React.Fragment>
        <div className="featured-blog-post">
            <Row>
                <Col md={6} xs={12}>
                  <a href={props.blog && `#${path}/${props.blog.id}`}>
                    <h2 id="title"> {props.blog.title}</h2>
                    <img src={props.blog.image ? props.blog.image:Placeholder} class="featured-blog-image"></img>
                  </a>
                </Col>
                <Col md={5} xs={12}>
                  <Row className="featured-blog-content" style={{paddingTop:`${height}px`}}>
                    <div className="featured-blog-body">
                      <p>{props.blog.body[0].slice(0, 300)}...</p>
                    </div>
                    <div className="featured-blog-meta">
                      <Row>
                        <p><strong>Haider Zaidi</strong></p>
                        <p> July 16</p>
                      </Row>
                    </div>
                  </Row>
                </Col>
            </Row>
        </div>
    </React.Fragment>
  );
}

const FeaturedBlogSmall = (props) => {
  let { path } = useRouteMatch();
  return (
    <Col md={6} xs={12}>
      <div className="featured-blog-post" id="small">
          <img src={props.blog.image ? props.blog.image:Placeholder} class="featured-blog-image" id="small"></img>
          <a href={props.blog && `#${path}/${props.blog.id}`}>
            <h3>{props.blog.title}</h3>
          </a>
            <Row className="featured-blog-content" id="small">
              <div className="featured-blog-body" id="small">
                <p>{`${props.blog.body[0].slice(0, 300)}...`}</p>
                  <div className="featured-blog-meta">
                    <Row>
                      <p><strong>{props.blog.author}</strong></p>
                      <p> {props.blog.postDate}</p>
                    </Row>
                  </div>
              </div>
            </Row>
          </div>
      </Col>
  )
}

const BlogLanding = (props) => {
  // Landing page for the blog, returning the featured blog.
  const [blogs, setBlogs] = useState([])
  const [blogStatus, setBlogStatus] = useState(false)
  useEffect(() => {
    if(blogs.length == 0) {
      for (const [blogId, blog] of Object.entries(Blogs)) {
        console.log(blogId)
        blogs.push(blog)
        setBlogs(blogs)
      }
    }
    setBlogStatus(true)
  }, [blogs])
  console.log(blogs)
  return (
    <React.Fragment>
      <MainNavbar/>
      <Header
        title="Blog."
        body="Some of my thoughts; whether it on be on technology, my projects, or the world."
        />
      <Row className="blog-posts-wrapper">
        <Col xs={10}>
          {blogStatus && <FeaturedBlog blog={blogs[0]}/>}
          <Row>
            {blogStatus && <FeaturedBlogSmall blog={blogs[1]}/>}
            {blogStatus && <FeaturedBlogSmall blog={blogs[2]}/>}
          </Row>
        </Col>
      </Row>

    </React.Fragment>
  );
}

export default BlogWrapper;
