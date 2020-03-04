import React, { Component, Fragment } from 'react'
import { TutoTable } from './TutoTable';

const data = [
  {
    "id": 1,
    "fileName": "logs_04032020.log",
    "fileType": "LOG",
    "date": "03 MAR 2020"
  },
  {
    "id": 2,
    "fileName": "sample.txt",
    "fileType": "TEXT",
    "date": "02 MAR 2020"
  }
]

class TutoDetails extends Component {
  render() {
    return (
      <Fragment>
        <TutoTable tutoData={data}/>
      </Fragment>
    )
  }
}

export default TutoDetails;