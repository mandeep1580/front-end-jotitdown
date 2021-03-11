import axios from "axios";

const API_INVOKE_URL = 'https://q5s1k6sgf9.execute-api.us-east-1.amazonaws.com/prod'


export async function getAllNotes() {
    try{ const response = await axios.get(`${API_INVOKE_URL}/notes`)
     return response.data.body
   } catch (error) {
     console.log(error)
   }
}

