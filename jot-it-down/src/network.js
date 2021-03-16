import axios from "axios";

const API_INVOKE_URL = ''

// Notes Functions 

export async function getAllNotes() {
    try { 
     const response = await axios.get(`${API_INVOKE_URL}/notes`)
     return response.data.body
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

export async function insertNote(name, description) {
  const note = {
      name: name,
      description: description
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


export async function getAllImageAlbums() {
  try { 
   const response = await axios.get(`${API_INVOKE_URL}/images`)
   return response.data.body
 } catch (error) {
   console.log(error)
 }
}

export async function insertAlbum(name) {
  const album = {
      name: name,
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


export async function getAllToDosCollections() {
  try { 
   const response = await axios.get(`${API_INVOKE_URL}/todos`)
  //  console.log(response.data.body)
   return response.data.body
 } catch (error) {
   console.log(error)
 }
}


export async function insertToDoCollection(todoName) {
  console.log(todoName)
  const toDoCollection = {
    name: todoName
}
  console.log(toDoCollection.name)
  try {
    const result = await axios.post(`${API_INVOKE_URL}/todos`,{toDoCollection})
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



export async function getAllLinkCollections() {
  try { 
   const response = await axios.get(`${API_INVOKE_URL}/links`)
   return response.data.body
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