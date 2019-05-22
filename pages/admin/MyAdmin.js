import React, { Component } from 'react'
import content from '../../content/Admin.md'

export default class MyAdmin extends Component {
  render() {
    let {
      html,
      attributes: { title, cats }
    } = content
    return (
      <article style={{ background: '#CCCC' }}>
        <div style={{ background: 'white' }}>
          <a align="center">
            <div style={{ color: 'orange' }}>
              <h1>{title}</h1>
            </div>
            <div style={{ color: 'black' }}>
              <div dangerouslySetInnerHTML={{ __html: html }} />
            </div>
          </a>
        </div>
        <ul>
          {cats.map((cat, k) => (
            <li key={k}>
              <h3>{cat.name}</h3>
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
