import { motion } from "framer-motion";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useRouter } from "next/router";

type ProjectProp = {
  [key: string]: any;
  title: string;
  links?: {
    web?: string;
    android?: string;
    ios?: string;
  };
  languages: string[];
};

interface SvgComponentProp {
  type: string;
}

function SvgComponent(props: SvgComponentProp): JSX.Element {
  const { type } = props;
  switch (type) {
    case "android":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          className="w-5 h-5"
        >
          <path
            fill="currentColor"
            d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"
          />
        </svg>
      );
      break;
    case "ios":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
          className="w-5 h-5"
        >
          <path
            fill="currentColor"
            d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM127 384.5c-5.5 9.6-17.8 12.8-27.3 7.3-9.6-5.5-12.8-17.8-7.3-27.3l14.3-24.7c16.1-4.9 29.3-1.1 39.6 11.4L127 384.5zm138.9-53.9H84c-11 0-20-9-20-20s9-20 20-20h51l65.4-113.2-20.5-35.4c-5.5-9.6-2.2-21.8 7.3-27.3 9.6-5.5 21.8-2.2 27.3 7.3l8.9 15.4 8.9-15.4c5.5-9.6 17.8-12.8 27.3-7.3 9.6 5.5 12.8 17.8 7.3 27.3l-85.8 148.6h62.1c20.2 0 31.5 23.7 22.7 40zm98.1 0h-29l19.6 33.9c5.5 9.6 2.2 21.8-7.3 27.3-9.6 5.5-21.8 2.2-27.3-7.3-32.9-56.9-57.5-99.7-74-128.1-16.7-29-4.8-58 7.1-67.8 13.1 22.7 32.7 56.7 58.9 102h52c11 0 20 9 20 20 0 11.1-9 20-20 20z"
          />
        </svg>
      );
      break;
    case "web":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
          />
        </svg>
      );
      break;
    default:
      return <span>{type}</span>;
  }
}

export default function Projects() {
  const router = useRouter();
  const { t } = useTranslation("common");

  const projects = {
    2022: [
      {
        en: {
          associated: "Razer Inc.",
          tags: ["Enhancement Project", "Team"],
          description:
            "Razer Gold is a virtual credit backed by Razer for gamers. Reload Razer Gold and spend with our Partners to enjoy great offers, promotions, and earn Razer Silver.",
        },
        "zh-CN": {
          associated: "Razer Inc.",
          tags: ["改进项目", "团队"],
          description:
            "Razer Gold 是雷蛇为游戏玩家提供的虚拟币。充值 Razer Gold 并在我们的合作伙伴平台上使用，您即可享受相关优惠、参加促销活动，并赚取 Razer Silver。",
        },
        title: "Razer Gold",
        links: {
          web: "https://gold.razer.com/",
        },
        languages: [
          "HTML",
          "Javascript",
          "Vue.js",
          "Vuex",
          "CSS",
          "Sass",
          "BootstrapVue",
          "NodeJS",
          "Express",
        ],
      },
    ],
    2021: [
      {
        en: {
          associated: "Self- Learning",
          tags: ["Build From Scratch", "Alone"],
          description: "A offline notification system act like alarms.",
        },
        "zh-CN": {
          associated: "自学",
          tags: ["从头构建", "单独"],
          description: "类似警报一样的离线通知系统。",
        },
        title: "Smart Offline Notification",
        links: {
          android: "https://play.google.com/store/apps/details?id=com.hi.sna",
        },
        languages: ["React Native", "Redux", "CSS", "Tailwind CSS"],
      },
      {
        en: {
          associated: "Aviationlearn Pte Ltd",
          tags: ["Build From Scratch", "Team"],
          description:
            "Rigel IoT Panel is placed in public toilets for public users to review and notify faulty in toilets. Faulty sent will push notification to assigned cleaners or technicians through Rigel IoT Application.",
        },
        "zh-CN": {
          associated: "Aviationlearn Pte Ltd",
          tags: ["从头构建", "团队"],
          description:
            "Rigel物联网面板被放置在公共厕所，供公众用户查看和通知厕所故障。 发送的故障将通过 Rigel IoT 应用程序向指定的清洁工或技术人员推送通知。",
        },
        title: "Rigel IOT Panel",
        languages: ["React Native", "Redux", "CSS", "Tailwind CSS"],
      },
      {
        en: {
          associated: "Rigel Technology (S) Pte Ltd",
          tags: ["Build From Scratch", "Team"],
          description:
            "Rigel IoT Application is used by building managers, technicians and cleaners to manage and receive faulty notifications.",
        },
        "zh-CN": {
          associated: "Rigel Technology (S) Pte Ltd",
          tags: ["从头构建", "团队"],
          description:
            "楼宇经理、技术人员和清洁工使用 Rigel IoT 应用程序来管理和接收错误通知。",
        },
        title: "Rigel IOT Application",
        links: {
          android:
            "https://play.google.com/store/apps/details?id=com.rigel.iotmobile",
          ios: "https://apps.apple.com/my/app/rigel-iot/id1534415072",
        },
        languages: ["React Native", "Redux", "CSS", "Tailwind CSS"],
      },
      {
        en: {
          associated: "Rigel Technology (S) Pte Ltd",
          tags: ["Build From Scratch", "Team"],
          description:
            "Rigel IoT Dashboard is an in-house web application built to let customers manage their toilet more effectively by receiving live update device data.",
        },
        "zh-CN": {
          associated: "Rigel Technology (S) Pte Ltd",
          tags: ["从头构建", "团队"],
          description:
            "Rigel IoT 仪表板是一个内部网络的应用程序，旨在让客户接收实时数据让其更有效地管理他们的厕所。",
        },
        title: "Rigel IOT Dashboard",
        languages: [
          "HTML",
          "Javascript",
          "Vue.js",
          "Vuex",
          "CSS",
          "Bootstrap",
          "Sass",
          "PHP",
          "Laravel",
          "NodeJS",
          "Redis",
          "MySQL",
          "MQTT",
        ],
      },
    ],
    2019: [
      {
        en: {
          associated: "Aviationlearn Pte Ltd",
          tags: ["Build From Scratch", "Team"],
          description:
            "Revamp of Singapore Turf Club Racing Portal which was developed using WordPress CMS by creating lots of personal plugins and widgets.",
        },
        "zh-CN": {
          associated: "Aviationlearn Pte Ltd",
          tags: ["从头构建", "团队"],
          description:
            "改造新加坡赛马公会赛马门户网站，通过创建大量个人插件和小部件，以 WordPress CMS 实行开发。",
        },
        title: "STC Racing Portal",
        links: {
          web: "https://racing.turfclub.com.sg/en/home-page/",
        },
        languages: [
          "HTML",
          "Javascript",
          "jQUery",
          "CSS",
          "Bootstrap",
          "PHP",
          "Lumen",
          "Microsoft Azure",
          "MySQL",
        ],
      },
    ],
    2018: [
      {
        en: {
          associated: "iZeno Pte Ltd",
          tags: ["Enhancement Project", "Alone"],
          description:
            "Prudential Erecruitment System which included admin and public user platform which was developed by using Spring MVC and AngularJS.",
        },
        "zh-CN": {
          associated: "iZeno Pte Ltd",
          tags: ["改进项目", "单独"],
          description:
            "Prudential Erecruitment System 包括管理员和公共用户平台，是以 Spring MVC 和 AngularJS 来实行开发的。",
        },
        title: "Prudential Erecruitment System",
        languages: [
          "HTML",
          "Javascript",
          "AngularJS",
          "CSS",
          "Java",
          "Spring",
          "PostgreSQL",
        ],
      },
    ],
    2017: [
      {
        en: {
          associated: "Freelance",
          tags: ["Build From Scratch", "Team"],
          description:
            "Special Edition of Mobile Top Up Receipt Printing System which was developed by NodeJS and JS to meet client requirements in order to print whole excel sheet row by row which will pause if out of paper and resume after paper top up.",
        },
        "zh-CN": {
          associated: "自由职业",
          tags: ["从头构建", "团队"],
          description:
            "以满足客户的需求，由NodeJS和JS开发的特别版移动充值收据打印系统，以逐行打印整个excel表，缺纸暂停，填纸后恢复。",
        },
        title: "Mobile Top Up Receipt Printing System",
        languages: [
          "HTML",
          "Javascript",
          "jQUery",
          "CSS",
          "Bootstrap",
          "NodeJS",
        ],
      },
    ],
    2016: [
      {
        en: {
          associated: "Self- Learning",
          tags: ["Build From Scratch", "Alone"],
          description:
            "This project is developed because of my study purpose in Git and advanced JavaScript. It is a simple events/festivals calendar with responsive design by using default gh-pages provided by github. Moreover, flexible events/festivals can be edited in javascripts/todayis.js.",
        },
        "zh-CN": {
          associated: "自学",
          tags: ["从头构建", "单独"],
          description:
            "这个项目是我以学习 Git 和高级 JavaScript 的目的而开发的。 它是一个简单的活动/节日日历，使用 github 提供的默认 gh-pages 进行响应式设计。 此外还可以在 javascripts/todayis.js 中灵活编辑活动/节日。",
        },
        title: "Todayis ???",
        links: {
          web: "https://github.com/theo92hoo/todayis",
        },
        languages: ["HTML", "Javascript", "jQUery", "CSS", "Bootstrap"],
      },
      {
        en: {
          associated: "Freelance",
          tags: ["Build From Scratch", "Team"],
          description:
            "A freelance project worked with a master's student in electronic engineering to manage hospital query by fast, reliability, mobile friendly and creative layout which was developed in NodeJS(back-end) and JS(front-end) by connecting to some electronic devices, such as raspberry pi, television, mobile and etc.",
        },
        "zh-CN": {
          associated: "自由职业",
          tags: ["从头构建", "团队"],
          description:
            "一个与电子工程专业的硕士生合作的自由项目，使用 NodeJS（后端）和 JS（前端）再通过连接一些电子设备例如树莓派、电视、手机等实行开发。并提供快速、可靠、移动友好和创造性的布局来管理医院查询系统。",
        },
        title: "Pantai Hospital Query Management System",
        languages: [
          "HTML",
          "Javascript",
          "jQUery",
          "CSS",
          "Bootstrap",
          "NodeJS",
          "MySQL",
        ],
      },
      {
        en: {
          associated: "WorldTop Empire Sdn. Bhd.",
          tags: ["Build From Scratch", "Alone"],
          description:
            "Multiple Java standalone system likes copy trade monitor system and record mapping system to help in monitor multiples broker connection and features.",
        },
        "zh-CN": {
          associated: "WorldTop Empire Sdn. Bhd.",
          tags: ["从头构建", "单独"],
          description:
            "多个以 Java 构建的独立系统，如复制交易监控系统和记录映射系统，以帮助监控多个经纪商的连接和功能。",
        },
        title: "Java monitoring systems",
        languages: ["Java", "MySQL"],
      },
      {
        en: {
          associated: "WorldTop Empire Sdn. Bhd.",
          tags: ["Build From Scratch", "Enhancement Project", "Team"],
          description:
            "Multiple forex brokers built in php by providing features like member registration, subscription, copy trade, etc.",
        },
        "zh-CN": {
          associated: "WorldTop Empire Sdn. Bhd.",
          tags: ["从头构建", "改进项目", "团队"],
          description:
            "多个以 php 构建的外汇经纪商，并提供会员注册、订阅、复制交易等功能。",
        },
        title: "Php forex broker web applications",
        languages: [
          "HTML",
          "Javascript",
          "jQUery",
          "CSS",
          "Bootstrap",
          "PHP",
          "MySQL",
        ],
      },
    ],
    2015: [
      {
        en: {
          associated: "University Malaysia Terengganu (UMT)",
          tags: ["Build From Scratch", "Alone"],
          description:
            "My FYP in UMT is a source code plagiarism detection system in helping  Information Technology's (IT) lecturer for identifying plagiarism between student's programming. Students are allowed to upload files online and lecturers are able to check the  plagiarism results among students.",
        },
        "zh-CN": {
          associated: "University Malaysia Terengganu (UMT)",
          tags: ["从头构建", "单独"],
          description:
            "我在 UMT 的毕业项目是一个源代码抄袭检测系统，可帮助信息技术 (IT) 讲师识别学生编程之间的抄袭。 学生可以在线上传文件，讲师则可以查看学生的抄袭结果。",
        },
        title: "Programming Similarity Checking System (FYP)",
        links: {
          web: "https://www.researchgate.net/publication/323410023_Programming_Similarity_Checking_System",
        },
        languages: [
          "HTML",
          "Javascript",
          "jQUery",
          "CSS",
          "Java",
          "Servlet",
          "JSP",
          "MySQL",
        ],
      },
    ],
  };

  return (
    <div>
      <div className="m-4">
        {Object.entries(projects)
          .sort()
          .reverse()
          .map(([key, project]: [string, ProjectProp[]]) => (
            <div key={key} className="my-8">
              <div className="-translate-y-3 -translate-x-1">
                <motion.span
                  animate={{
                    scale: [1, 1.5, 1],
                    rotate: [-14, -360, -45],
                  }}
                  className="absolute -rotate-45 p-4 font-bold bg-dark-secondary dark:bg-secondary text-dark-accent dark:text-accent"
                >
                  {key}
                </motion.span>
              </div>
              <ul className="flex-grow mx-12">
                {project.map((item: any, index: number) => (
                  <li
                    key={index}
                    className="p-4 border border-secondary/50 dark:border-dark-secondary/50 shadow-md shadow-secondary dark:shadow-dark-secondary text-accent/75 dark:text-dark-accent/75"
                  >
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-2">
                      <div>
                        <p className="font-bold text-accent dark:text-dark-accent">
                          {item.title}
                        </p>
                        <p className="text-sm">
                          {t("projects.associated_with", {
                            associated: item[router.locale || "en"].associated,
                          })}
                        </p>
                        <div className="flex flex-wrap font-mono text-xs gap-2">
                          {item[router.locale || "en"].tags.map(
                            (tag: string) => (
                              <span
                                key={tag}
                                className="p-2 rounded-md bg-secondary/50 dark:bg-dark-secondary/50"
                              >
                                {tag}
                              </span>
                            )
                          )}
                        </div>
                      </div>
                      <div className="lg:col-span-2">
                        <p className="text-md">
                          {item[router.locale || "en"].description}
                        </p>
                        <div className="flex items-center gap-4">
                          {item.links &&
                            Object.entries(item.links).map(
                              ([type, link]: [string, any]) => (
                                <a
                                  key={type}
                                  href={link}
                                  aria-label={type}
                                  target="_blank"
                                  rel="noreferrer"
                                >
                                  <SvgComponent type={type} />
                                </a>
                              )
                            )}
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-row-reverse flex-wrap-reverse -skew-x-12 m-2 font-mono">
                      {item.languages.reverse().map((language: string) => (
                        <span
                          key={language}
                          className="p-3 bg-secondary/50 dark:bg-dark-secondary/50 shadow-md shadow-secondary dark:shadow-dark-secondary"
                        >
                          {language}
                        </span>
                      ))}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
      </div>
    </div>
  );
}

export async function getStaticProps({ locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}
