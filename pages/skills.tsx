import Head from "next/head";
import Image from "next/image";

import { motion } from "framer-motion";
import { container, skillsItem } from "../animation";

export default function Skills() {
  interface Skill {
    url: string;
    name: string;
    color: string;
    colorRGB: string;
    isBgBlack?: boolean;
  }
  interface SkillSection {
    title: string;
    skills: Skill[];
  }

  interface Certifications {
    name: string;
    url: string;
  }
  const allSkills: SkillSection[] = [
    {
      title: "Web Development",
      skills: [
        {
          url: "https://www.svgrepo.com/show/452228/html-5.svg",
          name: "Html",
          color: "#RRGGBB",
          colorRGB: "56, 178, 172",
          isBgBlack: true,
        },
        {
          url: "https://www.svgrepo.com/show/452185/css-3.svg",
          name: "CSS",
          color: "#231572B6",
          colorRGB: "56, 178, 172",
          isBgBlack: true,
        },
        {
          url: "https://www.svgrepo.com/show/353925/javascript.svg",
          name: "JavaScript",
          color: "#F7DF1E",
          colorRGB: "247, 223, 30",
        },
        {
          url: "https://www.svgrepo.com/show/354478/typescript-icon.svg",
          name: "TypeScript",
          color: "#3178C6",
          colorRGB: "49, 120, 198",
        },
        {
          url: "https://www.svgrepo.com/show/354259/react.svg",
          name: "React",
          color: "#61DAFB",
          colorRGB: "97, 218, 251",
        },
        {
          url: "https://www.svgrepo.com/show/369457/nextjs.svg",
          name: "NextJS",
          color: "#000000",
          colorRGB: "0, 0, 0",
          isBgBlack: true,
        },
        {
          url: "https://www.svgrepo.com/show/374118/tailwind.svg",
          name: "TailwindCSS",
          color: "#38B2AC",
          colorRGB: "56, 178, 172",
        },
        {
          url: "https://www.svgrepo.com/show/376337/node-js.svg",
          name: "Nodejs",
          color: "#215732",
          colorRGB: "56, 178, 172",
          isBgBlack: true,
        },
        {
          url: "https://www.svgrepo.com/show/353657/django-icon.svg",
          name: "Django",
          color: "#092e20",
          colorRGB: "56, 178, 172",
          isBgBlack: true,
        },
      ],
    },
    {
      title: "Android Development",
      skills: [
        {
          url: "https://www.svgrepo.com/show/373728/kotlin.svg",
          name: "Kotlin",
          color: "#000000",
          colorRGB: "0, 0, 0",
          isBgBlack: true,
        },
      ],
    },
    {
      title: "Deployment",
      skills: [
        {
          url: "https://www.svgrepo.com/show/378475/vercel-fill.svg",
          name: "Vercel",
          color: "#000000",
          colorRGB: "0, 0, 0",
          isBgBlack: true,
        },
        {
          url: "https://www.svgrepo.com/show/448266/aws.svg",
          name: "AWS",
          color: "#000000",
          colorRGB: "0, 0, 0",
          isBgBlack: true,
        },
      ],
    },
    {
      title: "Other",
      skills: [
        {
          url: "https://www.svgrepo.com/show/452210/git.svg",
          name: "Git",
          color: "#F05032",
          colorRGB: "240, 80, 50",
        },
        {
          url: "https://www.svgrepo.com/show/452202/figma.svg",
          name: "Figma",
          color: "#F24E1E",
          colorRGB: "242, 78, 30",
        },
        {
          url: "https://www.svgrepo.com/show/373595/firebase.svg",
          name: "Firebase",
          color: "#FFCA28",
          colorRGB: "255, 202, 40",
        },
        {
          url: "https://www.svgrepo.com/show/354090/mongodb.svg",
          name: "MongoDB",
          color: "#589636",
          colorRGB: "255, 202, 40",
          isBgBlack: true,
        },
        {
          url: "https://www.svgrepo.com/show/448253/terraform.svg",
          name: "Terraform",
          color: "#844FBA",
          colorRGB: "255, 202, 40",
        },
        {
          url: "https://www.svgrepo.com/show/508898/bash01.svg",
          name: "ShellScript",
          color: "#121011",
          colorRGB: "255, 202, 40",
          isBgBlack: true,
        },
      ],
    },
  ];
  // const certifications: Certifications[] = [
  //   {
  //     name: "Data Structures in C++",
  //     url: "http://files.codingninjas.in/certificate17296140a4e5203dabc7151e5fb556d6793f488.pdf",
  //   },
  // ];
  return (
    <>
      <Head>
        <title>Rupesh Shandilya | Skills</title>
        <meta
          name="description"
          content="
          I’m a FullStack Developer & Android Developer, I’m passionate about creating beautiful, intuitive and responsive websites and apps.
          "
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="skills">
        <div className="page__lines"></div>
        {allSkills.map((skill, index) => (
          <motion.div
            className="skills-section"
            key={index}
            variants={container}
            initial="hidden"
            animate="show"
          >
            <div
              className="skills-section__title"
              style={{ overflow: "hidden" }}
            >
              <motion.h2
                animate={{ y: 0, opacity: 1 }}
                initial={{ y: "50%", opacity: 0 }}
                transition={{ delay: 0.1, duration: 0.5 }}
              >
                {skill.title}
              </motion.h2>
            </div>
            <div className="skills-section__cards">
              {skill.skills.map((skill, index) => (
                <div
                  style={{
                    overflow: "hidden",
                  }}
                >
                  <motion.div
                    className={skill.isBgBlack ? "card card-black" : "card"}
                    key={index}
                    variants={skillsItem}
                  >
                    <div
                      className="card-icon"
                      style={{
                        backgroundColor: `rgba(${skill.colorRGB}, .1)`,
                        border: `1px solid ${skill.color}`,
                      }}
                    >
                      <Image
                        src={skill.url}
                        alt={skill.name}
                        width={50}
                        height={50}
                      />
                    </div>
                    <h3
                      style={{
                        color: skill.color,
                      }}
                    >
                      {skill.name}
                    </h3>
                  </motion.div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </main>
    </>
  );
}
