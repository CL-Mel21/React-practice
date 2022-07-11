import React, { Component } from 'react'
import './index.css'

const emojiScores = [
  { index: 1, emoji: '😦', score: 0 },
  { index: 2, emoji: '😞', score: 1 },
  { index: 3, emoji: '😐', score: 2 },
  { index: 4, emoji: '🙂', score: 3 },
  { index: 5, emoji: '😁', score: 4 },
]

export default class HappinessPicker extends Component {
  render() {
    return (
      <div className="happinessPicker">
        {emojiScores.map((item) => {
          return (
            <>
              <label>
                <input
                  type="radio"
                  name={'happinessPicker'+this.props.index}
                  value={item.score}
                  onChange={() =>
                    this.props.handleScoreChange(
                      item.score,
                      this.props.prescore,
                      this.props.index
                    )
                  }
                />
                <span>{item.emoji}</span>
              </label>
            </>
          )
        })}
      </div>
    )
  }
}
