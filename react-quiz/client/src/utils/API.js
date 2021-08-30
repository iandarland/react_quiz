import axios from "axios"

export default{
    logScore: function(data){
        return axios.post("api/scores", data)
    },
    getScores: function() {
        return axios.get("api/scores")
    }
}