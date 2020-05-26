import React from 'react'
import Repository from './RepositoryItem'

const repositories = (props) => (
  props.repositories.map((repository) => (
    <ul className="list-group">
      <Repository repository={repository} />
    </ul>
  ))
)

export default repositories
