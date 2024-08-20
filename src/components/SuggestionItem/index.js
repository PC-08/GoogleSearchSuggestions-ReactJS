// Write your code here
import './index.css'

const SuggestionItem = props => {
  const {suggestion, onUserclick} = props

  const onClickLiitem = () => {
    onUserclick(suggestion)
  }

  return (
    <li onClick={onClickLiitem} className="list">
      <p> {suggestion}</p>
      <img
        className="img-arrow"
        alt="arrow"
        src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
      />
    </li>
  )
}

export default SuggestionItem
