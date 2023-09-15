import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import jwtDecode from "jwt-decode";
import React from "react";



const GoogleButton = ({fn}) => {
    const singIn =
        useGoogleLogin({
            onSuccess: async tokenResponse =>{
                console.log(tokenResponse)
                //const infouser = jwtDecode(tokenResponse.access_token)
                const {data}= await axios.get("https://www.googleapis.com/oauth2/v3/userinfo", {
                    headers:{
                      Authorization: "Bearer " + tokenResponse.access_token,
                    }
                })
                console.log(data)
                
               fn({
                    email: data.email,
                    name: data.given_name,
                    lastName: data.family_name,
                    photo: data.picture,
                    password: "M4t1ld4",
                    verified: false
                })
            },
           
        })
        
   

    return (
        < >
            <button type="button" onClick={()=>singIn()} className="btn btn-link btn-floating mx-1">
                <i className="fab fa-google"></i>
            </button>
        </>
    )
}
export default GoogleButton