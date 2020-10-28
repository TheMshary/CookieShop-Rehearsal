import { makeObservable, observable, action } from 'mobx';
import slugify from 'react-slugify';

// Data
import cookies from '../cookies';

// PascalCase
class CookieStore {
  cookies = cookies;

  constructor() {
    makeObservable(this, {
      cookies: observable,
      createCookie: action,
      updateCookie: action,
      deleteCookie: action,
    })
  }

  createCookie = cookie => {
    cookie.id = this.cookies[this.cookies.length - 1].id + 1;
    cookie.slug = slugify(cookie.name);
    this.cookies.push(cookie)
  }

  updateCookie = updatedCookie => {
    const cookie = this.cookies.find(cookie => cookie.id === updatedCookie.id);
    for (const key in cookie) cookie[key] = updatedCookie[key];
    cookie.slug = slugify(cookie.name);
  }

  deleteCookie = cookieId => {
    this.cookies = this.cookies.filter(cookie => cookie.id !== cookieId)
  }
}



const cookieStore = new CookieStore();
export default cookieStore;