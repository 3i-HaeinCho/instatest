import axios from 'axios';

let INSTA_APP_ID="1366224027193737"
let INSTA_APP_SECRET="199092cfc37b836b5281e36226ed334b"

function authorize(){
	let appId = INSTA_APP_ID;
	let redUri = window.location.origin + "/insta";
	let url = `https://api.instagram.com/oauth/authorize?client_id=${appId}&redirect_uri=${redUri}&scope=user_profile,user_media&response_type=code`;
	window.open(url, "_blank").focus();
}

async function getAccessToken(code) {
  let client_id = INSTA_APP_ID;
  let client_secret = INSTA_APP_SECRET;
	let redirect_uri = window.location.origin + "/insta";

  let payload = {
    client_id,
    client_secret,
    grant_type: 'authorization_code',
    redirect_uri,
    code
  }

  try {
    let res = await axios.post('https://api.instagram.com/oauth/access_token', payload);

    // Got access token. Parse string response to JSON
    accessToken = JSON.parse(res).access_token;
  } catch (e) {
    console.log("Error=====", e);
  }

  return accessToken;
}


export { authorize, getAccessToken };