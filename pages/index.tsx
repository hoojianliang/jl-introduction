import type { NextPage } from "next";
import { motion, Variants } from "framer-motion";
import Image from "next/image";

const Home: NextPage = () => {
  const experiences = [
    {
      from: "2022",
      to: "present",
      src: "/images/razer.png",
      alt: "razer",
      company: "Razer Inc.",
      position: "Web Developer",
      descriptions: [
        "Managed Razer Gold website based on client and merchant requirements in multiple regions and languages.",
        "In charge of Razer gold webshop flow.",
      ],
    },
    {
      from: "2020",
      to: "2022",
      src: "/images/rigel.jpg",
      alt: "rigel",
      company: "Rigel Technology (S) Pte Ltd",
      position: "Web Application Developer",
      descriptions: [
        "Work in tandem with a team of mechanical, electronics and design engineers to create and integrate products with IoT.",
        "Build and design in house web applications with a focus on user experience, security and scalability by using Laravel and VueJS.",
        "Develop mobile apps by using React Native.​",
      ],
    },
    {
      from: "2018",
      to: "2020",
      src: "/images/aviationlearn.jpg",
      alt: "aviationlearn",
      company: "Aviationlearn Pte Ltd",
      position: "Software Developer",
      descriptions: [
        "Develop a website by using WordPress CMS and Lumen API.",
        "Work with Project Manager to attend tender meetings and timeline planning for web related projects.",
        "Work with clients in Microsoft Azure Cloud Computing Services.",
      ],
    },
    {
      from: "2017",
      to: "2018",
      src: "/images/izeno.png",
      alt: "izeno",
      company: "iZeno Pte Ltd",
      position: "Java Developer",
      descriptions: [
        "Work as vendor to enhance Java Web Application (Prudential eRecruitment System) by using Spring Framework and AngularJS.",
      ],
    },
    {
      from: "2015",
      to: "2017",
      src: "/images/worldtop.jpg",
      alt: "worldtop",
      company: "WorldTop Empire Sdn. Bhd.",
      position: "Back End Developer",
      descriptions: [
        "Developed multiple Java standalone monitoring systems.",
        "Developed Forex Broker Service Application in PHP.",
      ],
    },
  ];

  const cardVariants: Variants = {
    offscreen: {
      y: 300,
    },
    onscreen: {
      y: 0,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8,
      },
    },
  };

  return (
    <div>
      <figure className="md:flex m-4 p-4 gap-8 rounded-xl bg-secondary/50 dark:bg-dark-secondary/50 shadow-md shadow-secondary dark:shadow-dark-secondary">
        <div className="flex justify-center self-center">
          <Image
            priority
            src="/images/profile.jpg"
            className="rounded-full"
            height={180}
            width={180}
            alt="handsome"
          />
        </div>
        <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
          <blockquote>
            <motion.p
              animate={{ x: [0, 150, 0], opacity: 1, scale: 1 }}
              transition={{
                duration: 2,
                ease: "easeInOut",
              }}
              initial={{ opacity: 0, scale: 1 }}
              className="text-lg font-medium text-accent/75 dark:text-dark-accent/75"
            >
              "I am a developer, I create bug not quote."
            </motion.p>
          </blockquote>
          <figcaption className="font-medium">
            <div className="text-accent dark:text-dark-accent">
              Hoo Jian Liang
            </div>
            <div className="text-xs text-accent/75 dark:text-dark-accent/75">
              Web developer
            </div>
            <div className="flex md:justify-start justify-center items-center py-2 space-x-2 text-accent/75 dark:text-dark-accent/75">
              {/*<!-- Linkedin -->*/}
              <a
                href={`https://www.linkedin.com/in/hoo-jian-liang-2872a6134/`}
                aria-label="Linkedin"
                target="_blank"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                  className="w-5 h-5"
                >
                  <path
                    fill="currentColor"
                    d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"
                  />
                </svg>
              </a>
              {/*<!-- Github -->*/}
              <a
                href={`https://github.com/hoojianliang`}
                aria-label="Github"
                target="_blank"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 496 512"
                  className="w-5 h-5"
                >
                  <path
                    fill="currentColor"
                    d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
                  />
                </svg>
              </a>
              {/*<!-- Email -->*/}
              <a href={`mailto:hoojianliang@gmail.com`} aria-label="Email">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                  />
                </svg>
              </a>
            </div>
          </figcaption>
        </div>
      </figure>
      <div className="flex lg:flex-row flex-col m-4 p-4 gap-8">
        <div>
          <h2>Introverted Developer</h2>
          <div className="m-4 text-accent/75 dark:text-dark-accent/75">
            <p>
              My name is Hoo Jian Liang, a Software Developer with a total of 7
              years work experience, previously worked as full stack developer
              and currently working as Frontend Web Developer in Razer Inc.
              under Razer Gold department.
            </p>
            <p>
              I choose to be a frontend developer because frontend is
              interesting, I loved and used to build responsive websites.
            </p>
            <p>Please deep dive into webpage to study about me.</p>
          </div>
        </div>
      </div>
      <div className="m-4">
        <h3>My Skills</h3>
        <div className="font-mono grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-4">
          <div className="p-4 rounded-xl bg-secondary/50 dark:bg-dark-secondary/50 shadow-md shadow-secondary dark:shadow-dark-secondary">
            <p>
              <span className="px-2 py-1 text-xs font-bold rounded bg-dark-primary dark:bg-primary text-dark-accent dark:text-accent">
                FRONTEND
              </span>
            </p>
            <ul className="text-accent/75 dark:text-dark-accent/75">
              <li>HTML</li>
              <li>CSS</li>
              <li>
                <ul>
                  <li>Preprocessor - SASS</li>
                  <li>PostCSS - Tailwind CSS</li>
                </ul>
              </li>
              <li>Javascript</li>
              <li>
                <ul>
                  <li>jQuery</li>
                  <li>React</li>
                  <li>Vue.js</li>
                  <li>React Native</li>
                  <li>Next.js</li>
                </ul>
              </li>
              <li>State Management</li>
              <li>
                <ul>
                  <li>Redux</li>
                  <li>Vuex</li>
                </ul>
              </li>
              <li>Webpack</li>
            </ul>
          </div>
          <div className="p-4 rounded-xl bg-secondary/50 dark:bg-dark-secondary/50 shadow-md shadow-secondary dark:shadow-dark-secondary">
            <p>
              <span className="px-2 py-1 text-xs font-bold rounded bg-dark-primary dark:bg-primary text-dark-accent dark:text-accent">
                BACKEND
              </span>
            </p>
            <ul className="text-accent/75 dark:text-dark-accent/75">
              <li>Java (Java SE 8)</li>
              <li>
                <ul>
                  <li>Spring</li>
                  <li>SpringBoot</li>
                </ul>
              </li>
              <li>PHP</li>
              <li>
                <ul>
                  <li>Lumen</li>
                  <li>Laravel</li>
                </ul>
              </li>
              <li>Redis</li>
              <li>NodeJS</li>
              <li>
                <ul>
                  <li>Express</li>
                </ul>
              </li>
            </ul>
          </div>
          <div className="p-4 rounded-xl bg-secondary/50 dark:bg-dark-secondary/50 shadow-md shadow-secondary dark:shadow-dark-secondary">
            <p>
              <span className="px-2 py-1 text-xs font-bold rounded bg-dark-primary dark:bg-primary text-dark-accent dark:text-accent">
                OTHERS
              </span>
            </p>
            <ul className="text-accent/75 dark:text-dark-accent/75">
              <li>Database</li>
              <li>
                <ul>
                  <li>MySql</li>
                  <li>Postgresql</li>
                  <li>MongoDB</li>
                </ul>
              </li>
              <li>Cloud Computing Services</li>
              <li>
                <ul>
                  <li>AWS</li>
                  <li>Microsoft Azure</li>
                </ul>
              </li>
              <li>Linux Ubuntu</li>
              <li>MQTT</li>
              <li>Jira</li>
              <li>Version Control System</li>
              <li>
                <ul>
                  <li>Git</li>
                  <li>SVN</li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="m-4">
        <h3>My Working Experiences</h3>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <div>
            <div className="rounded-xl p-6 text-accent/75 dark:text-dark-accent/75 border border-secondary dark:border-dark-secondary shadow-md shadow-secondary dark:shadow-dark-secondary">
              <p>
                In short I had a total of 7 years work experience in both the
                SME and MNC sector.
              </p>
              <p>
                In SME, I handle multiple projects simultaneously which greatly
                expands my technical knowledge and improves my time management
                skills.
              </p>
              <p>
                In MNC, I code with best practice and given proper training.
              </p>
              <p>
                I believe I will continuously improve in both hard skills or
                soft skills.
              </p>
            </div>
          </div>
          <div className="rounded-xl lg:col-span-2 grid grid-cols-1 gap-4 divide-y divide-accent/20 dark:divide-dark-accent/20 border border-secondary/50 dark:border-dark-secondary/50 shadow-md shadow-secondary dark:shadow-dark-secondary">
            {experiences.map((item) => (
              <div
                key={item.alt}
                className="flex p-4 gap-4 text-accent/75 dark:text-dark-accent/75"
              >
                <div className="shrink-0 w-28">
                  <p className="text-center font-semibold">
                    {item.from} - {item.to}
                  </p>
                  <motion.div
                    initial="offscreen"
                    whileInView="onscreen"
                    viewport={{ once: true, amount: 0.8 }}
                  >
                    <motion.div
                      className="flex justify-center"
                      variants={cardVariants}
                    >
                      <div
                        style={{ width: "80px", height: "80px" }}
                        className="shadow-md shadow-secondary dark:shadow-dark-secondary"
                      >
                        <Image
                          src={item.src}
                          alt={item.alt}
                          height={80}
                          width={80}
                        />
                      </div>
                    </motion.div>
                  </motion.div>
                </div>
                <div>
                  <p className="font-semibold">{item.company}</p>
                  <p>{item.position}</p>
                  <ul className="list-disc">
                    {item.descriptions.map((description, key) => (
                      <li key={key}>{description}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
