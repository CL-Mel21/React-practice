import React, { Component } from 'react'
import HappinessPicker from '../HappinessPicker'
import './index.css'

const fields = [
  { index: 0, name: 'Food' },
  { index: 1, name: 'Service' },
  { index: 2, name: 'Value for money' },
]

export default class FeedbackForm extends Component {

  state = {
    score: [0, 0, 0],
    total: 0,
  }

  handleScoreChange = (score, prescore, index) => {
    let updateScore = this.state.score
    updateScore[index] = score
    this.setState({
      score: updateScore,
      total: this.state.total - prescore + score,
    })
  }

  render() {
    return (
      <div className="feedbackForm">
        <h1>Let us know how we did!</h1>

        {fields.map((field) => {
          return (
            <>
              <h2>{field.name}</h2>
              <HappinessPicker
                key={field.index}
                index={field.index}
                prescore={this.state.score[field.index]}
                handleScoreChange={this.handleScoreChange}
              />
            </>
          )
        })}
        <h1>Total Score: {this.state.total}/12</h1>
      </div>
    )
  }
}
