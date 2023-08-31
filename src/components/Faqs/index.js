import {Component} from 'react'

import FaqItem from '../FaqItem'

import './index.css'

class Faqs extends Component {
  render() {
    const {faqsList} = this.props
    return (
      <div className="main-bg-container">
        <div className="bg-container">
          <h1 className="heading">FAQs</h1>
          <ul className="list-container">
            {faqsList.map(eachItem => (
              <FaqItem eachItem={eachItem} key={eachItem.id} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Faqs
