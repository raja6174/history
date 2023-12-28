import './index.css'

const ListItem = props => {
  const {history, deleteItem} = props
  const {timeAccessed, logoUrl, title, domainUrl, id} = history
  const onDeleteHistory = () => {
    deleteItem(id)
  }
  return (
    <li className="history-item">
      <p className="time-accessed">{timeAccessed}</p>
      <div className="logo-title-container">
        <img alt="domain logo" src={logoUrl} className="logo-image" />
        <div className="title-domain-icon-container">
          <div className="title-domain-container">
            <p className="title">{title}</p>
            <p className="domain-url">{domainUrl}</p>
          </div>
          <button type="button" onClick={onDeleteHistory} id="delete">
            <img
              alt="delete"
              src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            />
          </button>
        </div>
      </div>
    </li>
  )
}

export default ListItem
