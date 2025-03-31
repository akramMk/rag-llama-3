// import Image from "next/image";

// export default function Home() {
//   return (
//     <button className="btn btn-primary">test</button>
//   );
// }

import React from "react";
import Chat from "../components/Chat";

interface PageProps {
  params : {
    link?:string | string [];
  }
}

function reconstructUrl({url} : {url : string[]}){
  const decodedComponents = url.map((component) => decodeURIComponent(component))
  return decodedComponents.join('/')
}
const page = async ({params} : PageProps) => {

  const awaitedParams = await params;
  if(!awaitedParams?.link){
    return <div>Erreur: Aucun lien fourni</div>
  }

  const linkArray = Array.isArray(awaitedParams.link) ? awaitedParams.link : [awaitedParams.link]

  const decodedLink = reconstructUrl({url : linkArray})
  return (
    
    <Chat decodedLink = {decodedLink}></Chat>
  )
}

export default page