import React from 'react';

const NoteContext = React.createContext({
    notes: [],
    folders: [],
    selectedFolder: undefined,
    selectedNote: undefined,
    setSelectedFolder: () => {},
    setSelectedNote: () => {},
    handleDeleteNote: () => {},
    handleUpdateNote: () => {},
})

export default NoteContext;