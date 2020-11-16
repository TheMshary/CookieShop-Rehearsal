import { makeObservable, observable, action } from 'mobx';
import slugify from 'react-slugify';
import axios from 'axios';

class CookieStore {
  cookies = [];

  constructor() {
    makeObservable(this, {
      cookies: observable,
      fetchCookies: action,
      createCookie: action,
      updateCookie: action,
      deleteCookie: action,
    })
  }

  // async/await
  fetchCookies = async () => {
    try {
      const response = await axios.get("http://localhost:8000/cookies");
      this.cookies = response.data;
    } catch (error) {
      console.error("CookieStore -> fetchCookies -> error", error)
    }
  }

  createCookie = async cookie => {
    // cookie.id = this.cookies[this.cookies.length - 1].id + 1;
    // cookie.slug = slugify(cookie.name);
    // this.cookies.push(cookie)
    try {
      const response = await axios.post("http://localhost:8000/cookies", cookie);
      console.log("CookieStore -> response", response)
      this.cookies.push(response.data);
    } catch (error) {
      console.error("CookieStore -> error", error)
    }
  }

  updateCookie = async updatedCookie => {
    try {
      updatedCookie.slug = slugify(updatedCookie.name);
      await axios.put(`http://localhost:8000/cookies/${updatedCookie.id}`, updatedCookie);
      const cookie = this.cookies.find(cookie => cookie.id === updatedCookie.id);
      for (const key in cookie) cookie[key] = updatedCookie[key];
    } catch (error) {
      console.error("CookieStore -> error", error)
    }
  }

  deleteCookie = async cookieId => {
    try {
      await axios.delete(`http://localhost:8000/cookies/${cookieId}`);
      this.cookies = this.cookies.filter(cookie => cookie.id !== cookieId);
    } catch (error) {
      console.error("CookieStore -> error", error)
    }
  }
}

const cookieStore = new CookieStore();
cookieStore.fetchCookies();
export default cookieStore;