
import axios from 'axios';
import { env } from '../environments/environment';

class GeniusService {
  searchByName(name) {
    name = name.split(' ').join('%20')
    return axios.get(`${env.HOST}/search?q=${name}&access_token=${env.TOKEN}`);
  }

  searchById(id) {
    const url = `${env.HOST}/songs/${id}?access_token=${env.TOKEN}`
    return axios.get(url);
  }
}

export const geniusService = new GeniusService();