import React, {Component} from 'react';
import NoteContext from '../NoteContext';
import DeleteButton from '../DeleteButton/DeleteButton';
import { Link } from 'react-router-dom';
import moment from 'moment';
import PropTypes from 'prop-types';
import './NoteItem.css';


class NoteItem extends Component {
    render() {
        NoteItem.propTypes = {
            index: PropTypes.number,
            id: PropTypes.number,
            note_name: PropTypes.string,
            modified: PropTypes.string,
            folder: PropTypes.number
        };
        
        return (
            <NoteContext.Consumer>
                {(context) => {
                     return (
                     <li 
                        key={this.props.index}
                        className="note-item">
                     <Link 
                         to={`note/${this.props.id}`}
                         className="note-link"
                         onClick={e => context.setSelectedNote(parseInt(this.props.id))}
                     >
                         <h2>{this.props.name}</h2>
                     </Link>
                     <p>{`Date modified on ${moment(this.props.modified).format('Do MMM YYYY')}`}</p>
                     <DeleteButton
                        id={this.props.id}
                        // returnHome={() => context.returnHome()}
                     />
                 </li>);
                }}

            </NoteContext.Consumer>
        ); 
    }
}

export default NoteItem;