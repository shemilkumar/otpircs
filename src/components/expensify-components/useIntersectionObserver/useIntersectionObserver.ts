// import {useEffect, useRef} from "react";

// const useIntersectionObserver = (callback, options) => {
//     const elementsRef = useRef([]);

//     useEffect(() => {
//     if (!elementsRef.current || !window.IntersectionObserver) return;

//     const observer = new IntersectionObserver((entries) => {
//         entries.forEach((entry) => {
//         if (callback) {
//             callback(entry);
//         }
//         });
//     }, options);

//     elementsRef.current.forEach((element) => {
//         if (element) {
//             observer.observe(element);
//         }
//     });

//     return () => {
//         if (elementsRef.current) {
//             elementsRef.current.forEach((element) => {
//                 if (element) {
//                     observer.unobserve(element);
//                 }
//             });
//         }
//     };
//     }, [callback, options]);

//     return elementsRef;
//     };

// export default useIntersectionObserver;


import { useEffect, useRef } from 'react';

const useIntersectionObserver = (callback: (entry: IntersectionObserverEntry) => void, options?: IntersectionObserverInit) => {
    // Ref for storing elements to observe
    const elementsRef = useRef<(HTMLElement | null)[]>([]);

    useEffect(() => {
        console.log('Observed elements:', elementsRef.current); // Debugging line

        // Check if IntersectionObserver is supported
        if (!window.IntersectionObserver) {
            console.warn('IntersectionObserver is not supported by this browser.');
            return;
        }

        // Create the IntersectionObserver
        const observer = new IntersectionObserver((entries) => {
            console.log(entries);
            entries.forEach((entry) => {
                console.log(entry);

                if (callback) {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('fade-in');
                        // console.log('Intersecting', entry.target.classList);
                    } else {
                        entry.target.classList.remove('fade-in');
                        // console.log('Not Intersecting', entry.target.classList);
                    }
                    console.log("Daaaaa");
                    callback(entry);
                }
            });
        }, { threshold: 0.5 });

        // Observe each element
        elementsRef.current.forEach((element) => {
            if (element) {
                observer.observe(element);
                // console.log('Observing element:', element); // Log each observed element
            }
        });

        // Cleanup: Unobserve all elements on component unmount
        return () => {
            elementsRef.current.forEach((element) => {
                if (element) {
                    observer.unobserve(element);
                }
            });
            elementsRef.current = [];
        };
    }, [callback, options]);

    return elementsRef;
};

export default useIntersectionObserver;
