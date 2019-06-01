import React, { Component } from 'react';
import {classes} from '../constants/colorsClasses';

class CoolButton extends Component {
    render() {

        var keys = Object.keys(this.props)
        var arrKeys = ['button', 'my-class'];

        for (let i=0; i < keys.length;i++) {
            arrKeys.push(classes[keys[i]])
        }

        var classesBtn = arrKeys.join(' ')
        // console.log(classesBtn)
        return (
            <button className={classesBtn}>{this.props.children}</button>
        )
    }
}

export default CoolButton;