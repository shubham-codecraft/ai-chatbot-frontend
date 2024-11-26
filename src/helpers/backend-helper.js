import axios from "axios"
import { del, get, post, put } from "./api_helper"

export const genericGetRequest = async (url, query_params, headers) => {
    const params = new URLSearchParams(query_params).toString()
    return axios
      .get(`${url}?${params}`, { headers })
      .then(response => {
        if (response.status >= 200 || response.status <= 299) {
          return response.data
        }
        throw response.data
      })
      .catch(err => {
        throw err
      })
}

export const genericPostRequest = async (
    url,
    body,
    headers = { "Content-Type": "application/json" }
  ) => {
    const response = await fetch(url, {
      method: "POST",
      headers: headers,
      body: JSON.stringify(body),
    })
  
    if (!response.ok) {
      const errorBody = await response.json();
      const message = errorBody.error || errorBody;
      throw new Error(message);
    }
  
    const data = await response.json()
    return data
}

export const genericPutRequest = async (url, body, headers = {'Content-Type': 'application/json'}, query_params = {}) => {
    const query_string_arr = [];
    for (const param in query_params) {
      query_string_arr.push(`${encodeURIComponent(param)}=${encodeURIComponent(query_params[param])}`);
    }
    const query_string = query_string_arr.join("&");

    const response = await fetch(`${url}?${query_string}`, {
      method: "PUT",
      headers: headers,
      body: JSON.stringify(body)
    })

    if (!response.ok) {
      throw new Error(response)
    }

    const data = await response.json()
    return data
}