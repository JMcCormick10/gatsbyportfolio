import * as React from "react"
import Layout from '../Layout/Layout';
import '../pages/pageStyles/ErrorPage.scss';
import Button from '../components/Button/Button';
import { Link } from 'gatsby';




// markup
const NotFoundPage = () => {
  return (
    <Layout>
      <div className="error-page-content">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-8 mx-auto text-center">
              <h1>Looks like you're lost!</h1>
                <p>Click on any of the links above to get to somewhere familiar.</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default NotFoundPage
