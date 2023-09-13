import '@/styles/globals.scss'
import { ReactLenis, useLenis } from '@studio-freight/react-lenis';
import type { AppProps } from 'next/app'
import { useEffect } from 'react';
import AOS from "aos";

export default function App({ Component, pageProps }: AppProps) {
    const lenis = useLenis(({scroll}: any) => {
        //
    });

    useEffect(() => {
        AOS.init({
            duration: 1000,
            easing: "ease-in-out",
            offset: 250
        });
    }, []);

    return (
        <ReactLenis root>
            <Component {...pageProps} />
        </ReactLenis>
    );
}
