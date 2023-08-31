import {Component} from 'react'

import './index.css'

class FaqItem extends Component {
  state = {isBtnPressed: false}

  onBtnPressed = () => {
    this.setState(prevState => ({isBtnPressed: !prevState.isBtnPressed}))
  }

  isActiveElement = () => {
    const {isBtnPressed} = this.state
    const {eachItem} = this.props
    const {answerText} = eachItem

    if (isBtnPressed) {
      return (
        <div>
          <hr />
          <p className="answer-text">{answerText}</p>
        </div>
      )
    }
    return null
  }

  render() {
    const {isBtnPressed} = this.state
    const {eachItem} = this.props
    const {questionText} = eachItem
    const imgUrl = isBtnPressed
      ? 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'
    const altText = isBtnPressed ? 'minus' : 'plus'

    return (
      <li className="item-container">
        <div className="question-btn-container">
          <h1 className="question-text">{questionText}</h1>
          <button type="button" className="button" onClick={this.onBtnPressed}>
            <img src={imgUrl} alt={altText} />
          </button>
        </div>
        {this.isActiveElement()}
      </li>
    )
  }
}

export default FaqItem
