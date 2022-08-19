import React, {Component} from "react";
import "./header.css";
import {NavLink} from "react-router-dom";

export default class Header extends Component {
    links = [
        {
            name: "Home",
            link: "/"
        },
        {
            name: "Publication",
            link: "publication"
        },
        {
            name: "Photos",
            link: "photos"
        },
        {
            name: "Contacts",
            link: "contacts"
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
