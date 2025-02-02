import React, { Component } from 'react';

class Message extends Component {
    render() {
        return (
            <article className="message is-dark">
                <div className="message-header">
                    <p>{this.props.title}</p>
                    <button className="delete" aria-label="delete"></button>
                </div>
                <div className="message-body">
                {this.props.children}
                </div>
            </article>
        )
    }
}

export default Message;