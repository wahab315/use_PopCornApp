import React from 'react'

const Summary = (props) => {
  return (
    <div className="summary">
                <h2>Movies you watched</h2>
                <div>
                  <p>
                    <span>#️⃣</span>
                    <span>{props.total} movies</span>
                  </p>
                  <p>
                    <span>⭐️</span>
                    <span>{props.star}</span>
                  </p>
                  <p>
                    <span>🌟</span>
                    <span>{props.gotStar}</span>
                  </p>
                  <p>
                    <span>⏳</span>
                    <span>{props.time} min</span>
                  </p>
                </div>
              </div>
  )
}

export default Summary