import React, { Component } from 'react';

class NotePage extends Component {
    render() {
        console.log(this.props.notes);
        const note = 'note';
        return (
            <div>
                {note}
            </div>
        );
    }
}

export default NotePage;