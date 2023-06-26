import './App.css';
function App() {
  function markAsRead () {
    const notificationCount = document.querySelector('.l-header__badge').childNodes[0];
    const notifications = document.querySelectorAll('.c-notification');
    notificationCount.textContent = '0';
    for(let i=0;i<notifications.length; i++) {
      if(notifications[i].classList.contains('c-notification--read')) {
        return;
      }
      notifications[i].classList.add('c-notification--read');
      notifications[i].querySelector('.c-notification__badge').classList.add('u-hidden');
    }
  }
  return (
    <main className="l-main App">
      <section className='l-section'>
        <header className='l-header'>
          <h1 className="l-header__title">Notifications <div className='l-header__badge'><span>3</span></div></h1>
          <a onClick={markAsRead} id='js-mark-as-read' href='#' className='l-header__link'>Mark all as read</a>
        </header>
        <ul className='c-notifications'>
          <li className='c-notification'>
            <div className='c-notification__row'>
              <div>
                <img className='c-notification__avatar' src="/user-icons/avatar-mark-webber.webp" alt='mark webber avatar' />
              </div>
              <div>
                <p>
                  <span className='c-notification__bold c-notification__bold--name'>Mark Webber </span>
                  reacted to your recent post
                  <span className='c-notification__bold c-notification__bold--light c-notification__bold--name'> My first tournament today!</span>
                  <i className='c-notification__badge'></i>
                </p>
                <p className='c-notification__date'>1m ago</p>
              </div>
            </div>
          </li>
          <li className='c-notification'>
            <div className='c-notification__row'>
              <div>
                <img className='c-notification__avatar' src="/user-icons/avatar-angela-gray.webp" alt='mark webber avatar' />
              </div>
              <div>
                <p>
                  <span className='c-notification__bold c-notification__bold--name'>Angela Gray </span>
                  followed you
                  <i className='c-notification__badge'></i>
                </p>
                <p className='c-notification__date'>5m ago</p>
              </div>
            </div>
          </li>
          <li className='c-notification'>
            <div className='c-notification__row'>
              <div>
                <img className='c-notification__avatar' src="/user-icons/avatar-jacob-thompson.webp" alt='mark webber avatar' />
              </div>
              <div>
                <p>
                  <span className='c-notification__bold c-notification__bold--name'>Jacob Thompson </span>
                  has joined your group <a className='c-notification__link' href="#">Chess Club</a>
                  <i className='c-notification__badge'></i>
                </p>
                <p className='c-notification__date'>1 day ago</p>
              </div>
            </div>
          </li>
          <li className='c-notification c-notification--read'>
            <div className='c-notification__row c-notification__row--start'>
              <div>
                <img className='c-notification__avatar' src="/user-icons/avatar-rizky-hasanuddin.webp" alt='mark webber avatar' />
              </div>
              <div>
                <p>
                  <span className='c-notification__bold c-notification__bold--name'>Rizky Hasanuddin </span>
                  sent you a private message
                </p>
                <p className='c-notification__date'>5 days ago</p>
                <div className='c-notification__reply'>Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game.</div>
              </div>
            </div>
          </li>
          <li className='c-notification c-notification--read'>
            <div className='c-notification__row'>
              <div>
                <img className='c-notification__avatar' src="/user-icons/avatar-kimberly-smith.webp" alt='mark webber avatar' />
              </div>
              <div>
                <p>
                  <span className='c-notification__bold c-notification__bold--name'>Kimberly Smith </span>
                  commented on your picture
                </p>
                <p className='c-notification__date'>1 week ago</p>
              </div>
              <div className='c-notification__avatar--right'>
                <img className='c-notification__avatar c-notification__avatar--right' src="/user-icons/image-chess.webp"/>
              </div>
            </div>
          </li>
          <li className='c-notification c-notification--read'>
            <div className='c-notification__row'>
              <div>
                <img className='c-notification__avatar' src="/user-icons/avatar-nathan-peterson.webp" alt='mark webber avatar' />
              </div>
              <div>
                <p>
                  <span className='c-notification__bold c-notification__bold--name'>Nathan Peterson </span>
                  reacted to your recent post <span className='c-notification__bold c-notification__bold--name c-notification__bold--light'>5 end-game strategies to increase your win rate</span>
                </p>
                <p className='c-notification__date'>1 week ago</p>
              </div>
            </div>
          </li>
          <li className='c-notification c-notification--read'>
            <div className='c-notification__row'>
              <div>
                <img className='c-notification__avatar' src="/user-icons/avatar-anna-kim.webp" alt='mark webber avatar' />
              </div>
              <div>
                <p>
                  <span className='c-notification__bold c-notification__bold--name'>Anna Kim </span>
                  left the group <a href="#" className='c-notification__link'>Chess Club</a>
                </p>
                <p className='c-notification__date'>2 weeks ago</p>
              </div>
            </div>
          </li>
        </ul>
      </section>
      <footer className="attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
        Coded by <a href="https://github.com/alevalenti44" target="_blank">alevalenti44</a>.
      </footer>
    </main>
  );
}

export default App;
