export const folderFind = (folders=[], folderId) => 
folders.find(folder => folder.id === folderId)

export const noteFind = (notes=[], noteId) => 
notes.find(note => note.id === noteId)
