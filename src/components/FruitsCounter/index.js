// Write your code here
import {Components} from 'react'
import './index.css'

class FruitsCounter extends Components {
  state = {mango: 0, banana: 0}
  /*
  onMangoIncrement = () => {
    this.setState(prevState => ({mango: prevState.mango + 1}))
  }

  onBananaIncrement = () => {
    this.setState(prevState => ({banana: prevState.banana + 1}))
  } */

  render() {
    const {mango, banana} = this.state
    return (
      <div className="container">
        <div className="card-container">
          <h1 className="heading">
            Bob ate <span className="color-number">{mango}</span> mangoes
            <span className="color-number"> {banana}</span> bananas
          </h1>
          <div className="image-container">
            <div className="img-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                alt="mango"
                className="img"
              />
              <div className="button-container">
                <button
                  className="button"
                  type="button"
                  onClick={this.onMangoIncrement}
                >
                  Eat Mango
                </button>
              </div>
            </div>
            <div className="img-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                alt="banana"
                className="img"
              />
              <div className="button-container">
                <button
                  className="button"
                  type="button"
                  onClick={this.onBananaIncrement}
                >
                  Eat Banana
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default FruitsCounter
