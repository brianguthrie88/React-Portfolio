function Nav(props) {
    const { setCurrentPage } = props;
    return  <nav>
  <ul>
      <li>
          <a href="#about-me-nav" onClick={() => setCurrentPage('AboutMe')}>About Me</a>
      </li>
      <li>
          <a href="#work-nav" onClick={() => setCurrentPage('Work')}>Work</a>
      </li>
      <li>
          <a href="#contact-me-nav" onClick={() => setCurrentPage('Contact')}>Contact Me</a>
      </li>
  </ul>
</nav>
}

export default Nav;
