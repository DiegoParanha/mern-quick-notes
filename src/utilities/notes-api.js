import sendRequest from "./send-request";
const BASE_URL = '/api/notes'

export async function create(newNote) {
    return sendRequest(BASE_URL, 'POST', newNote);
}

export async function index() {
    return sendRequest(BASE_URL);
}