import React, { Component } from 'react';
import PropTypes from 'prop-types';

var keycode = require('keycode');

const propTypes = {
    shortcut: PropTypes.string
};

class ReactTabHotkeyReplacer extends Component {
    constructor(props) {
        super(props);

        this.shortcut = this.props.shortcut || 'enter';
        this.handleKeyDown = this.handleKeyDown.bind(this);
        this.refId = React.createRef();
    }

    getAllElements() {
        const parentNode = this.refId.current;
        const elements = parentNode.querySelectorAll(
            'button, input, textarea, select'
        );
        return elements;
    }

    getActiveElement() {
        const activeNode = document.activeElement;
        return activeNode;
    }

    getCurrentIndex(elements, activeElementNode) {
        let currentIndex;
        for (let i = 0; i < elements.length; i++) {
            if (elements.item(i) == activeElementNode) {
                currentIndex = i;
            }
        }

        return currentIndex;
    }

    getNextElement(elements, currentIndex) {
        let element;
        for (let i = 0; i < elements.length; i++) {
            if (currentIndex < i && !element) {
                let tmpElement = elements.item(i);
                if (this.isFocusableElement(tmpElement)) {
                    element = tmpElement;
                }
            }
        }

        return element;
    }

    isFocusableElement(element) {
        return !element.hidden && !element.disabled;
    }

    focusFirstElement(elements) {
        elements[0].focus();
    }

    focusNextElement() {
        const elements = this.getAllElements();
        const activeElementNode = this.getActiveElement();

        const currentIndex = this.getCurrentIndex(elements, activeElementNode);

        var nextElement = this.getNextElement(elements, currentIndex);

        if (nextElement) {
            nextElement.focus();
        } else {
            this.focusFirstElement(elements);
        }
    }

    handleKeyDown(event) {
        const { keyCode } = event;
        const stringToKeyCode = keycode(this.shortcut);

        if (keyCode == stringToKeyCode) {
            event.preventDefault();
            this.focusNextElement();
        }
    }

    render() {
        return (
            <div onKeyDown={this.handleKeyDown} ref={this.refId}>
                {this.props.children}
            </div>
        );
    }
}

ReactTabHotkeyReplacer.propTypes = propTypes;

export default ReactTabHotkeyReplacer;
