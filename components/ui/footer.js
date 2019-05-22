import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react'
export default () => {
  return (
    <div className="container">
      <footer
        className="page-footer font-small blue pt-4"
        style={{ background: '#05172A', font: 'small' }}
      >
        <div className="container-fluid text-center text-md-left">
          <div className="row" style={{ color: 'white' }}>
            <div className="col-md-6 mt-md-0 mt-3">
              <h5 className="text-uppercase">ABOUT ME</h5>
              <p>
                Here you can use rows and columns to organize your footer
                content.
              </p>
            </div>

            <hr className="clearfix w-100 d-md-none pb-3" />
            <div className="row">
              <div className="flex-center">
                <a href="#">
                  <img src="/static/img/fb_logo.png" width="80" height="60" />
                </a>
                <a href="#">
                  <img
                    src="/static/img/gmail_logo.png"
                    width="70"
                    height="60"
                  />
                </a>
                <a href="#">
                  <img src="/static/img/yt_logo.png" width="130" height="130" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-copyright text-center py-3">
          © 2018 Copyright:
          <a href="https://mdbootstrap.com/education/bootstrap/">
            {' '}
            MDBootstrap.com
          </a>
        </div>
      </footer>
    </div>
  )
}
