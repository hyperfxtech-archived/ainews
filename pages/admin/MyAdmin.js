import React, { Component } from 'react'
import content from '../../content/Admin.md'
import '../../static/style/pageblog.css'

export default class MyAdmin extends Component {
  render() {
    let {
      html,
      attributes: { title, cats }
    } = content
    return (
      <article className="container">
        <div className="title">
          <a align="center">
            <div>
              <h1>{title}</h1>
            </div>
            <div>
              <div
                className="content"
                dangerouslySetInnerHTML={{ __html: html }}
              />
            </div>
          </a>
        </div>
        <ul>
          {cats.map((cat, k) => (
            <li key={k}>
              <h3 className="chapper">{cat.name}</h3>
              <p>{cat.description}</p>
              <hr />
            </li>
          ))}
        </ul>
        <br />
      </article>
    )
  }
}
