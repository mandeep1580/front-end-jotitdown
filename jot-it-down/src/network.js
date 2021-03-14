import axios from "axios";

const API_INVOKE_URL = 'https://q5s1k6sgf9.execute-api.us-east-1.amazonaws.com/prod'


export async function getAllNotes() {
    try { 
     const response = await axios.get(`${API_INVOKE_URL}/notes`)
     return response.data.body
   } catch (error) {
     console.log(error)
   }
}

export async function getAllImageAlbums() {
  try { 
   const response = await axios.get(`${API_INVOKE_URL}/albums`)
   return response.data.body
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

export async function getAllToDosCollections() {
  try { 
   const response = await axios.get(`${API_INVOKE_URL}/todos`)
   return response.data.body
 } catch (error) {
   console.log(error)
 }
}


export async function getOneNote(noteId) {
    try {
      const result = await axios.get(`${API_INVOKE_URL}/notes/${noteId}`)
      return result.data[0]
    } catch (error) {
      console.log(error)
    }
}
  

export async function getAllImages(albumId) {
  try {
    const result = await axios.get(`${API_INVOKE_URL}/albums/${albumId}`)
    return result.data
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


  