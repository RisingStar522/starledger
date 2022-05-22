import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import '../styles/globals.css'
import 'tailwindcss/tailwind.css'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
      const handleStart = (url: string) => {
        url !== router.pathname ? setLoading(true) : setLoading(false);
      };
      const handleComplete = (url: any) => setLoading(false);

      router.events.on("routeChangeStart", handleStart);
      router.events.on("routeChangeComplete", handleComplete);
      router.events.on("routeChangeError", handleComplete);
    }, [router]);
  return (
    <>
      {
        <Component {...pageProps} />
      }      
    </>
  )
  
}

export default MyApp
