import axios from "axios";

const URL = "http://localhost:8081/hra";

class DroolsService {

    async postUserData(postData) {
       return axios.post(URL, postData);
    }
  
 
  }
  
  export default new DroolsService();