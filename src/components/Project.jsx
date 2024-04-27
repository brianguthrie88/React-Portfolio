import project1 from '../assets/images/working-website-1.png';
import project2 from '../assets/images/project2.jpg';
import project3 from '../assets/images/project3.jpg';
import project4 from '../assets/images/project4.jpg';
import project5 from '../assets/images/project5.jpg';
function Project() {
  return <section className="work" id ="work-nav">
  <h2>Work</h2>
  <nav>
      <ul>
          <li id="link1">
              <a  id="name1" href="https://github.com/brianguthrie88/refactoring"><img id="project1" src={ project1 } alt="Photo of my Horiseon project"/></a>
          </li>
          <li id="link2">
              <a id="name2" href="#Title1"><img id="project2" src={ project2 } alt="Photo of my second project"/></a>
          </li>
          <li id="link3">
              <a id="name3" href="#Title2"><img id="project3" src={ project3 } alt="Photo of my third project"/></a>
          </li>
          <li id="link4">
              <a id="name4" href="#Title3"><img id="project4" src={ project4 } alt="Photo of my fourth project"/></a>
          </li>
          <li id="link5">
              <a id="name5" href="#Title4"><img id="project5" src={ project5 } alt="Photo of my fifth project"/></a>
          </li>
      </ul>
  </nav>
</section>
}

export default Project;