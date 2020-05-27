import axios from "axios";

const URL = "http://localhost:8081/auth/";

class AuthService {

  async login(postData) {
    return axios
      .post(URL + "login", postData)
      .then(response => {
        if (response.data.token) {
          localStorage.setItem("user", JSON.stringify(response.data));
          console.log(this.getRole());
        }

        return response.data;
      });
  }

  logout() {
    localStorage.removeItem("user");
  }

  register(postData) {
    return axios.post(URL + "register", postData);
  }

  isLoggedIn(){
    if(localStorage.getItem('user') == null){
      return false;
    }
    return true;
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem('user'));;
  }

  getRole(){
    if(!this.isLoggedIn()) return '';
    const token = this.getCurrentUser().token;
    const jwtData = token.split('.')[1];
    if (jwtData) {
      const decodedJwtJsonData = window.atob(jwtData);
      const decodedJwtData = JSON.parse(decodedJwtJsonData);
      if (decodedJwtData.role.length > 0) {
        console.log(decodedJwtData.role[0].authority);
        return decodedJwtData.role[0].authority;
      }
    }
    return '';
  }
}

export default new AuthService();