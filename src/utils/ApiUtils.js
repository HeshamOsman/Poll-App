import axios from 'axios'

class ApiUtils{
    static getQusetionApiURL(){
        return axios.get(process.env.REACT_APP_SERVER_URL)
    }

    static getQuestions(handelRequest){
        this.getQusetionApiURL()
        .then(res => axios.get(`${process.env.REACT_APP_SERVER_URL}${res.data.questions_url}`))
        .then(res => handelRequest(res.data))
        .catch(error => handelRequest(null))
    }
}

export default ApiUtils
