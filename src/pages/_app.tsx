import "@/styles/globals.scss";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import AOS from "aos";
import ReactLenis from "lenis/react";

export default function App({ Component, pageProps }: AppProps) {
    const [showOverlay, setShowOverlay] = useState<boolean>(true);
    const router = useRouter();
    const [useEffects, setUseEffects] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setShowOverlay(false);
        }, 1000);
    }, []);

    useEffect(() => {
        if (router.isReady && router.pathname == "/") {
            console.log("Use Effects");
            setUseEffects(true);
        } else {
            console.log("Don't Use Effects");
            setUseEffects(false);
        }
    }, [router])

    useEffect(() => {
        if (!showOverlay) {
            setTimeout(() => {
                AOS.init({
                    duration: 1000,
                    easing: "ease-in-out",
                    offset: 250
                });
            }, 1000);
        }
    }, [showOverlay]);

    return useEffects ? (
        <ReactLenis root>
            <div className={`app-overlay ${showOverlay ? "show" : "hide"}`}></div>
            <Component {...pageProps} />
        </ReactLenis>
    ) : (
        <Component {...pageProps} />
    );
}
