
import { AiFillProduct } from "react-icons/ai"
import { FaShoppingCart } from "react-icons/fa"
import { IoMdContact } from "react-icons/io"
import { IoHome } from "react-icons/io5"
import { RiContactsBookFill } from "react-icons/ri"
import { NavLink } from "react-router-dom"

function Bootombar() {
  return (
    <div className='container-fluid bg-blue-700 py-3 d-lg-none fixed-bottom'>
        <ul className="nav justify-content-between">
            <li >
              <NavLink to={'/'} className="d-grid text-light text-decoration-none">
                <IoHome className="mx-auto fs-3"/>
                Home
              </NavLink>
            </li>
            <li >
              <NavLink to={'/product'} className="d-grid text-light text-decoration-none">
                <AiFillProduct className="mx-auto fs-3"/>
                Product
              </NavLink>
            </li>
            <li >
              <NavLink to={'/contact'} className="d-grid text-light text-decoration-none">
                <RiContactsBookFill className="mx-auto fs-3"/>
                Contact
              </NavLink>
            </li>
            <li >
              <NavLink to={'/cart'} className="d-grid text-light text-decoration-none">
                <FaShoppingCart className="mx-auto fs-3"/>
                Cart
              </NavLink>
            </li>
            <li >
              <NavLink to={'/login'} className="d-grid text-light text-decoration-none">
                <IoMdContact className="mx-auto fs-3"/>
                Account
              </NavLink>
            </li>
        </ul>
    </div>
  )
}

export default Bootombar;