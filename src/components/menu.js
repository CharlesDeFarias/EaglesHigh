import React from 'react';

class Menu extends React.Component {
  render() {
    return (
  <div id="menu">
    <ul>
      <li class="current_page_item">
        <a href="#" accesskey="1" title="">Homepage</a>
      </li>
      <li>
        <a href="#" accesskey="2" title="">Our Clients</a>
      </li>
      <li>
        <a href="#" accesskey="3" title="">About Us</a>
      </li>
      <li>
        <a href="#" accesskey="4" title="">Careers</a>
      </li>
      <li>
        <a href="#" accesskey="5" title="">Contact Us</a>
      </li>
    </ul>
  </div>
  )}
}

export default Menu;