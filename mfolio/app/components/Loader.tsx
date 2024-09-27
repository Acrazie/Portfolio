'use client'
import { useEffect, useRef } from "react";

export default function Loader() {
    const loaderWrapperRef = useRef<HTMLDivElement | null>(null);
    useEffect(() => {
        const loaderWrapper = loaderWrapperRef.current;

        if(!loaderWrapper) return;

        setTimeout(() => {
            loaderWrapper.style.transition = 'opacity 0.5s ease-in-out';
            loaderWrapper.style.opacity = '0';

            setTimeout(() => {
                loaderWrapper.style.display = 'none';
            }, 1500);
        }, 1000);
    }, []);


    return (
            <div ref={loaderWrapperRef}  className="w-full h-full absolute top-0 left-0 flex justify-center items-center bg-gray-900">
                <span className="inline-block w-8 h-8 relative border-4 border-gray-50 animate-loader"><span className="align-top inline-block w-full bg-gray-50 animate-loader-inner"></span></span>
            </div>
    );
}