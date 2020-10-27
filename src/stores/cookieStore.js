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
      deleteCookie: action,
    })
  }

  createCookie = cookie => {
    cookie.id = this.cookies[this.cookies.length - 1].id + 1;
    cookie.slug = slugify(cookie.name);
    this.cookies.push(cookie)
  }

  deleteCookie = cookieId => {
    this.cookies = this.cookies.filter(cookie => cookie.id !== cookieId)
  }
}



const cookieStore = new CookieStore();
export default cookieStore;