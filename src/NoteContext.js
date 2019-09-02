import React from 'react';

const NoteContext = React.createContext({
    notes: [],
    folders: [],
    selectedFolder: '',
    selectedNote: '',
    setSelectedFolder: () => {},
    setSelectedNote: () => {},
    handleDeleteNote: () => {},
})

export default NoteContext;