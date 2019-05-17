import React from 'react'
import { Card, StyledBody } from 'baseui/card'
import { Client as Styletron } from 'styletron-engine-atomic'
import { Provider as StyletronProvider } from 'styletron-react'
import { LightTheme, BaseProvider, styled } from 'baseui'
import { StatefulInput } from 'baseui/input'
import 'bootstrap/dist/css/bootstrap.min.css'

const CardContent = styled('a', {
  display: 'flex',
  marginTop: '24px',
  marginBottom: '24px',
  fontSize: '1.313em',
  lineHeight: '1.5em'
})
export default () => (
  <div className="container">
    <div className="row">
      <div className="col-4">
        <a href="#" class="card">
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
          </div>
          <img
            src="https://www.datocms-assets.com/2885/1542060101-nomadshare-imglogo-w-stack-graphic1200x630.png?fit=max&fm=webp&q=80&w=2000"
            class="card-img-bottom"
            alt="..."
          />
        </a>
      </div>
      <div className="col-4">
        <a href="#" class="card">
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
          </div>
          <img
            src="https://www.datocms-assets.com/2885/1542060101-nomadshare-imglogo-w-stack-graphic1200x630.png?fit=max&fm=webp&q=80&w=2000"
            class="card-img-bottom"
            alt="..."
          />
        </a>
      </div>
      <div className="col-4">
        <a href="#" class="card">
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
          </div>
          <img
            src="https://www.datocms-assets.com/2885/1542060101-nomadshare-imglogo-w-stack-graphic1200x630.png?fit=max&fm=webp&q=80&w=2000"
            class="card-img-bottom"
            alt="..."
          />
        </a>
      </div>
    </div>
  </div>
)