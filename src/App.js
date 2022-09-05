import {Component} from 'react'
import './App.css'

// These are the list used in the application. You can move them to any component needed.
const initialHistoryList = [
  {
    id: 0,
    timeAccessed: '07:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/instagram-img.png',
    title: 'Instagram',
    domainUrl: 'instagram.com',
  },
  {
    id: 1,
    timeAccessed: '05:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/twitter-img.png',
    title: 'Twitter. It’s what’s happening / Twitter',
    domainUrl: 'twitter.com',
  },
  {
    id: 2,
    timeAccessed: '04:35 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/facebook-img.png',
    title: 'Facebook – log in or sign up',
    domainUrl: 'facebook.com',
  },
  {
    id: 3,
    timeAccessed: '04:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/linkedin-img.png',
    title: 'LinkedIn: Log In or Sign Up',
    domainUrl: 'linkedin.com',
  },
  {
    id: 4,
    timeAccessed: '04:00 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/hashnode-img.png',
    title: 'Hashnode: Everything you need to start blogging as a developer!',
    domainUrl: 'hashnode.com',
  },
  {
    id: 5,
    timeAccessed: '03:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/github-img.png',
    title: 'GitHub: Where the world builds software · GitHub',
    domainUrl: 'github.com',
  },

  {
    id: 6,
    timeAccessed: '02:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/react-img.png',
    title: 'React – A JavaScript library for building user interfaces',
    domainUrl: 'reactjs.org',
  },
  {
    id: 7,
    timeAccessed: '01:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/stackoverflow-img.png',
    title: 'Stack Overflow - Where Developers Learn, Share, & Build Careers',
    domainUrl: 'stackoverflow.com',
  },

  {
    id: 8,
    timeAccessed: '09:25 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/gmail-img.png',
    title: 'Gmail',
    domainUrl: 'mail.google.com',
  },
  {
    id: 9,
    timeAccessed: '09:00 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/google-img.png',
    title: 'Google',
    domainUrl: 'google.com',
  },
]

// Replace your code here
export default class App extends Component {
  state = {
    browserHistorySearchString: '',
    browserHistoryItemList: initialHistoryList,
    searchSpecificBrowserHistoryItemList: initialHistoryList,
  }

  onBrowserHistorySearchInputChange = searchInputChangeEvent => {
    const userSearchInput = searchInputChangeEvent.target.value

    this.setState(previousBrowserHistorySearchState => {
      const {browserHistoryItemList} = previousBrowserHistorySearchState

      const matchingBrowserHistoryItemList = browserHistoryItemList.filter(
        currentBrowserHistoryItem => {
          const lowerCaseBrowserHistoryItemTitle = currentBrowserHistoryItem.title.toLowerCase()
          const lowerCaseUserSearchInput = userSearchInput.toLowerCase()

          return lowerCaseBrowserHistoryItemTitle.includes(
            lowerCaseUserSearchInput,
          )
        },
      )

      return {
        browserHistorySearchString: userSearchInput,
        searchSpecificBrowserHistoryItemList: matchingBrowserHistoryItemList,
      }
    })
  }

  onBrowserHistoryItemDeleteAction = browserHistoryItemDeleteEvent => {
    const browserHistoryItemIdForDeleteAction =
      browserHistoryItemDeleteEvent.target.id

    this.setState(previousBrowserHistorySearchState => {
      const {browserHistoryItemList} = previousBrowserHistorySearchState
      const browserHistoryItemListExcludingDeleteItemId = browserHistoryItemList.filter(
        currentBrowserHistoryItem =>
          currentBrowserHistoryItem.id !== browserHistoryItemIdForDeleteAction,
      )

      return {
        browserHistoryItemList: browserHistoryItemListExcludingDeleteItemId,
      }
    })
  }

  render() {
    const {
      browserHistorySearchString,
      searchSpecificBrowserHistoryItemList,
    } = this.state

    return (
      <div className="browser-history-bg-container">
        <div className="browser-history-search-container">
          <div className="browser-history-logo-container">
            <img
              className="browser-history-logo-img"
              src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
              alt="app logo"
            />
          </div>
          <div className="browser-history-search-bar-container">
            <div className="browser-history-search-icon-container">
              <img
                className="browser-history-search-icon-img"
                src="https://assets.ccbp.in/frontend/react-js/search-img.png"
                alt="search"
              />
            </div>
            <input
              type="search"
              className="browser-history-search-input"
              placeholder="Search History"
              name="search-input"
              value={browserHistorySearchString}
              onChange={this.onBrowserHistorySearchInputChange}
            />
          </div>
        </div>
        <div className="browser-history-content-container">
          {searchSpecificBrowserHistoryItemList.length === 0 ? (
            <h1 className="browser-history-empty-content-text">
              There is no history to show
            </h1>
          ) : (
            <ul className="browser-history-items-container">
              {searchSpecificBrowserHistoryItemList.map(
                currentBrowserHistoryItem => {
                  const {
                    id,
                    timeAccessed,
                    logoUrl,
                    title,
                    domainUrl,
                  } = currentBrowserHistoryItem

                  return (
                    <li
                      key={id}
                      className="browser-history-single-item-container"
                    >
                      <p className="browser-history-item-log-time">
                        {timeAccessed}
                      </p>
                      <div className="browser-history-item-data-and-action-container">
                        <div className="browser-history-item-data-container">
                          <img
                            className="browser-history-item-domain-logo"
                            src={logoUrl}
                            alt="domain logo"
                          />
                          <div className="browser-history-item-domain-details-container">
                            <p className="browser-history-item-domain-title">
                              {title}
                            </p>
                            <p className="browser-history-item-domain-name">
                              {domainUrl}
                            </p>
                          </div>
                        </div>
                        <button
                          type="button"
                          id={id}
                          className="browser-history-item-delete-action-container"
                          onClick={this.onBrowserHistoryItemDeleteAction}
                        >
                          <img
                            className="browser-history-item-delete-icon-img"
                            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
                            alt="delete"
                          />
                        </button>
                      </div>
                    </li>
                  )
                },
              )}
            </ul>
          )}
        </div>
      </div>
    )
  }
}
