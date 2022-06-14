import { useEffect } from "react"
import { useRouter } from "next/router"
import { getAccessToken } from '../lib/insta'

export default function Home() {
  const router = useRouter();
  console.log("ehllo?", router.query);
  let query = router.query;

  useEffect(() => {
    let access_token = getAccessToken(query);

    console.log("hello you got access token", access_token);
  });

  return (
    <div>you logged in! - heello</div>
  )
}