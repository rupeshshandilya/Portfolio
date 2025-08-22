import { useState, useEffect } from "react";
import Head from "next/head";
import Link from "next/link.js";
import Image from "next/image";

import { motion } from "framer-motion";
import { container, item } from "../animation";
import { useContext } from "react";
import { MouseContext } from "../context/mouseContext";

export default function about() {
  const { cursorChangeHandler } = useContext(MouseContext);

  const [age, setAge] = useState(0);

  useEffect(() => {
    const today = new Date();
    const birthDate = new Date(2003, 6, 12);

    var currentYear = today.getFullYear();
    var birthYear = birthDate.getFullYear();
    var ageInYears = currentYear - birthYear;

    if (
      birthDate.getMonth() > today.getMonth() ||
      (birthDate.getMonth() == today.getMonth() &&
        birthDate.getDate() > today.getDate())
    ) {
      setAge(ageInYears - 1);
    } else {
      setAge(ageInYears);
    }
  }, []);

  return (
    <>
      <Head>
        <title>Rupesh Shandilya | About</title>
        <meta
          name="description"
          content="
    I’m a FullStack Developer & Android Developer, I’m passionate about creating beautiful, intuitive and responsive websites and apps.
    "
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/illustrations/rupesh_69.svg" />
      </Head>
      <main className="about">
        <div className="page__lines"></div>
        <motion.div
          className="about-left"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <div
            style={{
              overflow: "hidden",
            }}
            className="about-left__title"
          >
            <motion.h2
              animate={{ y: 0, opacity: 1 }}
              initial={{ y: "50%", opacity: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
            >
              About
            </motion.h2>
          </div>
          <motion.p
            animate={{ y: 0, opacity: 1 }}
            initial={{ y: "15%", opacity: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="about-left__text"
          >
            Hey, I’m Rupesh 👋 A Computer Science Engineering student who loves
            building things on the web. I enjoy working on backend and
            full-stack projects, from crafting scalable APIs to designing smooth
            user experiences. Over the past few years, I’ve worked with Node.js,
            Nest.js, Next.js, Prisma, MongoDB, and PostgreSQL, building
            platforms that improved performance, security, and user engagement.
            I’m passionate about solving problems with clean code, exploring new
            tech, and turning ideas into real products. When I’m not coding, I’m
            usually learning something new in system design or experimenting
            with side projects.
          </motion.p>
          <div className="about-left__links">
            <motion.a
              variants={item}
              href="#"
              onMouseEnter={() => cursorChangeHandler("hovered")}
              onMouseLeave={() => cursorChangeHandler("")}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                />
              </svg>{" "}
              <Link
                href="https://drive.google.com/file/d/1uNPKr7sH8XngPgVGw8sybFcD3UcKx_Y1/view?usp=sharing"
                target="_blank"
              >
                Resume
              </Link>
            </motion.a>
          </div>
        </motion.div>
        <div className="about-right">
          <div className="about-right__image">
            <Image
              src="/images/me.png"
              alt="Rupesh-img"
              width={3024}
              height={4032}
            />
          </div>
        </div>
      </main>
    </>
  );
}
