"use client"
import { useEffect } from "react";
import { Hub } from "aws-amplify/utils";
import { useSearchParams } from "next/navigation";
import { signInWithRedirect } from "@aws-amplify/auth";
import { useRouter } from 'next/navigation';

const Page =  () => {
    const searchparams:any =  useSearchParams();
    console.log(searchparams,'authparam');
    const router = useRouter();

    const stateUrl = searchparams?.state;
    console.log(stateUrl,'stateUrl');

      async function watchForCognitoCookie() {
         
            signInWithRedirect({
              provider: "Google",
              customState: "home page",
            });
        }

    useEffect(() => {
        const unsubscribe = Hub.listen("auth", ({ payload }) => {
          switch (payload.event) {
            case "signInWithRedirect":
             // getUser();
              break;
            case "signInWithRedirect_failure":
             // setError("An error has occurred during the OAuth flow.");
              break;
            case "customOAuthState":
             // setCustomState(payload.data); // this is the customState provided on signInWithRedirect functionco
              console.log(payload,'payload');
              if(payload?.data){
                router.push(payload?.data)
              }
              
              break;
          }
        });
    
       // getUser();
    
        return unsubscribe;
      }, []);

    return (<>
    <div className="flex flex-col items-center justify-center min-h-screen">
      <img
        src='/static/assets/images/illustration-sand-clock-animation.gif'
        alt='loader'
        width='280'
        className="mb-6"
      />
      <p className="font-semibold text-gray-900 text-lg">"Working on it, hold on!"</p>
      <p className="text-gray-500 text-base mt-2">"You're making good progress, by the way"</p>
    </div>
    </>)
}

export default Page;

