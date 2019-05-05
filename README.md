# react-tab-hotkey-replacer

Is a simple react component which can replace the Tab Key behavior with enter or another keyboard key

## Basic Usage

```javascript
import React, { Component } from 'react';
import ReactTabHotkeyReplacer from 'react-tab-hotkey-replacer';

class App extends Component {
    showAlert() {
        alert(1);
    }

    render() {
        return (
            <div>
                <ReactTabHotkeyReplacer shortcut="enter"> {/* If no shortcut prop is assigned, default will be enter */}
                    <div className="App">
                        <input type="text" />
                        <input disabled={true} />

                        <input type="text" />

                        <textarea />
                    </div>
                </ReactTabHotkeyReplacer>
            </div>
        );
    }
}

export default App;
```

### Available shortcuts

Default shortcut is enter key, but you can change it to any keyboard key like: ctrl, space, shift, or a aphanumerical type: e or 0

## Install

##### npm

```
npm install react-tab-hotkey-replacer --save
```

## Authorship

All credit, and many thanks, goes to [Jasmin Miftari](https://github.com/jasminmif) for the inception of `react-tab-hotkey-replacer` and all versions before `1.0.0`.
