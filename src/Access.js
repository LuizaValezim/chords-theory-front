import axios from "axios";

async function accessToken(){
    return await axios
    .post("https://api.hooktheory.com/v1/users/auth", {username: "luizavap", password:"luizavalezim123"}, {headers: {'Content-Type': 'application/json', 'Accept':'application/json'}})
    .then((response) => {
      var token = response.data.activkey;
      return token;
    });
}

async function accessChords(activkey){
    return await axios
      .get("https://api.hooktheory.com/v1/trends/nodes",
          {headers: {"Authorization": `Bearer ${activkey}`}})
      .then((response) => {
        var chords = response.data;
        console.log(chords);
        return chords;
      })
}

export {accessToken, accessChords};