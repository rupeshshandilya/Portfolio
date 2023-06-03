import "../styles/index.scss";
import Nav from "../Components/Navigation";
import type { AppProps } from "next/app";
import { AnimatePresence } from "framer-motion";
import Cursor from "../Components/Cursor/Cursor";
import MouseContextProvider from "../context/mouseContext";

import GoogleAnalytics from "@bradgarropy/next-google-analytics";
import { NextSeo } from "next-seo";

import Router from "next/router";
import NProgress from "nprogress"; //nprogress module
import { useEffect, useState, useRef } from "react";
import Link from "next/link.js";
//Route Events.
Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

NProgress.configure({ showSpinner: false });

export default function App({ Component, pageProps, router }: AppProps) {
  const [secondes, setSecondes] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setSecondes((secondes) => secondes + 1);
    }, 1000);
    if (typeof window !== "undefined" && secondes > 3) {
      const loader = document.getElementById("globalLoader");
      if (loader) {
        loader.style.opacity = "0";
        loader.style.visibility = "hidden";
        // loader.style.zIndex = "-1700";
      }
    }
    return () => {
      clearInterval(timer);
    };
  }, [secondes]);

  const [theme, setTheme] = useState("light");
  const bodyElement = useRef<HTMLElement>(null!);

  useEffect(() => {
    bodyElement.current = document.body;
  }, []);

  useEffect(() => {
    if (theme === "light") {
      bodyElement.current.classList.remove("dark");
      bodyElement.current.classList.add("light");
    } else {
      bodyElement.current.classList.remove("light");
      bodyElement.current.classList.add("dark");
    }
  }, [theme]);

  function toggleTheme() {
    setTheme(theme === "light" ? "dark" : "light");
  }

  return (
    <>
      <NextSeo
        title="Rupesh Shandilya"
        description="I’m a FullStack Developer & Android Developer, I’m passionate about creating beautiful, intuitive and responsive websites."
        canonical="https://www.rupeshshandilya.tech/"
        openGraph={{
          url: "https://www.rupeshshandilya.tech/",
          title: "Rupesh Shandilya",
          description:
            "I’m a FullStack Developer & Android Developer, I’m passionate about creating beautiful, intuitive and responsive websites.",
          images: [
            {
              url: "https://lndev.me/images/lndev.JPG",
              alt: "",
              type: "image/jpeg",
            },
          ],
          siteName: "Rupesh Shandilya",
        }}
      />
      <GoogleAnalytics measurementId="G-E7N5LJTEWP" />
      <AnimatePresence initial={false}>
        <MouseContextProvider>
          <Cursor />
          <header className="header">
            <Link href="/" className="header-logo ">
              <svg
                version="1.0"
                xmlns="http://www.w3.org/2000/svg"
                width="155"
                height="200"
                viewBox="0 0 3500 2000"
              >
                <g
                  transform="translate(0,240) scale(0.100000,-0.1)"
                  fill="#000000"
                  stroke="none"
                >
                  <path
                    d="M18717 15755 c-111 -16 -250 -45 -257 -55 -3 -3 -32 -15 -65 -25 -33
-10 -75 -24 -92 -32 -18 -7 -36 -13 -39 -12 -4 0 -10 -4 -13 -9 -3 -5 -33 -22
-66 -38 -33 -15 -69 -36 -79 -46 -11 -10 -25 -18 -30 -18 -6 0 -24 -11 -39
-25 -15 -14 -27 -23 -27 -20 0 14 -167 -147 -224 -215 -16 -19 -40 -53 -54
-75 -14 -22 -29 -42 -33 -45 -5 -3 -23 -37 -40 -75 -17 -39 -35 -72 -39 -75
-5 -3 -20 -48 -35 -100 -14 -52 -30 -104 -35 -115 -38 -83 -38 -468 -1 -550 5
-11 21 -60 36 -110 15 -49 31 -92 35 -95 4 -3 20 -29 35 -59 30 -59 83 -132
148 -201 80 -84 242 -220 263 -220 4 0 23 -12 43 -27 20 -16 56 -39 80 -52 24
-13 49 -28 55 -33 6 -5 35 -22 64 -36 355 -178 768 -393 787 -409 6 -5 33 -22
60 -37 28 -16 52 -32 55 -36 3 -3 28 -22 55 -40 141 -96 255 -237 276 -342 12
-59 -1 -156 -24 -180 -7 -7 -23 -30 -37 -50 -14 -21 -28 -38 -31 -38 -3 0 -19
-12 -35 -27 -15 -14 -49 -35 -74 -46 -25 -11 -47 -23 -50 -26 -9 -10 -71 -29
-160 -48 -63 -13 -131 -17 -260 -17 -194 0 -304 17 -399 61 -30 14 -72 34 -95
44 -107 50 -280 213 -335 317 -6 12 -16 22 -20 22 -12 0 -126 -77 -141 -95 -7
-8 -18 -15 -24 -15 -6 0 -22 -10 -36 -23 -14 -12 -38 -31 -55 -41 -16 -10 -53
-36 -81 -57 -28 -22 -56 -39 -61 -39 -6 0 -17 -7 -24 -16 -8 -9 -32 -28 -54
-42 -22 -13 -63 -42 -91 -63 -28 -22 -55 -39 -60 -39 -5 0 -22 -14 -38 -30
-16 -17 -35 -30 -43 -30 -20 0 -26 -25 -12 -52 6 -13 15 -25 19 -28 3 -3 22
-32 40 -65 19 -33 39 -64 45 -70 7 -5 19 -21 28 -34 42 -63 251 -281 269 -281
4 0 22 -13 40 -28 18 -16 56 -42 83 -58 28 -15 55 -33 61 -39 6 -5 35 -21 65
-35 30 -14 57 -29 61 -35 4 -5 8 -7 8 -2 0 4 10 1 23 -7 12 -7 54 -24 92 -36
39 -12 75 -25 80 -30 12 -10 252 -60 288 -60 14 0 27 -6 29 -12 6 -18 613 -19
649 -1 13 6 60 17 104 23 90 13 205 39 220 50 6 4 42 17 80 29 63 20 253 106
265 121 3 3 27 18 53 34 26 15 63 41 81 57 19 16 36 29 39 29 11 0 172 164
196 200 13 19 30 40 36 45 7 6 26 38 43 72 18 34 36 64 40 67 5 3 22 40 37 83
16 43 32 80 36 83 4 3 18 57 31 120 33 164 33 446 -1 600 -12 57 -26 107 -29
110 -4 3 -21 39 -36 80 -16 41 -34 82 -41 90 -6 8 -24 38 -40 65 -16 28 -34
55 -40 60 -7 6 -22 26 -35 45 -31 48 -248 260 -265 260 -8 0 -18 6 -22 14 -4
7 -28 28 -53 45 -72 50 -150 101 -155 101 -3 0 -11 5 -18 11 -18 16 -103 64
-177 100 -36 17 -72 37 -80 43 -8 7 -44 25 -80 40 -36 15 -67 31 -70 35 -3 4
-36 20 -75 36 -38 15 -78 33 -90 40 -11 7 -51 25 -90 41 -38 15 -72 30 -75 34
-3 3 -21 12 -40 20 -58 22 -273 129 -310 155 -102 69 -159 144 -160 208 0 15
-4 27 -10 27 -5 0 -10 9 -10 19 0 11 5 23 10 26 6 3 10 16 10 29 0 83 78 189
188 255 76 45 143 66 252 80 41 6 87 12 102 15 16 2 30 0 34 -5 3 -5 27 -9 53
-9 78 0 197 -36 285 -86 80 -46 179 -137 191 -175 4 -10 11 -19 16 -19 5 0 17
-16 26 -36 21 -43 40 -41 111 11 26 18 85 60 132 92 47 31 90 63 95 69 6 6 28
21 50 34 22 13 50 32 63 43 12 12 37 30 56 41 57 35 150 100 173 121 l23 20
-19 50 c-24 61 -89 186 -105 200 -6 6 -24 30 -40 54 -36 56 -174 190 -244 239
-95 65 -201 122 -280 149 -42 14 -81 29 -87 33 -17 13 -143 38 -268 55 -143
18 -413 18 -550 0z"
                  />
                  <path
                    d="M2680 13460 l0 -2220 460 0 460 0 2 1026 3 1027 39 -64 c42 -71 99
-158 115 -176 6 -6 24 -33 41 -60 16 -26 37 -57 45 -68 17 -21 60 -86 108
-163 15 -24 34 -51 43 -59 8 -8 22 -29 30 -46 9 -18 24 -41 34 -52 10 -11 31
-41 47 -66 42 -69 91 -141 109 -164 8 -11 27 -40 42 -65 14 -25 30 -47 34 -48
5 -2 17 -21 28 -42 11 -21 25 -44 33 -51 7 -8 28 -38 46 -68 18 -30 39 -61 47
-69 8 -7 21 -27 30 -44 8 -16 30 -49 48 -72 18 -23 38 -57 45 -74 7 -18 17
-32 22 -32 4 0 21 -21 36 -47 15 -27 33 -54 40 -61 7 -7 25 -34 40 -60 15 -26
34 -53 41 -62 7 -8 41 -58 75 -110 33 -52 64 -97 68 -100 4 -3 23 -33 43 -67
l37 -63 548 0 c486 0 550 2 555 15 5 15 -35 87 -60 110 -7 6 -24 28 -38 50
-62 93 -96 141 -109 155 -8 8 -26 33 -41 55 -65 96 -96 141 -108 154 -7 8 -24
31 -38 51 -14 21 -43 64 -65 96 -22 32 -45 64 -51 69 -7 6 -24 30 -39 55 -16
24 -34 50 -41 57 -6 7 -22 29 -35 50 -13 21 -28 43 -35 48 -7 6 -24 30 -39 55
-16 24 -34 50 -41 57 -6 7 -22 29 -35 50 -13 21 -28 43 -35 48 -7 6 -24 30
-39 55 -16 24 -34 50 -41 57 -6 7 -22 29 -35 50 -13 21 -29 44 -37 52 -8 8
-25 32 -39 54 -14 22 -33 49 -43 59 -9 10 -26 34 -36 53 -10 19 -22 35 -25 35
-4 0 -19 20 -33 44 -14 25 -32 51 -39 58 -7 7 -22 27 -34 43 l-21 31 51 18
c50 17 101 45 170 93 18 12 50 34 72 49 39 26 146 131 195 189 82 98 176 258
211 355 13 36 26 67 29 70 10 7 38 128 57 239 22 130 27 271 13 356 -29 176
-52 281 -70 319 -10 23 -30 73 -45 111 -14 38 -29 72 -34 75 -5 3 -21 30 -36
60 -15 30 -31 57 -35 60 -4 3 -23 30 -42 60 -39 59 -171 209 -197 224 -9 5
-27 19 -41 33 -35 34 -153 123 -163 123 -5 0 -22 9 -37 20 -75 53 -299 150
-347 150 -7 0 -13 4 -13 8 0 11 -132 39 -245 52 -53 6 -410 10 -872 10 l-783
0 0 -2220z m1643 1285 c31 -10 57 -22 57 -27 0 -5 5 -6 10 -3 6 3 10 2 10 -2
0 -5 17 -17 39 -26 50 -22 171 -150 196 -207 11 -25 23 -48 27 -51 12 -8 38
-137 38 -190 0 -104 -53 -258 -114 -328 -88 -101 -207 -177 -315 -200 -32 -7
-173 -11 -361 -11 l-310 0 0 536 0 535 333 -4 c286 -3 340 -6 390 -22z"
                  />
                  <path
                    d="M6290 14208 c0 -1412 4 -1612 29 -1673 5 -11 23 -78 40 -149 17 -72
35 -132 39 -135 4 -4 21 -40 36 -81 16 -41 33 -77 37 -80 4 -3 22 -35 39 -70
32 -66 87 -153 113 -180 8 -8 25 -31 38 -50 14 -19 36 -46 49 -60 14 -14 32
-34 40 -45 18 -25 246 -225 256 -225 6 0 88 -53 94 -61 8 -10 134 -73 143 -71
4 1 7 -2 7 -7 0 -4 28 -18 63 -30 34 -12 80 -30 102 -41 22 -10 85 -28 140
-40 55 -12 109 -26 120 -31 32 -14 204 -29 330 -29 131 0 305 17 319 31 6 5
20 9 32 9 31 0 225 50 249 65 11 7 49 23 85 35 36 13 68 29 72 34 5 7 8 7 8 1
0 -6 3 -6 8 0 4 6 34 24 67 40 33 17 65 35 70 42 6 7 19 16 31 20 39 15 185
134 274 223 100 100 181 202 234 295 16 28 32 52 35 55 3 3 20 34 36 70 17 36
33 66 37 68 3 2 21 49 39 105 18 56 36 104 40 107 9 7 47 195 55 275 4 36 11
68 15 71 5 3 9 675 9 1495 l0 1489 -465 0 -464 0 -3 -1467 -3 -1468 -23 -79
c-12 -44 -26 -82 -31 -85 -4 -4 -16 -27 -25 -53 -10 -26 -26 -55 -35 -65 -9
-10 -26 -34 -38 -53 -42 -67 -174 -184 -248 -220 -27 -14 -52 -28 -55 -32 -9
-12 -127 -47 -194 -58 -89 -14 -202 -12 -296 6 -79 15 -159 40 -170 54 -3 4
-27 17 -53 29 -61 29 -85 49 -177 142 -89 91 -161 213 -185 315 -9 38 -22 78
-28 89 -9 15 -13 379 -15 1483 l-2 1462 -460 0 -460 0 0 -1472z"
                  />
                  <path
                    d="M10480 13460 l0 -2220 458 2 457 3 3 713 2 712 395 0 c217 0 403 4
413 9 9 5 53 14 97 19 98 13 265 52 265 62 0 4 26 15 58 24 31 9 73 25 92 36
19 10 58 30 85 43 48 23 144 84 175 110 8 6 30 24 50 38 45 33 135 114 169
153 14 17 38 41 52 55 14 15 36 42 50 61 13 19 30 42 37 50 28 32 85 127 109
180 13 30 27 57 32 60 4 3 20 43 35 90 15 47 34 99 41 115 45 102 65 452 36
640 -12 81 -95 353 -111 365 -4 3 -22 38 -40 78 -18 39 -36 72 -39 72 -4 0
-20 25 -36 55 -17 30 -33 55 -36 55 -3 0 -20 20 -37 44 -33 45 -173 189 -233
239 -63 53 -171 127 -186 127 -7 0 -16 7 -19 15 -4 8 -10 12 -15 9 -5 -3 -9
-1 -9 4 0 4 -30 21 -67 36 -38 15 -70 31 -73 35 -3 5 -43 21 -90 36 -47 15
-89 31 -95 35 -14 11 -155 38 -260 50 -54 6 -423 10 -927 10 l-838 0 0 -2220z
m1755 1286 c33 -9 63 -22 67 -29 4 -7 8 -9 8 -5 0 10 129 -60 159 -86 84 -74
137 -139 158 -196 9 -25 21 -48 25 -51 13 -9 38 -139 38 -199 0 -60 -25 -190
-38 -199 -4 -3 -16 -26 -25 -51 -9 -25 -29 -61 -45 -80 -41 -51 -144 -150
-157 -150 -6 0 -21 -9 -33 -20 -12 -12 -22 -17 -22 -13 0 4 -4 4 -8 -2 -13
-18 -82 -45 -147 -57 -36 -7 -65 -16 -65 -20 0 -5 -169 -8 -375 -8 l-375 0 0
596 0 595 388 -3 c329 -4 396 -7 447 -22z"
                  />
                  <path
                    d="M14140 15230 l0 -450 1345 0 1345 0 0 450 0 450 -1345 0 -1345 0 0
-450z"
                  />
                  <path
                    d="M21040 13460 l0 -2220 454 0 c405 0 455 2 460 16 3 9 6 407 6 885 l0
869 765 0 765 0 0 -871 c0 -741 2 -873 14 -885 12 -12 88 -14 465 -14 l451 0
0 2220 0 2220 -449 0 c-247 0 -456 -3 -465 -6 -14 -6 -16 -92 -16 -880 l0
-874 -765 0 -765 0 -2 878 -3 877 -457 3 -458 2 0 -2220z"
                  />
                  <path
                    d="M14140 12590 l0 -1350 1345 0 1345 0 0 455 0 455 -880 0 -880 0 0
440 0 440 755 0 755 0 0 455 0 455 -1220 0 -1220 0 0 -1350z"
                  />
                  <path
                    d="M12160 10436 c0 -8 -13 -38 -28 -67 -15 -30 -38 -80 -51 -111 -13
-32 -27 -58 -31 -58 -4 0 -11 -12 -14 -27 -4 -16 -24 -64 -45 -108 -75 -155
-119 -251 -142 -305 -13 -30 -26 -57 -29 -60 -3 -3 -19 -36 -35 -75 -16 -38
-32 -72 -36 -75 -4 -3 -22 -41 -39 -85 -17 -44 -35 -82 -39 -85 -4 -3 -20 -36
-35 -75 -16 -38 -34 -76 -40 -83 -5 -8 -23 -46 -39 -85 -15 -39 -32 -74 -36
-77 -4 -3 -20 -36 -35 -75 -15 -38 -36 -83 -45 -100 -10 -16 -28 -56 -41 -87
-12 -32 -26 -58 -30 -58 -4 0 -11 -12 -15 -27 -3 -15 -28 -72 -54 -127 -26
-56 -54 -116 -61 -133 -7 -18 -16 -33 -20 -33 -4 0 -11 -12 -14 -27 -4 -16
-24 -64 -45 -108 -75 -155 -119 -251 -142 -305 -13 -30 -26 -57 -29 -60 -3 -3
-19 -36 -35 -75 -16 -38 -32 -72 -36 -75 -4 -3 -22 -41 -39 -85 -17 -44 -35
-82 -39 -85 -4 -3 -20 -38 -36 -77 -15 -40 -31 -73 -35 -73 -4 0 -20 -34 -35
-75 -15 -42 -33 -81 -39 -88 -7 -7 -25 -43 -40 -82 -15 -38 -31 -72 -35 -75
-4 -3 -22 -42 -40 -87 -18 -46 -37 -83 -41 -83 -4 0 -11 -12 -15 -27 -3 -16
-27 -71 -52 -123 -56 -117 -90 -191 -138 -295 -20 -44 -54 -116 -75 -160 -73
-154 -118 -251 -141 -305 -13 -30 -26 -57 -30 -60 -9 -6 -29 -56 -29 -71 0 -5
195 -9 495 -9 422 0 495 2 495 14 0 8 6 21 13 28 7 7 21 36 31 63 10 28 27 66
38 85 11 19 33 68 50 110 16 41 33 77 37 80 4 3 18 32 31 65 13 33 31 74 41
90 9 17 29 60 44 98 15 37 31 67 35 67 4 0 11 12 15 28 3 15 24 64 46 110 22
46 49 106 60 135 11 28 24 54 28 57 4 3 20 37 35 75 15 39 33 79 41 90 7 12
25 52 40 90 16 39 31 72 35 75 4 3 17 31 28 62 12 32 33 79 46 105 14 26 34
73 46 103 12 30 25 57 29 60 4 3 20 37 35 75 15 39 36 84 45 100 10 17 28 57
41 90 13 33 27 62 31 65 4 3 21 42 39 88 18 45 36 82 40 82 4 0 11 12 15 28 3
15 24 63 45 107 21 44 47 103 58 130 11 28 23 50 28 50 4 0 21 -34 38 -75 16
-41 33 -77 36 -80 4 -3 22 -43 40 -90 19 -47 37 -87 41 -90 4 -3 17 -30 29
-60 12 -30 34 -80 49 -110 15 -30 36 -79 46 -107 11 -29 22 -53 25 -53 4 0 20
-33 35 -72 16 -40 31 -75 35 -78 4 -3 22 -43 41 -90 19 -47 37 -88 42 -91 4
-3 21 -43 37 -88 16 -45 33 -88 39 -94 5 -7 22 -43 37 -82 15 -38 31 -72 35
-75 4 -3 17 -30 29 -60 12 -30 40 -93 62 -140 78 -166 105 -225 119 -260 7
-19 15 -37 19 -40 9 -8 60 -118 60 -129 0 -6 3 -11 8 -11 4 0 23 -39 42 -87
19 -49 38 -90 41 -93 4 -3 20 -36 35 -75 15 -38 31 -72 35 -75 4 -3 21 -40 38
-82 17 -43 36 -87 43 -98 13 -20 23 -20 505 -20 556 0 514 -8 464 83 -16 28
-37 75 -47 102 -10 28 -22 52 -26 56 -4 3 -19 34 -33 68 -15 35 -32 73 -40 85
-7 11 -26 53 -41 91 -15 39 -33 75 -40 82 -7 7 -23 42 -35 78 -13 36 -27 65
-30 65 -4 0 -22 37 -40 83 -18 45 -36 84 -40 87 -4 3 -20 37 -36 75 -15 39
-31 71 -35 73 -3 2 -21 40 -39 85 -18 45 -36 84 -40 87 -4 3 -19 37 -35 75
-15 39 -32 77 -39 85 -6 8 -25 47 -41 85 -15 39 -31 72 -35 75 -4 3 -22 41
-39 85 -17 44 -35 82 -39 85 -5 3 -20 37 -36 75 -15 39 -31 72 -35 75 -3 3
-21 41 -40 85 -18 44 -36 82 -39 85 -4 3 -20 37 -35 75 -15 39 -31 72 -35 75
-4 3 -17 30 -30 60 -12 30 -38 87 -56 125 -18 39 -53 113 -78 165 -25 53 -49
108 -52 123 -4 15 -11 27 -15 27 -4 0 -18 26 -30 58 -13 31 -31 71 -41 87 -9
17 -30 62 -45 100 -15 39 -33 75 -40 82 -7 7 -23 42 -35 78 -13 36 -27 65 -30
65 -4 0 -22 37 -40 83 -18 45 -36 84 -40 87 -4 3 -20 37 -36 75 -15 39 -31 71
-35 73 -3 2 -21 40 -39 85 -18 45 -36 84 -40 87 -4 3 -19 37 -35 75 -15 39
-32 77 -39 85 -6 8 -25 47 -41 85 -15 39 -31 72 -35 75 -4 3 -22 41 -39 85
-17 44 -35 82 -39 85 -4 3 -20 37 -35 75 -15 39 -31 72 -35 75 -5 3 -23 42
-41 88 -19 45 -37 82 -40 82 -4 0 -15 25 -25 55 -18 52 -21 55 -52 55 -22 0
-33 -5 -33 -14z"
                  />
                  <path
                    d="M32125 10394 c-11 -31 -24 -62 -30 -68 -6 -6 -26 -48 -44 -93 -18
-45 -36 -83 -40 -85 -3 -2 -19 -36 -35 -75 -16 -40 -32 -73 -36 -73 -3 0 -12
-17 -19 -37 -12 -36 -36 -87 -133 -293 -104 -219 -174 -371 -199 -430 -13 -30
-26 -57 -30 -60 -4 -3 -19 -36 -35 -75 -15 -38 -32 -77 -39 -85 -7 -8 -24 -46
-39 -85 -16 -38 -31 -72 -35 -75 -4 -3 -22 -41 -40 -85 -18 -44 -36 -82 -40
-85 -4 -3 -20 -36 -35 -75 -15 -38 -31 -72 -35 -75 -4 -3 -22 -42 -40 -87 -18
-46 -36 -83 -40 -83 -3 0 -17 -29 -30 -65 -12 -36 -28 -71 -35 -78 -7 -7 -25
-43 -40 -82 -15 -38 -36 -83 -45 -100 -10 -16 -28 -56 -41 -87 -12 -32 -26
-58 -30 -58 -4 0 -11 -12 -14 -27 -4 -16 -24 -64 -45 -108 -75 -155 -119 -251
-142 -305 -13 -30 -26 -57 -30 -60 -3 -3 -19 -36 -34 -75 -16 -38 -31 -72 -36
-75 -4 -3 -22 -41 -39 -85 -17 -44 -35 -82 -39 -85 -4 -3 -22 -42 -40 -87 -18
-45 -36 -83 -39 -85 -4 -2 -20 -34 -35 -73 -16 -38 -32 -72 -36 -75 -4 -3 -20
-36 -35 -75 -15 -38 -36 -83 -45 -100 -10 -16 -28 -56 -41 -87 -12 -32 -26
-58 -30 -58 -4 0 -11 -12 -15 -27 -3 -15 -27 -70 -52 -123 -24 -52 -57 -122
-73 -155 -71 -150 -100 -214 -100 -219 0 -3 224 -6 498 -6 l498 0 13 38 c7 20
32 78 56 127 23 50 48 107 56 128 7 20 16 37 20 37 3 0 21 38 39 85 18 47 36
85 40 85 4 0 11 12 14 26 8 32 47 117 57 124 4 3 21 42 39 88 17 45 35 82 40
82 4 0 11 12 15 28 3 15 26 68 49 117 24 50 51 111 61 138 10 26 21 47 24 47
4 0 13 17 20 38 7 20 26 64 41 97 16 33 40 89 54 124 15 36 30 67 34 70 4 4
23 45 41 93 19 48 37 88 40 90 4 2 20 35 35 73 15 39 31 72 35 75 4 3 22 44
40 93 19 48 37 87 40 87 4 0 19 34 35 75 16 41 32 75 35 75 4 0 13 17 20 38 7
20 30 73 50 117 21 44 46 101 57 127 10 27 22 48 27 48 4 0 7 7 7 15 0 33 19
11 41 -47 13 -35 28 -68 34 -75 7 -6 22 -40 35 -75 13 -35 27 -65 31 -68 4 -3
22 -41 39 -85 17 -44 35 -82 39 -85 4 -3 21 -39 37 -80 15 -41 31 -77 35 -80
4 -3 19 -34 33 -70 15 -36 40 -92 56 -125 72 -151 109 -232 115 -255 7 -24 42
-102 110 -245 18 -38 39 -87 46 -107 7 -21 16 -38 20 -38 3 0 14 -21 24 -47
10 -27 37 -88 61 -138 23 -49 46 -102 49 -117 4 -16 11 -28 15 -28 5 0 12 -10
16 -22 11 -35 56 -132 64 -138 4 -3 20 -39 36 -80 16 -41 32 -76 36 -78 4 -2
21 -40 39 -85 17 -45 34 -84 38 -87 4 -3 15 -25 25 -50 9 -25 32 -75 49 -112
l32 -67 493 -1 c411 0 492 2 492 14 0 17 -30 89 -39 96 -4 3 -20 37 -36 75
-16 39 -32 72 -36 75 -4 3 -22 41 -39 85 -17 44 -35 82 -39 85 -5 3 -20 37
-36 75 -15 39 -31 72 -34 75 -4 3 -17 30 -30 60 -23 54 -67 150 -142 305 -21
44 -41 92 -45 108 -3 15 -10 27 -14 27 -4 0 -13 15 -20 33 -7 17 -35 78 -61
133 -26 56 -51 113 -55 128 -3 14 -10 26 -14 26 -4 0 -23 37 -41 83 -18 45
-36 84 -40 87 -4 3 -20 37 -35 75 -15 39 -31 72 -35 75 -4 3 -22 41 -40 85
-18 44 -36 82 -40 85 -4 3 -20 37 -35 75 -15 39 -31 72 -35 75 -4 3 -22 41
-39 85 -17 44 -35 82 -39 85 -4 3 -20 37 -36 75 -16 39 -32 72 -36 75 -4 3
-22 41 -39 85 -17 44 -35 82 -39 85 -4 3 -20 37 -36 75 -16 39 -32 72 -35 75
-3 3 -16 30 -29 60 -23 54 -67 150 -142 305 -21 44 -41 92 -45 108 -3 15 -10
27 -14 27 -4 0 -13 15 -20 33 -7 17 -35 77 -61 133 -26 55 -51 112 -54 127 -4
15 -11 27 -15 27 -4 0 -20 30 -35 68 -15 37 -35 81 -45 97 -9 17 -28 58 -41
93 -13 34 -27 62 -30 62 -4 0 -22 37 -40 83 -18 45 -36 84 -40 87 -4 3 -20 37
-35 75 -15 39 -31 72 -35 75 -4 3 -22 41 -40 85 -17 44 -35 82 -39 85 -5 3
-21 37 -36 75 -15 39 -33 76 -40 82 -7 7 -15 26 -19 43 -6 26 -11 30 -39 30
-30 0 -33 -4 -51 -56z"
                  />
                  <path
                    d="M3950 10434 c-25 -3 -54 -9 -65 -13 -11 -5 -40 -12 -65 -15 -61 -8
-234 -48 -240 -56 -3 -3 -41 -19 -85 -35 -44 -16 -83 -33 -87 -39 -5 -7 -8 -7
-8 -1 0 6 -3 6 -8 -1 -4 -6 -32 -22 -63 -37 -31 -14 -62 -33 -69 -42 -7 -8
-17 -15 -22 -15 -39 0 -275 -223 -335 -318 -20 -31 -40 -59 -44 -62 -4 -3 -23
-37 -40 -75 -18 -39 -36 -72 -40 -75 -4 -3 -19 -48 -34 -100 -14 -52 -30 -103
-35 -112 -38 -68 -38 -472 -1 -553 5 -11 19 -52 30 -92 21 -70 92 -218 116
-238 6 -5 23 -27 37 -49 37 -54 126 -146 200 -205 35 -28 77 -62 94 -76 18
-14 36 -25 41 -25 4 0 24 -13 43 -28 19 -16 57 -39 83 -51 26 -13 53 -28 60
-35 7 -6 39 -25 72 -41 33 -15 62 -31 65 -35 3 -4 34 -20 70 -36 36 -16 67
-32 68 -36 2 -5 8 -6 13 -2 5 3 9 1 9 -4 0 -5 30 -22 68 -37 37 -16 69 -32 72
-35 6 -8 138 -69 147 -69 3 1 9 -4 12 -9 3 -6 31 -22 61 -36 30 -15 87 -46
127 -69 39 -23 101 -59 137 -80 36 -21 66 -42 66 -46 0 -4 15 -15 33 -25 54
-31 149 -124 208 -203 67 -90 84 -204 43 -301 -22 -55 -134 -156 -201 -182
-32 -13 -67 -29 -78 -36 -85 -51 -475 -66 -654 -26 -52 12 -97 25 -100 30 -3
4 -39 21 -79 37 -40 16 -75 32 -78 37 -3 5 -24 20 -46 35 -44 27 -198 177
-198 191 0 5 -11 21 -25 36 -14 15 -25 34 -25 42 0 7 -6 14 -14 14 -14 0 -105
-58 -139 -87 -9 -9 -26 -21 -36 -27 -44 -25 -190 -128 -201 -141 -7 -8 -18
-15 -24 -15 -6 0 -22 -10 -36 -23 -14 -12 -38 -31 -55 -41 -16 -10 -53 -36
-81 -57 -28 -22 -55 -39 -61 -39 -5 0 -22 -13 -38 -30 -16 -16 -35 -30 -42
-30 -17 0 -17 -54 0 -72 7 -7 26 -35 41 -63 68 -116 206 -275 316 -365 24 -19
58 -47 75 -62 18 -15 35 -25 39 -21 3 3 6 2 6 -4 0 -5 24 -23 53 -38 28 -16
54 -32 57 -36 7 -10 112 -59 128 -59 6 0 12 -4 12 -9 0 -9 179 -71 206 -71 8
0 14 -4 14 -9 0 -10 179 -45 310 -61 127 -15 478 -12 611 5 150 20 289 47 289
56 0 4 14 10 30 14 55 12 184 55 190 63 3 5 35 21 73 37 37 15 67 31 67 35 0
4 18 15 40 25 21 10 48 26 60 37 11 10 20 16 20 13 0 -3 15 8 33 24 17 17 35
31 38 31 13 0 164 157 211 217 26 34 57 81 69 105 12 24 25 45 29 48 5 3 22
41 39 85 17 44 36 88 41 97 5 9 19 63 32 120 19 87 22 133 22 298 0 165 -3
211 -23 300 -12 57 -26 107 -30 110 -4 3 -20 40 -35 83 -16 43 -34 84 -41 91
-7 7 -22 31 -34 53 -11 23 -26 47 -33 54 -8 8 -28 34 -46 59 -122 168 -418
397 -682 526 -30 15 -62 32 -70 39 -8 7 -44 25 -79 40 -35 14 -70 33 -78 41
-8 8 -19 14 -24 14 -5 0 -51 20 -102 44 -50 23 -109 49 -130 55 -20 7 -43 18
-50 24 -6 7 -50 27 -97 46 -47 19 -87 37 -90 41 -3 3 -21 12 -40 20 -56 21
-209 118 -251 158 -41 40 -69 96 -69 137 0 14 -4 25 -10 25 -5 0 -10 9 -10 19
0 11 5 23 10 26 6 3 10 17 10 30 0 72 81 193 155 232 17 9 35 22 40 29 11 14
153 64 182 64 11 0 24 5 30 11 16 16 266 16 271 0 2 -6 14 -11 26 -11 42 0
191 -51 206 -70 3 -4 25 -19 50 -33 50 -29 124 -104 142 -142 6 -14 15 -25 20
-25 4 0 16 -16 25 -36 15 -30 21 -34 43 -29 14 4 36 16 50 29 24 21 108 79
174 121 18 11 46 30 62 43 59 46 156 114 180 124 13 6 24 15 24 19 0 4 19 18
43 32 23 14 51 33 62 41 11 9 30 24 43 33 l22 18 -19 50 c-24 61 -90 186 -105
200 -6 6 -24 30 -39 54 -45 68 -238 251 -266 251 -6 0 -11 4 -11 8 0 13 -161
99 -230 123 -36 12 -67 25 -70 29 -6 9 -168 47 -240 56 -30 4 -58 11 -61 17
-7 10 -392 19 -479 11z"
                  />
                  <path
                    d="M14800 8170 l0 -2260 460 0 460 0 2 1216 3 1215 162 -158 c88 -87
279 -273 424 -413 144 -140 331 -322 415 -405 84 -82 271 -265 415 -405 144
-140 362 -352 483 -471 122 -118 286 -279 366 -357 329 -320 308 -302 346
-302 l34 0 0 2265 0 2265 -460 0 -460 0 0 -1221 0 -1221 -142 139 c-162 158
-428 418 -702 684 -105 101 -225 218 -267 259 -42 41 -177 172 -299 290 -123
118 -275 267 -340 330 -65 63 -233 228 -375 365 -142 138 -303 294 -357 348
-87 85 -103 97 -133 97 l-35 0 0 -2260z"
                  />
                  <path
                    d="M6200 8125 l0 -2215 458 2 457 3 3 878 2 877 765 0 765 0 0 -874 c0
-788 2 -874 16 -880 9 -3 218 -6 465 -6 l449 0 0 2215 0 2215 -449 0 c-247 0
-456 -3 -465 -6 -14 -6 -16 -92 -16 -880 l0 -874 -765 0 -765 0 -2 878 -3 877
-457 3 -458 2 0 -2215z"
                  />
                  <path
                    d="M19180 8124 l0 -2215 818 4 c678 3 836 7 929 20 161 23 235 36 258
47 11 5 70 21 130 36 61 15 112 30 115 34 3 4 37 17 75 30 105 34 336 151 382
193 11 9 23 17 27 17 11 0 106 72 182 137 112 96 260 261 315 350 13 21 29 44
37 52 7 7 24 36 39 65 14 28 29 53 33 56 4 3 20 34 35 70 15 36 32 74 39 85 7
11 26 58 41 105 15 47 31 87 35 90 7 5 50 185 66 275 4 22 10 45 14 50 17 23
35 275 34 500 0 225 -14 434 -33 480 -5 11 -23 90 -41 175 -17 85 -35 157 -39
160 -5 3 -21 43 -36 90 -15 47 -34 94 -41 105 -7 11 -24 49 -39 85 -15 36 -31
67 -35 70 -4 3 -22 32 -39 65 -103 194 -361 471 -551 590 -24 15 -50 34 -57
41 -7 6 -34 22 -60 35 -26 12 -50 26 -53 30 -9 12 -194 96 -265 119 -38 13
-72 26 -75 30 -3 4 -54 19 -115 34 -60 15 -118 31 -127 36 -26 15 -277 48
-443 60 -82 5 -466 10 -852 10 l-703 0 0 -2216z m1665 1272 c44 -9 89 -20 100
-25 11 -5 54 -19 94 -31 95 -28 208 -81 288 -137 35 -24 67 -43 72 -43 11 0
167 -155 207 -206 17 -21 41 -59 55 -84 13 -25 27 -47 30 -50 11 -8 46 -83 59
-125 7 -22 16 -42 21 -45 10 -7 47 -149 55 -214 4 -28 12 -57 18 -65 15 -20
15 -483 0 -502 -6 -8 -15 -36 -18 -64 -10 -65 -46 -208 -55 -215 -4 -3 -19
-38 -35 -78 -15 -40 -34 -78 -41 -85 -7 -7 -22 -31 -33 -53 -11 -21 -33 -55
-49 -74 -52 -65 -205 -210 -244 -232 -22 -12 -39 -26 -39 -30 0 -5 -4 -7 -9
-4 -5 3 -14 0 -20 -8 -7 -8 -36 -24 -66 -36 -30 -12 -55 -26 -55 -30 0 -7
-129 -51 -195 -66 -16 -4 -32 -10 -35 -14 -3 -4 -45 -15 -95 -25 -72 -14 -157
-19 -422 -22 l-333 -5 0 1297 0 1297 333 -5 c243 -4 353 -9 412 -21z"
                  />
                  <path
                    d="M23400 8125 l0 -2215 460 0 460 0 0 2215 0 2215 -460 0 -460 0 0
-2215z"
                  />
                  <path
                    d="M25120 8125 l0 -2215 1345 0 1345 0 0 455 0 455 -885 0 -885 0 0
1760 0 1760 -460 0 -460 0 0 -2215z"
                  />
                  <path
                    d="M27211 10328 c0 -7 12 -36 27 -64 15 -28 42 -82 61 -120 19 -38 38
-71 42 -74 7 -5 24 -38 109 -206 19 -38 38 -71 41 -74 6 -5 57 -99 111 -203
14 -29 31 -58 38 -65 6 -7 25 -43 42 -79 16 -36 35 -72 43 -79 7 -7 23 -38 36
-69 12 -30 25 -55 29 -55 3 0 22 -33 41 -72 19 -40 37 -75 40 -78 3 -3 39 -67
80 -143 41 -75 91 -167 111 -205 20 -37 51 -96 68 -131 17 -35 37 -69 43 -76
7 -6 23 -36 37 -66 14 -30 29 -59 35 -65 5 -6 24 -40 40 -75 17 -35 33 -66 36
-69 7 -6 140 -253 185 -342 17 -33 38 -70 47 -82 16 -18 17 -100 17 -973 l0
-953 455 0 455 0 0 948 1 947 22 42 c69 130 90 169 96 173 3 3 21 38 40 78 19
39 38 72 41 72 4 0 17 25 29 55 13 31 29 62 36 69 8 7 28 42 45 77 17 35 48
94 68 130 20 37 54 100 76 140 21 41 41 76 45 79 3 3 17 29 31 59 14 30 30 59
36 65 5 6 25 44 44 84 18 39 36 72 40 72 4 0 18 24 30 54 12 29 29 62 37 73 9
11 30 48 47 81 45 89 178 336 185 342 3 3 21 38 40 78 19 39 38 72 41 72 4 0
17 25 29 55 13 31 29 61 35 68 7 7 26 39 43 72 40 81 105 199 112 205 3 3 21
38 40 78 19 39 38 72 41 72 7 0 30 60 30 78 0 9 -126 12 -515 12 l-515 0 -26
-57 c-13 -32 -28 -60 -33 -63 -4 -3 -20 -32 -35 -65 -15 -33 -30 -62 -34 -65
-4 -3 -38 -68 -77 -145 -38 -77 -72 -142 -76 -145 -4 -3 -20 -35 -37 -72 -17
-37 -35 -73 -41 -80 -6 -7 -40 -71 -76 -143 -36 -71 -69 -135 -74 -141 -6 -7
-24 -43 -41 -80 -17 -38 -34 -71 -39 -74 -4 -3 -20 -32 -35 -65 -15 -33 -30
-62 -34 -65 -4 -3 -34 -58 -66 -123 l-60 -118 -33 58 c-18 32 -40 77 -49 101
-9 23 -20 42 -24 42 -4 0 -20 28 -35 63 -15 34 -31 64 -34 67 -4 3 -38 68 -76
145 -39 77 -73 142 -77 145 -4 3 -22 37 -39 75 -18 39 -36 72 -40 75 -5 3 -20
33 -34 65 -15 33 -33 67 -40 75 -7 8 -25 44 -41 80 -16 36 -33 70 -39 76 -5 6
-21 35 -35 65 -14 30 -28 56 -32 59 -4 3 -22 37 -39 75 -17 39 -35 72 -39 75
-3 3 -23 40 -44 83 l-37 77 -514 0 c-406 0 -515 -3 -514 -12z"
                  />
                  <path
                    d="M35230 7110 c-8 -5 -47 -18 -87 -30 -39 -11 -79 -27 -87 -36 -9 -8
-16 -12 -16 -7 0 4 -4 3 -8 -2 -4 -6 -25 -22 -48 -38 -51 -34 -124 -119 -154
-177 -12 -25 -27 -47 -31 -51 -20 -12 -49 -165 -49 -254 0 -89 29 -242 49
-254 4 -4 19 -26 31 -51 36 -71 130 -169 194 -202 22 -11 45 -26 52 -33 7 -7
50 -23 96 -35 109 -29 287 -25 388 10 36 12 67 25 70 29 3 4 26 20 53 35 26
15 47 32 47 36 0 5 13 16 29 26 15 9 35 28 44 43 8 14 24 35 35 47 24 26 55
85 72 139 7 22 16 44 21 50 11 12 12 325 1 325 -5 0 -15 19 -22 43 -12 42 -47
118 -59 127 -3 3 -19 23 -35 44 -35 47 -98 105 -134 123 -15 8 -29 17 -32 21
-10 13 -78 40 -134 53 -31 8 -56 17 -56 21 0 11 -211 9 -230 -2z"
                  />
                </g>
              </svg>
            </Link>
            <button
              onClick={toggleTheme}
              className={`                ${
                theme === "light" ? "header-theme dark" : "header-theme light"
              }`}
              style={{ marginBottom: "90px" }}
            >
              {theme === "light" ? (
                <svg
                  fill="#000000"
                  viewBox="0 0 32 32"
                  version="1.0"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <title>moon</title>{" "}
                    <path d="M29.223 24.178l-0.021-0.057c-0.116-0.274-0.383-0.463-0.694-0.463-0.104 0-0.202 0.021-0.292 0.059l0.005-0.002c-1.272 0.542-2.752 0.857-4.306 0.857-6.213 0-11.25-5.037-11.25-11.25 0-4.66 2.833-8.658 6.871-10.366l0.074-0.028 0.211-0.089c0.267-0.118 0.45-0.381 0.45-0.687 0-0.375-0.276-0.686-0.635-0.74l-0.004-0.001c-0.653-0.103-1.407-0.161-2.174-0.161-8.145 0-14.748 6.603-14.748 14.748s6.603 14.748 14.748 14.748c4.748 0 8.973-2.244 11.67-5.73l0.025-0.034c0.097-0.125 0.155-0.285 0.155-0.458 0-0.127-0.031-0.246-0.086-0.351l0.002 0.004zM22.518 28.24c-1.497 0.637-3.238 1.007-5.066 1.007-7.317 0-13.249-5.932-13.249-13.249 0-7.074 5.543-12.853 12.523-13.23l0.034-0.001c-3.395 2.326-5.594 6.183-5.594 10.554 0 7.043 5.709 12.752 12.752 12.752 0.85 0 1.681-0.083 2.485-0.242l-0.081 0.013c-1.081 0.976-2.339 1.783-3.716 2.364l-0.087 0.033z"></path>{" "}
                  </g>
                </svg>
              ) : (
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <path
                      d="M12 16C9.7944 16 8 14.2056 8 12C8 9.7944 9.7944 8 12 8C14.2056 8 16 9.7944 16 12C16 14.2056 14.2056 16 12 16Z"
                      stroke="#000000"
                    ></path>{" "}
                    <path
                      d="M12 3.5V5.5"
                      stroke="#000000"
                      strokeLinecap="round"
                    ></path>{" "}
                    <path
                      d="M20.5 12H18.5"
                      stroke="#000000"
                      strokeLinecap="round"
                    ></path>{" "}
                    <path
                      d="M5.5 12H3.5"
                      stroke="#000000"
                      strokeLinecap="round"
                    ></path>{" "}
                    <path
                      d="M12 18.5V20.5"
                      stroke="#000000"
                      strokeLinecap="round"
                    ></path>{" "}
                    <path
                      d="M16.5 7.5L18 6"
                      stroke="#000000"
                      strokeLinecap="round"
                    ></path>{" "}
                    <path
                      d="M6 18L7.5 16.5"
                      stroke="#000000"
                      strokeLinecap="round"
                    ></path>{" "}
                    <path
                      d="M6 6L7.5 7.5"
                      stroke="#000000"
                      strokeLinecap="round"
                    ></path>{" "}
                    <path
                      d="M16.5 16.5L18 18"
                      stroke="#000000"
                      strokeLinecap="round"
                    ></path>{" "}
                  </g>
                </svg>
              )}
            </button>
          </header>
          <Nav />
          <Component key={router.pathname} {...pageProps} />
        </MouseContextProvider>
      </AnimatePresence>
    </>
  );
}