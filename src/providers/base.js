import axios from "axios";

export class RestProvider {
  constructor () {
    this.agent = axios.create({ baseURL: process.env.VUE_APP_API_ENDPOINT })
  }
}