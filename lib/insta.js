import axios from 'axios';

function authorize(){
	let appId = process.env.INSTA_APP_ID;
	let redUri = window.location.origin + "/insta";
	let url = `https://api.instagram.com/oauth/authorize?client_id=${appId}&redirect_uri=${redUri}&scope=user_profile,user_media&response_type=code`;
	window.open(url, "_blank").focus();
}

async function getAccessToken(code) {
  let client_id = process.env.INSTA_APP_ID;
  let client_secret = process.env.INSTA_APP_SECRET;
	let redirect_uri = window.location.origin + "/insta";

  try {
    let result = await axios.post({
        url: 'https://api.instagram.com/oauth/access_token',
        form: {
            client_id,
            client_secret,
            grant_type: 'authorization_code',
            redirect_uri,
            code
        }
    });

    // Got access token. Parse string response to JSON
    accessToken = JSON.parse(result).access_token;
  } catch (e) {
    console.log("Error=====", e);
  }

  return accessToken;
}


export { authorize, getAccessToken };