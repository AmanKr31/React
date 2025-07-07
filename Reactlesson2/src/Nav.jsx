import { Link } from "react-router-dom"

const Nav = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-warning">
        <a className="navbar-brand pl-2" href="#">
          React-20
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/data-binding">
                DataBinding
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/state">
                UseState
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/props">
                Props
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/controlled-component">
                Controlled Component
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/shopping-cart">
                Shopping Cart
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Nav
