import React from 'react';

class Layout extends React.Component{
  render() {
    return(
      <div class="layout">
        <nav class="main-nav">
          <ul>
            <li><a href="/">Home</a></li>
          </ul>
        </nav>
        <main>
          <h2> About Us</h2>
          <p>We are <a href='https://reactjs.net/' target="_blank">React</a> Developers</p>
        </main>
        <footer>
          Copywhat 2016 Kittens
        </footer>
      </div>
    )
}
}

export default Layout;
