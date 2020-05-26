import React from 'react'

const repository = (props) => (
  <a href={props.repository.html_url}
    target="_blank"
    rel="noopener noreferrer"
    className="list-group-item list-group-item-action"
    key={props.repository.id}>
    <div className="d-flex w-100 justify-content-between">
      <h5 className="mb-1">{props.repository.name}</h5>
      <small>{props.repository.updated_at}</small>
    </div>
    <p className="mb-1">{props.repository.description}</p>
  </a>
)

export default repository
