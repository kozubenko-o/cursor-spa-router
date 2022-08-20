import React, {Component} from "react";
import "./header.css";
import {NavLink} from "react-router-dom";

export default class Header extends Component {
    links = [
        {
            name: "Home",
            link: "cursor-spa-router/"
        },
        {
            name: "Publication",
            link: "cursor-spa-router/publication"
        },
        {
            name: "Photos",
            link: "cursor-spa-router/photos"
        },
        {
            name: "Contacts",
            link: "cursor-spa-router/contacts"
        }
    ]
    render() {
        return (
            <div className="container-nav">
                <nav>
                    <ul className='mcd-menu'>
                        {
                            this.links.map(el => (
                                <li key={el.name}>
                                    <NavLink to={el.link} >
                                        <strong>{el.name}</strong>
                                    </NavLink>
                                </li>
                            ))
                        }
                    </ul>
                </nav>
            </div>
        );
    }
}
