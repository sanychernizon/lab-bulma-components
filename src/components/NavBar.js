import React, { Component } from 'react';
import CoolButton from './CoolButton';

class NavBar extends Component {
    render() {
        return (
            <nav className="navbar is-transparent">
                <div className="navbar-brand">
                    <a className="navbar-item" href="https://bulma.io">
                        <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28" />
                    </a>
                    <div className="navbar-burger burger" data-target="navbarExampleTransparentExample">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>

                <div id="navbarExampleTransparentExample" className="navbar-menu">
                    <div className="navbar-start">
                        <a className="navbar-item" href="https://bulma.io/">
                            Home</a>
                        <div className="navbar-item has-dropdown is-hoverable">
                            <a className="navbar-link" href="https://bulma.io/documentation/overview/start/">
                                Docs</a>
                            <div className="navbar-dropdown is-boxed">
                                <a className="navbar-item" href="https://bulma.io/documentation/overview/start/">
                                    Overview</a>
                                <a className="navbar-item" href="https://bulma.io/documentation/modifiers/syntax/">
                                    Modifiers</a>
                                <a className="navbar-item" href="https://bulma.io/documentation/columns/basics/">
                                    Columns</a>
                                <a className="navbar-item" href="https://bulma.io/documentation/layout/container/">
                                    Layout</a>
                                <a className="navbar-item" href="https://bulma.io/documentation/form/general/">
                                    Form</a>
                                <hr className="navbar-divider" />
                                <a className="navbar-item" href="https://bulma.io/documentation/elements/box/">
                                    Elements
                                        </a>
                                <a className="navbar-item is-active" href="https://bulma.io/documentation/components/breadcrumb/">
                                    Components
                                        </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="navbar-end">
                    <div className="navbar-item">
                        <div className="field is-grouped">
                            <p className="control">
                                <CoolButton isSmall isDanger className="is-rounded my-class">Tweet</CoolButton>
                            </p>
                            <p className="control">
                                {/* <a className="button is-primary" href="https://github.com/jgthms/bulma/releases/download/0.7.5/bulma-0.7.5.zip">
                                                <span className="icon">
                                                    <i className="fas fa-download"></i>
                                                </span>
                                                <span>Download</span>
                                            </a> */}
                                <CoolButton isSmall isSuccess>Contato</CoolButton>
                            </p>
                        </div>
                    </div>
                </div>
            </nav>
        )
    }
}

export default NavBar;