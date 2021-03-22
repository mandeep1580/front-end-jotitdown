import axios from "axios";

const API_INVOKE_URL = ''

// Notes Functions 

export async function getAllNotes(username) {
    try { 
     const response = await axios.get(`${API_INVOKE_URL}/notes?user=${username}`)
     console.log (response.data)
     return response.data
   } catch (error) {
     console.log(error)
   }
}

export async function getOneNote({noteId}) {
  try {
    const result = await axios.get(`${API_INVOKE_URL}/notes/${noteId}`)
    return result.data[0]
  } catch (error) {
    console.log(error)
  }
}

export async function insertNote(name, description, username) {
  const note = {
      name: name,
      description: description,
      username: username
  }
  try {
    const result = await axios.post(`${API_INVOKE_URL}/notes`,{note})
    return result.data
  } catch (error) {
    console.log(error)
  }
}

export async function updateNote(noteId, name, description) {
  const note = {
      name: name,
      description: description
  }
  try {
    const result = await axios.put(`${API_INVOKE_URL}/notes/${noteId}`,{note})
    return result.data
  } catch (error) {
    console.log(error)
  }
}

export async function deleteNote(noteId) {
  try {
    const result = await axios.delete(`${API_INVOKE_URL}/notes/${noteId}`)
    return result.data
  } catch (error) {
    console.log(error)
  }
}

//Image Album Functions


export async function getAllImageAlbums(username) {
  try { 
   const response = await axios.get(`${API_INVOKE_URL}/images?user=${username}`)
   console.log(response.data)
   return response.data
 } catch (error) {
   console.log(error)
 }
}

export async function insertAlbum(name,username) {
  const album = {
      name: name,
      username: username
  }
  try {
    const result = await axios.post(`${API_INVOKE_URL}/images`,{album})
    console.log(result.data)
    return result.data
  } catch (error) {
    console.log(error)
  }
}

export async function deleteAlbum(albumId) {
  try {
    const result = await axios.delete(`${API_INVOKE_URL}/images/${albumId}`)
    return result.data
  } catch (error) {
    console.log(error)
  }
}

export async function updateAlbum(albumId, name) {
  console.log()
  const album = {
      name: name,
  }
  try {
    const result = await axios.put(`${API_INVOKE_URL}/images/${albumId}`,{album})
    return result.data
  } catch (error) {
    console.log(error)
  }
}

// Image Functions


export async function getAllImages({albumId}) {
  try {
    const result = await axios.get(`${API_INVOKE_URL}/images/${albumId}`)
    return result.data
  } catch (error) {
    console.log(error)
  }
}

export async function insertImage(url,albumId) {
  const image = {
      imageUrl: url,
  }

  try {
    const result = await axios.post(`${API_INVOKE_URL}/images/${albumId}`,{image})
    console.log(result.data)
    return result.data
  } catch (error) {
    console.log(error)
  }
}

export async function deleteImage(imageId,albumId) {
  try {
    const result = await axios.delete(`${API_INVOKE_URL}/images/${albumId}?imageId=${imageId}`)
    console.log(result)
    return result.data
  } catch (error) {
    console.log(error)
  }
}

// ToDo's Functions


export async function getAllToDosCollections(username) {
  try { 
   const response = await axios.get(`${API_INVOKE_URL}/todos?user=${username}`)
  //  console.log(response.data.body)
   return response.data
 } catch (error) {
   console.log(error)
 }
}


export async function insertToDoCollection(todoName,username) {
  console.log(todoName)
  const ToDoCollection = {
    name: todoName,
    username: username
}
  console.log(ToDoCollection.name)
  try {
    const result = await axios.post(`${API_INVOKE_URL}/todos`,{ToDoCollection})
    console.log(result.data)
    return result.data
  } catch (error) {
    console.log(error)
  }
}

export async function deleteToDoCollection(toDoCollectionId) {
  console.log(toDoCollectionId)
  try {
    const result = await axios.delete(`${API_INVOKE_URL}/todos/${toDoCollectionId}`)
    return result.data
  } catch (error) {
    console.log(error)
  }
}

export async function updateToDoCollection(toDoCollectionId, name) {
  console.log()
  const toDoCollection = {
      name: name,
  }
  try {
    const result = await axios.put(`${API_INVOKE_URL}/todos/${toDoCollectionId}`,{toDoCollection})
    return result.data
  } catch (error) {
    console.log(error)
  }
}


export async function getAllToDos({todoCollectionId}) {
  try {
    const result = await axios.get(`${API_INVOKE_URL}/todos/${todoCollectionId}`)
    return result.data
  } catch (error) {
    console.log(error)
  }
}

export async function deleteToDoItem(toDoId,todoCollectionId) {
  try {
    const result = await axios.delete(`${API_INVOKE_URL}/todos/${todoCollectionId}?toDoId=${toDoId}`)
    console.log(result)
    return result.data
  } catch (error) {
    console.log(error)
  }
}



export async function updateToDoItem(toDoItem, completed, toDoId, toDoCollectionId) {
  console.log()
  const toDo = {
    toDoItem: toDoItem,
    completed: completed
  }
  try {
    const result = await axios.patch(`${API_INVOKE_URL}/todos/${toDoCollectionId}?toDoId=${toDoId}`, {toDo})
    return result.data
  } catch (error) {
    console.log(error)
  }
}

export async function insertToDoItem(toDoItem, toDoCollectionId) {
  const toDo = {
    toDoItem: toDoItem,
  }

  try {
    const result = await axios.post(`${API_INVOKE_URL}/todos/${toDoCollectionId}`,{toDo})
    console.log(result.data)
    return result.data
  } catch (error) {
    console.log(error)
  }
}


// Links Functions
export async function getAllLinkCollections(username) {
  try { 
   const response = await axios.get(`${API_INVOKE_URL}/links?user=${username}`)
   return response.data
 } catch (error) {
   console.log(error)
 }
}


export async function getAllLinks({linkCollectionId}) {
  try { 
   const response = await axios.get(`${API_INVOKE_URL}/links/${linkCollectionId}`)
   return response.data
 } catch (error) {
   console.log(error)
 }
}

export async function deleteLink(linkId, linkCollectionId) {
  try {
    const result = await axios.delete(`${API_INVOKE_URL}/links/${linkCollectionId}?linkId=${linkId}`)
    console.log(result)
    return result.data
  } catch (error) {
    console.log(error)
  }
}

export async function deleteLinkCollection(linkCollectionId) {
  try {
    const result = await axios.delete(`${API_INVOKE_URL}/links/${linkCollectionId}`)
    return result.data
  } catch (error) {
    console.log(error)
  }
}

export async function updateLinkCollection(linkCollectionId, linkCollectionName) {
  const linkCollection = {
      name: linkCollectionName
  }
  try {
    const result = await axios.put(`${API_INVOKE_URL}/links/${linkCollectionId}`,{linkCollection})
    return result.data
  } catch (error) {
    console.log(error)
  }
}

export async function insertLinkCollection(linkCollectionName,username) {
  const linkCollection = {
    name: linkCollectionName,
    username: username
}
  try {
    const result = await axios.post(`${API_INVOKE_URL}/links`,{linkCollection})
    console.log(result.data)
    return result.data
  } catch (error) {
    console.log(error)
  }
}

export async function insertLink(linkUrl, linkCollectionId) {
  const link = {
    linkUrl: linkUrl,
  }

  try {
    const result = await axios.post(`${API_INVOKE_URL}/links/${linkCollectionId}`,{link})
    console.log(result.data)
    return result.data
  } catch (error) {
    console.log(error)
  }
}





