import Head from "next/head";
import Link from "next/link.js";
import Image from "next/image";

import { motion } from "framer-motion";
import { container, item, skillsItem } from "../animation";
import { useContext, useState } from "react";
import { MouseContext } from "../context/mouseContext";

export default function Experience() {
  const { cursorChangeHandler } = useContext(MouseContext);
  interface Work {
    name: string;
    url?: string;
    position: string;
    date: string;
    description: string;
    stacks?: string[];
  }

  interface PersonalWork {
    name: string;
    url: string;
    image?: string;
  }

  const internships: Work[] = [
    {
      name: "EXPERIENCE AND ADAPT INDIA PRIVATE LIMITED",
      position: "Software Developer Intern",
      date: "Feb 2024 - May 2024",
      description:"Engineered a robust microservices architecture using Next.js in used Tailwind CSS and Nest.js and TypeScript for frontend to build microservices with individual databases using sharding for enhancing performance and scalability. Implemented Authentication Systems for user and seller microservice, focusing on secure data integrity and user veriSication. API Development for Product Listing Created updated, deleted, and fetched products in the product listing microservice, ensuring efSicient data handling and seamless integration with seller listings.",
      stacks: ["Nextjs", "NestJs", "Postgresql", "Tailwind CSS", "TypeScript"],
    },
    {
      name: "Sensei Mods",
      url: "https://www.senseimods.com/",
      position: "Back End Developer",
      date: "Mar 2022 - Aug 2022",
      description:
      "Using HTML, CSS, JS, and Django, I created and launched a gaming PC cable ordering website that expedited the shopping process and increased online sales by 40% in the Sirst month. Designed and oversaw the Django framework's integration, streamlining backend features for user authentication, product administration, and order processing",
      stacks: ["Html", "CSS", "JavaScript","Django"],
    },
  ];
  const Freelancing: Work[] = [
    {
      name: "M/s Prime Consulting",
      position: "Full Stack Developer",
      date: "Oct 2022 - Jan 2023",
      description:
      "Developed login and signup authentication and form for getting data of user and performed CRUD opertion on it and deployed that on private server so specific user can have access of it.Developed login and signup authentication and form for getting data of user and performed CRUD opertion on it and deployed that on private server so specific user can have access of it.",
      stacks: ["Html", "CSS", "JavaScript", "Django"],
    },
    {
      name: "DGFT Guru",
      url: "https://www.dgftguru.com/",
      position: "Wordpress Developer",
      date: "April 2021 - Sep 2021",
      description: "Developed a Website in Wordpress",
      stacks: ["Wordpress"],
    },
  ];
  const sideProjects: PersonalWork[] = [
    {
      name: "Encrypto",
      url: "https://github.com/rupeshshandilya/Encrypto",
      image: "/project/encrypto.jpeg",
    },
    {
      name: "TheXpressSalon",
      url: "https://github.com/rupeshshandilya/xpress",
      image: "/project/TheXpressSalon.png",
    },
    {
      name: "FluentFriend",
      url: "https://github.com/rupeshshandilya/fluentFriend-Frontend",
      // image: "/project/encrypto.jpeg",
    },
    {
      name: "Sorting Visualizer",
      url: "https://github.com/rupeshshandilya/Sorting-Visualizer",
      image: "/project/SortingVisualizer.png",
    },
    
  ];

  const [imageUrl, setImageUrl] = useState("");
  const [imageName, setImageName] = useState("");
  const handleMouseEnter = (url: string, name: string) => {
    setImageUrl(url);
    setImageName(name);
  };
  const handleMouseLeave = () => {
    setImageUrl("");
    setImageName("");
  };

  return (
    <>
      <Head>
        <title>Rupesh Shandilya | Experience</title>
        <meta
          name="description"
          content="
          I’m a FullStack Developer & Android Developer, I’m passionate about creating beautiful, intuitive and responsive websites and apps.      
        "
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/illustrations/rupesh_69.svg" />
      </Head>
      <main className="experience">
        <div className="page__lines"></div>
        <motion.div
          className="experience-internship"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <div
            className="experience-internship__title"
            style={{ overflow: "hidden" }}
          >
            <motion.h2
              animate={{ y: 0, opacity: 1 }}
              initial={{ y: "50%", opacity: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
            >
              Internships
            </motion.h2>
          </div>
          <div className="experience-internship__cards">
            {internships.map((internship, index) => (
              <motion.div className="card" key={index} variants={skillsItem}>
                <div className="card-header">
                  <div className="card-header__left">
                    <h3>{internship.name}</h3>
                    <p>{internship.position}</p>
                  </div>
                  <div className="card-header__right">
                    <h3>{internship.date}</h3>
                  </div>
                </div>
                <div className="card-description">
                  <p>{internship.description}</p>
                </div>
                {internship.stacks && (
                  <div className="card-stacks">
                    {internship.stacks.map((item) => {
                      return <button>{item}</button>;
                    })}
                  </div>
                )}
                <div className="card-footer">
                  {internship.url ? (
                    <Link
                      href={internship.url}
                      passHref
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
                      </svg>
                      <span>Website</span>
                    </Link>
                  ): (
                    <div
                      onMouseEnter={() => cursorChangeHandler("hovered")}
                      onMouseLeave={() => cursorChangeHandler("")}
                    >
                      <span>In Developement</span>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
        <motion.div
          className="experience-internship"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <div
            className="experience-internship__title"
            style={{ overflow: "hidden" }}
          >
            <motion.h2
              animate={{ y: 0, opacity: 1 }}
              initial={{ y: "50%", opacity: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
            >
              Freelancing
            </motion.h2>
          </div>
          <div className="experience-internship__cards">
            {Freelancing.map((Freelancing, index) => (
              <motion.div className="card" key={index} variants={skillsItem}>
                <div className="card-header">
                  <div className="card-header__left">
                    <h3>{Freelancing.name}</h3>
                    <p>{Freelancing.position}</p>
                  </div>
                  <div className="card-header__right">
                    <h3>{Freelancing.date}</h3>
                  </div>
                </div>
                <div className="card-description">
                  <p>{Freelancing.description}</p>
                </div>
                {Freelancing.stacks && (
                  <div className="card-stacks">
                    {Freelancing.stacks.map((item) => {
                      return <button>{item}</button>;
                    })}
                  </div>
                )}
                <div className="card-footer">
                  {Freelancing.url && (
                    <Link
                      href={Freelancing.url}
                      passHref
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
                      </svg>
                      <span>Website</span>
                    </Link>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
        <motion.div
          className="experience-personal"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <div
            className="experience-personal__title"
            style={{ overflow: "hidden" }}
          >
            <motion.h2
              animate={{ y: 0, opacity: 1 }}
              initial={{ y: "50%", opacity: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
            >
              Projects
            </motion.h2>
          </div>
          <div className="experience-personal__cards">
            <div className="personal-view">
              {imageUrl && (
                <div className="personal-view__image">
                  <Image
                    src={imageUrl}
                    alt={imageName}
                    width={2880}
                    height={1576}
                  />
                </div>
              )}
            </div>
            <ul className="personal-lists">
              {sideProjects.map((project, index) => (
                <motion.li key={index} variants={skillsItem}>
                  <Link
                    href={project.url}
                    passHref
                    onMouseEnter={() => {
                      cursorChangeHandler("hovered");
                      handleMouseEnter(project.image ?? "", project.name);
                    }}
                    onMouseLeave={() => {
                      cursorChangeHandler("");
                      handleMouseLeave();
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={5}
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                      />
                    </svg>
                    <span>{project.name}</span>
                  </Link>
                </motion.li>
              ))}
              <h3>
                <Link
                  href="https://github.com/rupeshshandilya?tab=repositories"
                  passHref
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
                  </svg>
                  <span>See more on GitHub</span>
                </Link>
              </h3>
            </ul>
          </div>
        </motion.div>
      </main>
    </>
  );
}