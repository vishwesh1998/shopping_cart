import {Component} from 'react'
import {Link} from 'react-router-dom'

export default class Header extends Component
{
    render()
    {
        return <header className="tm-header" id="tm-header">
        <div className="tm-header-wrapper">
            <button className="navbar-toggler" type="button" aria-label="Toggle navigation">
                <i className="fas fa-bars"></i>
            </button>
            <div className="tm-site-header">
                <div className="mb-3 mx-auto tm-site-logo"><i className="fas fa-times fa-2x"></i></div>            
                <h1 className="text-center">E-Mall</h1>
            </div>
            <nav className="tm-nav" id="tm-nav">            
                <ul>
                    <li className="tm-nav-item"><Link to="/" className="tm-nav-link">
                        <i className="fas fa-home"></i>
                        Home
                    </Link></li>
                    <li className="tm-nav-item"><Link to="/add_category" className="tm-nav-link">
                        <i className="fas fa-home"></i>
                        Add Category 
                    </Link></li>
                    <li className="tm-nav-item"><Link to="/add_brand" className="tm-nav-link">
                        <i className="fas fa-home"></i>
                        Add Brand
                    </Link></li>
                    <li className="tm-nav-item"><Link to="/add_product" className="tm-nav-link">
                        <i className="fas fa-home"></i>
                        Add Product
                    </Link></li>
                </ul>
            </nav>
            </div>
    </header>
    
    }
}