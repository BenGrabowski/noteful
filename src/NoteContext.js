import React from 'react';

const NoteContext = React.createContext({
    notes: [],
    folders: [],
    selectedFolder: '',
    selectedNote: '',
    setSelectedFolder: () => {},
    setSelectedNote: () => {},
    handleDeleteNote: () => {},
    returnHome: () => {},
    // rerenderApp: () => {}
    updateFolders: () => {}
})

export default NoteContext;