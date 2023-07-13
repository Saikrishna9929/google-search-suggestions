// Write your code here
import './index.css'

const SuggestionItem = props => {
  const {suggestionItem, onChangeSuggestion} = props
  const {suggestion} = suggestionItem

  const onSelectSuggestion = () => {
    onChangeSuggestion(suggestionItem)
  }

  return (
    <li>
      <p>{suggestion}</p>
      <img
        src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
        alt="arrow"
        onClick={onSelectSuggestion}
      />
    </li>
  )
}

export default SuggestionItem
