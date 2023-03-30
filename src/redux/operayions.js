import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = "https://64256c4a9e0a30d92b3199d6.mockapi.io";

export const fetchContacts = createAsyncThunk(
  "contacts/fetchAll", async () => {
    const contacts = await axios.get("/contacts");
    return contacts;
  }
)