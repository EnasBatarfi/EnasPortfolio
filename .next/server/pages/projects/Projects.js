module.exports = /******/ (function (modules) {
  // webpackBootstrap
  /******/ // The module cache
  /******/ var installedModules = require("../../ssr-module-cache.js"); // The require function
  /******/
  /******/ /******/ function __webpack_require__(moduleId) {
    /******/
    /******/ // Check if module is in cache
    /******/ if (installedModules[moduleId]) {
      /******/ return installedModules[moduleId].exports;
      /******/
    } // Create a new module (and put it into the cache)
    /******/ /******/ var module = (installedModules[moduleId] = {
      /******/ i: moduleId,
      /******/ l: false,
      /******/ exports: {},
      /******/
    }); // Execute the module function
    /******/
    /******/ /******/ var threw = true;
    /******/ try {
      /******/ modules[moduleId].call(
        module.exports,
        module,
        module.exports,
        __webpack_require__
      );
      /******/ threw = false;
      /******/
    } finally {
      /******/ if (threw) delete installedModules[moduleId];
      /******/
    } // Flag the module as loaded
    /******/
    /******/ /******/ module.l = true; // Return the exports of the module
    /******/
    /******/ /******/ return module.exports;
    /******/
  } // expose the modules object (__webpack_modules__)
  /******/
  /******/
  /******/ /******/ __webpack_require__.m = modules; // expose the module cache
  /******/
  /******/ /******/ __webpack_require__.c = installedModules; // define getter function for harmony exports
  /******/
  /******/ /******/ __webpack_require__.d = function (exports, name, getter) {
    /******/ if (!__webpack_require__.o(exports, name)) {
      /******/ Object.defineProperty(exports, name, {
        enumerable: true,
        get: getter,
      });
      /******/
    }
    /******/
  }; // define __esModule on exports
  /******/
  /******/ /******/ __webpack_require__.r = function (exports) {
    /******/ if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
      /******/ Object.defineProperty(exports, Symbol.toStringTag, {
        value: "Module",
      });
      /******/
    }
    /******/ Object.defineProperty(exports, "__esModule", { value: true });
    /******/
  }; // create a fake namespace object // mode & 1: value is a module id, require it // mode & 2: merge all properties of value into the ns // mode & 4: return value when already ns object // mode & 8|1: behave like require
  /******/
  /******/ /******/ /******/ /******/ /******/ /******/ __webpack_require__.t = function (
    value,
    mode
  ) {
    /******/ if (mode & 1) value = __webpack_require__(value);
    /******/ if (mode & 8) return value;
    /******/ if (
      mode & 4 &&
      typeof value === "object" &&
      value &&
      value.__esModule
    )
      return value;
    /******/ var ns = Object.create(null);
    /******/ __webpack_require__.r(ns);
    /******/ Object.defineProperty(ns, "default", {
      enumerable: true,
      value: value,
    });
    /******/ if (mode & 2 && typeof value != "string")
      for (var key in value)
        __webpack_require__.d(
          ns,
          key,
          function (key) {
            return value[key];
          }.bind(null, key)
        );
    /******/ return ns;
    /******/
  }; // getDefaultExport function for compatibility with non-harmony modules
  /******/
  /******/ /******/ __webpack_require__.n = function (module) {
    /******/ var getter =
      module && module.__esModule
        ? /******/ function getDefault() {
            return module["default"];
          }
        : /******/ function getModuleExports() {
            return module;
          };
    /******/ __webpack_require__.d(getter, "a", getter);
    /******/ return getter;
    /******/
  }; // Object.prototype.hasOwnProperty.call
  /******/
  /******/ /******/ __webpack_require__.o = function (object, property) {
    return Object.prototype.hasOwnProperty.call(object, property);
  }; // __webpack_public_path__
  /******/
  /******/ /******/ __webpack_require__.p = ""; // Load entry module and return exports
  /******/
  /******/
  /******/ /******/ return __webpack_require__((__webpack_require__.s = 11));
  /******/
})(
  /************************************************************************/
  /******/ {
    /***/ 11: /***/ function (module, exports, __webpack_require__) {
      module.exports = __webpack_require__("iEK7");

      /***/
    },

    /***/ "3X8q": /***/ function (
      module,
      __webpack_exports__,
      __webpack_require__
    ) {
      "use strict";
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        "a",
        function () {
          return TopButton;
        }
      );
      /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        "cDcd"
      );
      /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
        react__WEBPACK_IMPORTED_MODULE_0__
      );
      /* harmony import */ var _TopButton_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
        "bOmX"
      );
      /* harmony import */ var _TopButton_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
        _TopButton_css__WEBPACK_IMPORTED_MODULE_1__
      );
      var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

      function TopButton({ theme }) {
        function GoUpEvent() {
          document.body.scrollTop = 0;
          document.documentElement.scrollTop = 0;
        }
        function scrollFunction() {
          if (
            document.body.scrollTop > 30 ||
            document.documentElement.scrollTop > 30
          ) {
            document.getElementById("topButton").style.visibility = "visible";
          } else {
            document.getElementById("topButton").style.visibility = "hidden";
          }
        }
        window.onscroll = function () {
          scrollFunction();
        };
        const onMouseEnter = (color, bgColor) => {
          /* For the button */
          const topButton = document.getElementById("topButton");
          topButton.style.color = color;
          topButton.style.backgroundColor = bgColor;

          /* For arrow icon */
          const arrow = document.getElementById("arrow");
          arrow.style.color = color;
          arrow.style.backgroundColor = bgColor;
        };
        const onMouseLeave = (color, bgColor) => {
          /* For the button */
          const topButton = document.getElementById("topButton");
          topButton.style.color = color;
          topButton.style.backgroundColor = bgColor;

          /* For arrow icon */
          const arrow = document.getElementById("arrow");
          arrow.style.color = color;
          arrow.style.backgroundColor = bgColor;
        };
        return __jsx(
          "div",
          {
            onClick: GoUpEvent,
            id: "topButton",
            style: {
              color: theme.body,
              backgroundColor: theme.text,
              border: `solid 1px ${theme.text}`,
            },
            title: "Go up",
            onMouseEnter: () => onMouseEnter(theme.text, theme.body),
            onMouseLeave: () => onMouseLeave(theme.body, theme.text),
          },
          __jsx("i", {
            className: "fas fa-arrow-up",
            id: "arrow",
            "aria-hidden": "true",
          })
        );
      }

      /***/
    },

    /***/ ExO7: /***/ function (module, exports) {
      /***/
    },

    /***/ FSWy: /***/ function (module, exports) {
      /***/
    },

    /***/ HfBV: /***/ function (module, exports) {
      module.exports = require("react-reveal");

      /***/
    },

    /***/ IZS3: /***/ function (module, exports) {
      module.exports = require("react-bootstrap");

      /***/
    },

    /***/ LIen: /***/ function (module, exports) {
      /***/
    },

    /***/ QjGT: /***/ function (
      module,
      __webpack_exports__,
      __webpack_require__
    ) {
      "use strict";
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        "i",
        function () {
          return settings;
        }
      );
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        "h",
        function () {
          return seo;
        }
      );
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        "f",
        function () {
          return greeting;
        }
      );
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        "k",
        function () {
          return socialMediaLinks;
        }
      );
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        "j",
        function () {
          return skills;
        }
      );
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        "b",
        function () {
          return competitiveSites;
        }
      );
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        "d",
        function () {
          return degrees;
        }
      );
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        "a",
        function () {
          return certifications;
        }
      );
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        "e",
        function () {
          return experience;
        }
      );
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        "g",
        function () {
          return projectsHeader;
        }
      );
      /* unused harmony export publicationsHeader */
      /* unused harmony export publications */
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        "c",
        function () {
          return contactPageData;
        }
      );
      /* Change this file to get your personal Porfolio */

      // Website related settings
      const settings = {
        isSplash: false, // Change this to false if you don't want Splash screen.
      };

      //SEO Related settings
      const seo = {
        title: "Enas's Portfolio",
        description:
          "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
        og: {
          title: "Enas Batarfi Portfolio",
          type: "website",
          url: "http://ashutoshhathidara.com/",
        },
      };

      //Home Page
      const greeting = {
        title: "Enas Batarfi",
        logo_name: "EnasBatarfi",
        nickname: "Data Scientist",
        subTitle:
          "Passionate professional focused on creating innovative, data-driven, and software development solutions that transform challenges into scalable, impactful, and sustainable systems.",
        resumeLink:
          "https://drive.google.com/file/d/1oCy_g10VF65jFx6DDitTEcako3_iT8QB/view?usp=sharing",
        portfolio_repository: "https://github.com/ashutosh1919/masterPortfolio",
        githubProfile: "https://github.com/EnasBatarfi",
      };
      const socialMediaLinks = [
        /* Your Social Media Link */
        // github: "https://github.com/ashutosh1919",
        // linkedin: "https://www.linkedin.com/in/ashutosh-hathidara-88710b138/",
        // gmail: "ashutoshhathidara98@gmail.com",
        // gitlab: "https://gitlab.com/ashutoshhathidara98",
        // facebook: "https://www.facebook.com/laymanbrother.19/",
        // twitter: "https://twitter.com/ashutosh_1919",
        // instagram: "https://www.instagram.com/layman_brother/"

        {
          name: "Github",
          link: "https://github.com/EnasBatarfi",
          fontAwesomeIcon: "fa-github",
          // Reference https://fontawesome.com/icons/github?style=brands
          backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
        },
        {
          name: "LinkedIn",
          link: "https://www.linkedin.com/in/enas-batarfi/",
          fontAwesomeIcon: "fa-linkedin-in",
          // Reference https://fontawesome.com/icons/linkedin-in?style=brands
          backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
        },
        // {
        //   name: "YouTube",
        //   link: "https://youtube.com/c/DevSense19",
        //   fontAwesomeIcon: "fa-youtube", // Reference https://fontawesome.com/icons/youtube?style=brands
        //   backgroundColor: "#FF0000", // Reference https://simpleicons.org/?q=youtube
        // },
        {
          name: "Gmail",
          link: "mailto:EnasMBatarfi@gmail.com",
          fontAwesomeIcon: "fa-google",
          // Reference https://fontawesome.com/icons/google?style=brands
          backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
        },
        // {
        //   name: "X-Twitter",
        //   link: "https://twitter.com/ashutosh_1919",
        //   fontAwesomeIcon: "fa-x-twitter", // Reference https://fontawesome.com/icons/x-twitter?f=brands&s=solid
        //   backgroundColor: "#000000", // Reference https://simpleicons.org/?q=x
        // },
        // {
        //   name: "Facebook",
        //   link: "https://www.facebook.com/laymanbrother.19/",
        //   fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
        //   backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
        // },
        // {
        //   name: "Instagram",
        //   link: "https://www.instagram.com/layman_brother/",
        //   fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
        //   backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
        // },
      ];
      const skills = {
        data: [
          {
            title: "Data Science & AI",
            fileName: "DataScienceImg",
            skills: [
              "⚡ Developing scalable AI and machine learning models",
              "⚡ Experience in Deep Learning, Computer Vision, and Data Analysis",
              "⚡ Building interactive and dynamic data visualization dashboards",
              "⚡ Implementing machine learning algorithms for classification and prediction tasks",
              "⚡ Data preprocessing, feature engineering, and model optimization",
            ],
            softwareSkills: [
              {
                skillName: "Tensorflow",
                fontAwesomeClassname: "logos-tensorflow",
                style: {
                  backgroundColor: "transparent",
                },
              },
              {
                skillName: "Keras",
                fontAwesomeClassname: "simple-icons:keras",
                style: {
                  backgroundColor: "white",
                  color: "#D00000",
                },
              },
              {
                skillName: "OpenCV",
                fontAwesomeClassname: "devicon:opencv",
                style: {
                  backgroundColor: "transparent",
                },
              },
              {
                skillName: "Python",
                fontAwesomeClassname: "ion-logo-python",
                style: {
                  backgroundColor: "transparent",
                  color: "#3776AB",
                },
              },
              {
                skillName: "Deeplearning",
                imageSrc: "deeplearning_ai_logo.png",
              },
            ],
          },
          {
            title: "Full Stack Development",
            fileName: "FullStackImg",
            skills: [
              "⚡ Designing and managing relational databases with PostgreSQL and Entity Framework Core",
              "⚡ Building responsive and dynamic web applications using React.js and Redux",
              "⚡ Implementing type-safe, maintainable code using TypeScript and JavaScript",
              "⚡ Developing scalable backend systems with .NET Framework and C#",
              "⚡ Version control and collaboration using GitHub",
            ],
            softwareSkills: [
              {
                skillName: "PostgreSQL",
                fontAwesomeClassname: "simple-icons:postgresql",
                style: {
                  color: "#336791",
                },
              },
              // {
              //   skillName: "Entity Framework Core",
              //   fontAwesomeClassname: "simple-icons:dotnet",
              //   style: {
              //     color: "#512BD4",
              //   },
              // },
              // {
              //   skillName: "NodeJS",
              //   fontAwesomeClassname: "devicon-plain:nodejs-wordmark",
              //   style: {
              //     color: "#339933",
              //   },
              // },
              {
                skillName: "NPM",
                fontAwesomeClassname: "simple-icons:npm",
                style: {
                  color: "#CB3837",
                },
              },
              {
                skillName: ".NET Framework",
                fontAwesomeClassname: "simple-icons:dotnet",
                style: {
                  color: "#512BD4",
                },
              },
              {
                skillName: "TypeScript",
                fontAwesomeClassname: "simple-icons:typescript",
                style: {
                  color: "#3178C6",
                },
              },
              {
                skillName: "ReactJS",
                fontAwesomeClassname: "simple-icons:react",
                style: {
                  color: "#61DAFB",
                },
              },
              {
                skillName: "Redux",
                fontAwesomeClassname: "simple-icons:redux",
                style: {
                  color: "#764ABC",
                },
              },
              {
                skillName: "GitHub",
                fontAwesomeClassname: "simple-icons:github",
                style: {
                  color: "#181717",
                },
              },
            ],
          },
          // {
          //   title: "Cloud Infra-Architecture",
          //   fileName: "CloudInfraImg",
          //   skills: [
          //     "⚡ Experience working on multiple cloud platforms",
          //     "⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases",
          //     "⚡ Deploying deep learning models on cloud to use on mobile devices",
          //     "⚡ Setting up streaming jobs from DB to Server or vice-versa on GCP and AWS",
          //   ],
          //   softwareSkills: [
          //     {
          //       skillName: "GCP",
          //       fontAwesomeClassname: "simple-icons:googlecloud",
          //       style: {
          //         color: "#4285F4",
          //       },
          //     },
          //     {
          //       skillName: "AWS",
          //       fontAwesomeClassname: "simple-icons:amazonaws",
          //       style: {
          //         color: "#FF9900",
          //       },
          //     },
          //     {
          //       skillName: "Azure",
          //       fontAwesomeClassname: "simple-icons:microsoftazure",
          //       style: {
          //         color: "#0089D6",
          //       },
          //     },
          //     {
          //       skillName: "Firebase",
          //       fontAwesomeClassname: "simple-icons:firebase",
          //       style: {
          //         color: "#FFCA28",
          //       },
          //     },
          //     {
          //       skillName: "PostgreSQL",
          //       fontAwesomeClassname: "simple-icons:postgresql",
          //       style: {
          //         color: "#336791",
          //       },
          //     },
          //     {
          //       skillName: "MongoDB",
          //       fontAwesomeClassname: "simple-icons:mongodb",
          //       style: {
          //         color: "#47A248",
          //       },
          //     },
          //     {
          //       skillName: "Docker",
          //       fontAwesomeClassname: "simple-icons:docker",
          //       style: {
          //         color: "#1488C6",
          //       },
          //     },
          //     {
          //       skillName: "Kubernetes",
          //       fontAwesomeClassname: "simple-icons:kubernetes",
          //       style: {
          //         color: "#326CE5",
          //       },
          //     },
          //   ],
          // },
          // {
          //   title: "UI/UX Design",
          //   fileName: "DesignImg",
          //   skills: [
          //     "⚡ Designing highly attractive user interface for mobile and web applications",
          //     "⚡ Customizing logo designs and building logos from scratch",
          //     "⚡ Creating the flow of application functionalities to optimize user experience",
          //   ],
          //   softwareSkills: [
          //     {
          //       skillName: "Adobe XD",
          //       fontAwesomeClassname: "simple-icons:adobexd",
          //       style: {
          //         color: "#FF2BC2",
          //       },
          //     },
          //     {
          //       skillName: "Figma",
          //       fontAwesomeClassname: "simple-icons:figma",
          //       style: {
          //         color: "#F24E1E",
          //       },
          //     },
          //     {
          //       skillName: "Adobe Illustrator",
          //       fontAwesomeClassname: "simple-icons:adobeillustrator",
          //       style: {
          //         color: "#FF7C00",
          //       },
          //     },
          //     {
          //       skillName: "Inkscape",
          //       fontAwesomeClassname: "simple-icons:inkscape",
          //       style: {
          //         color: "#000000",
          //       },
          //     },
          //   ],
          // },
        ],
      };

      // Education Page
      const competitiveSites = {
        competitiveSites: [
          // {
          //   siteName: "LeetCode",
          //   iconifyClassname: "simple-icons:leetcode",
          //   style: {
          //     color: "#F79F1B",
          //   },
          //   profileLink: "https://leetcode.com/layman_brother/",
          // },
          // {
          //   siteName: "HackerRank",
          //   iconifyClassname: "simple-icons:hackerrank",
          //   style: {
          //     color: "#2EC866",
          //   },
          //   profileLink: "https://www.hackerrank.com/layman_brother",
          // },
          // {
          //   siteName: "Codechef",
          //   iconifyClassname: "simple-icons:codechef",
          //   style: {
          //     color: "#5B4638",
          //   },
          //   profileLink: "https://www.codechef.com/users/ashutosh_1919",
          // },
          // {
          //   siteName: "Codeforces",
          //   iconifyClassname: "simple-icons:codeforces",
          //   style: {
          //     color: "#1F8ACB",
          //   },
          //   profileLink: "http://codeforces.com/profile/layman_brother",
          // },
          // {
          //   siteName: "Hackerearth",
          //   iconifyClassname: "simple-icons:hackerearth",
          //   style: {
          //     color: "#323754",
          //   },
          //   profileLink: "https://www.hackerearth.com/@ashutosh391",
          // },
          // {
          //   siteName: "Kaggle",
          //   iconifyClassname: "simple-icons:kaggle",
          //   style: {
          //     color: "#20BEFF",
          //   },
          //   profileLink: "https://www.kaggle.com/laymanbrother",
          // },
        ],
      };
      const degrees = {
        degrees: [
          // {
          //   title: "Indian Institute of Information Technology Kurnool",
          //   subtitle: "B.Tech. in Computer Engineering",
          //   logo_path: "iiitk_logo.png",
          //   alt_name: "IIITDM Kurnool",
          //   duration: "2016 - 2020",
          //   descriptions: [
          //     "⚡ I have studied basic software engineering subjects like DS, Algorithms, DBMS, OS, CA, AI etc.",
          //     "⚡ Apart from this, I have done courses on Deep Learning, Data Science, Cloud Computing and Full Stack Development.",
          //     "⚡ I was selected for Merit cum Means Scholarship which is given to top 10% of students in college. I have received award from respected director for consistently best performance in academics.",
          //   ],
          //   website_link: "http://iiitk.ac.in",
          // },
          {
            title: "King Abdulaziz University",
            subtitle: "Bachelor of Science in Computer Science",
            logo_path: "KAU.svg",
            alt_name: "King Abdulaziz University",
            duration: "2018 - 2023",
            descriptions: [
              "⚡ I have taken varity of courses related to Artificial Intelligence which correspond to Explainable AI, Graph Machine Learning, Computer Vision etc.",
              "⚡ Apart from this, I have also done research assistantship. As part of it, I have worked on creating new algorithms in Graph ML and Network Science.",
              "⚡ During my time at university, I was also associated with multimedia department. As part of it, I have worked on some documentry films and interviews.",
            ],
            website_link: "https://www.kau.edu.sa/home_english.aspx",
          },
        ],
      };
      const certifications = {
        certifications: [
          {
            title: "Data Science",
            subtitle: "- Learning Space",
            logo_path: "learningspace.png",
            certificate_link:
              "https://drive.google.com/file/d/1JZ8WiQW_VmDx_YOA64ovj9EGRzzR9qJY/view?usp=drivesdk",
            alt_name: "Learning Space",
            color_code: "#FFEB99", // Pastel yellow
          },
          {
            title: "Introduction to Artificial Intelligence",
            subtitle: "- KAUST",
            logo_path: "KAUST.png",
            certificate_link:
              "https://drive.google.com/file/d/1uSQ0VAvmI4yovEWHpgRIPu-HYKD5iQCZ/view",
            alt_name:
              "King Abdullah University of Science and Technology (KAUST)",
            color_code: "#B5D8FF", // Pastel blue
          },
          {
            title: "Advanced Artificial Intelligence",
            subtitle: "- KAUST",
            logo_path: "KAUST.png",
            certificate_link:
              "https://drive.google.com/file/d/1uSQ0VAvmI4yovEWHpgRIPu-HYKD5iQCZ/view",
            alt_name:
              "King Abdullah University of Science and Technology (KAUST)",
            color_code: "#A8D0E6", // Pastel light blue
          },
          {
            title: "Network Security",
            subtitle: "- KAUST Cybersecurity Prerequisite Course",
            logo_path: "ISC2.png",
            certificate_link:
              "https://www.coursera.org/account/accomplishments/certificate/EH6J2KFTBAA9",
            alt_name:
              "Cybersecurity Certifications and Continuing Education (ISC2)",
            color_code: "#A9E4B8", // Pastel green
          },
          {
            title: "Cryptography",
            subtitle: "- KAUST Cybersecurity Prerequisite Course",
            logo_path: "ISC2.png",
            certificate_link:
              "https://www.coursera.org/account/accomplishments/records/VXDZPLJY7TPJ",
            alt_name:
              "Cybersecurity Certifications and Continuing Education (ISC2)",
            color_code: "#C1E6B7", // Distinct Pastel Green
          },
          {
            title: "Access Control Concepts",
            subtitle: "- KAUST Cybersecurity Prerequisite Course",
            logo_path: "ISC2.png",
            certificate_link:
              "https://www.coursera.org/account/accomplishments/certificate/CF353PWKRGVD",
            alt_name:
              "Cybersecurity Certifications and Continuing Education (ISC2)",
            color_code: "#F8C8D8", // Pastel pink
          },
          {
            title: "Security Principles",
            subtitle: "- KAUST Cybersecurity Prerequisite Course",
            logo_path: "ISC2.png",
            certificate_link:
              "https://www.coursera.org/account/accomplishments/certificate/CGJD3WJVXZ9F",
            alt_name:
              "Cybersecurity Certifications and Continuing Education (ISC2)",
            color_code: "#D4A6E1", // Pastel lavender
          },
          {
            title:
              "Applied Mathematics and Computational Science and Statistics School",
            subtitle: "- Advanced Topics Mathematics and Statistics",
            logo_path: "KAUST.png",
            certificate_link: "",
            alt_name:
              "King Abdullah University of Science and Technology (KAUST)",
            color_code: "#FFDFD3", // Pastel beach (peachy tone)
          },
          {
            title: "McKinsey Forward Program",
            subtitle: "- Critical Practical Skills for Professionals",
            logo_path: "Mc.png",
            certificate_link:
              "https://www.credly.com/badges/817a2aef-22eb-4c0f-90b2-c8f5373fa8af/linked_in_profile",
            alt_name: "IBM",
            color_code: "#D2B19D",
            // Pastel brown
            logo_style: {
              width: "250px",
            }, // Inline style for smaller logo
          },
          {
            title: "C# Full-Stack Development Bootcamp",
            subtitle: "- Provided by SDA in partnership with Integrify",
            logo_path: "integrify.png",
            certificate_link: "",
            alt_name: "Integrify",
            color_code: "#F4B8A2",
            // Pastel coral
            logo_style: {
              width: "280px",
            }, // Inline style for smaller logo
          },
        ],
      };

      // Experience Page
      const experience = {
        title: "Experience",
        subtitle: "Work, Internship and Volunteership",
        description:
          "I have worked with many evolving startups as ML and DL Developer, Designer and Software Architect. I have also worked with some well established companies mostly as AI Developer. I love organising events and that is why I am also involved with many opensource communities as a representative.",
        header_image_path: "experience.svg",
        sections: [
          {
            title: "Work",
            work: true,
            experiences: [
              {
                title: "Training Assistant",
                company: "Institution of Public Administration (IPA)",
                company_url: "https://www.ipa.edu.sa/",
                logo_path: "IPA.png",
                duration: "Jun 2024 – Present",
                location: "Riyadh, Kingdom of Saudi Arabia",
                description:
                  "As part of a rotational program, I gained hands-on experience across various departments, supporting both training and administrative functions. I helped review and audit question banks to ensure the quality and accuracy of training materials. I also implemented AI tools for grammar and spell-checking to enhance those materials. Additionally,  I contributed to the development data-driven dashboards using Qlik Sense, HTML, CSS, and JavaScript to help visualize key insights.",
                color: "#000000",
              },
              {
                title: "Software Developer",
                company: "Information & Software Co., Ltd.",
                company_url: "https://infosoft.com.sa/en/",
                logo_path: "Infosoft.png",
                duration: "Oct 2023 – Nov 2023",
                location: "Jeddah, Kingdom of Saudi Arabia",
                description:
                  "I conducted thorough software testing to improve system efficiency. In addition, I analyzed e-invoice systems to ensure compliance with ZATCA standards. This allowed me to contribute to refining the application design, optimizing its overall functionality.",
                color: "#0879bf",
              },
              // {
              //   title: "Android and ML Developer",
              //   company: "Muffito Incorporation",
              //   company_url: "https://www.linkedin.com/company/muffito-inc/about/",
              //   logo_path: "muffito_logo.png",
              //   duration: "May 2018 - Oct 2018",
              //   location: "Pune, Maharashtra",
              //   description:
              //     "I have created complete Android Application for locating Pub, Bar and beverage shops around you. I have also worked on implementation of algorithms for Face Detection, Text extraction from Image. I was involved in a team for creating complete software architecure of mobile and web application as well as admin panel for company.",
              //   color: "#9b1578",
              // },
              // {
              //   title: "Android Developer",
              //   company: "FreeCopy Pvt. Ltd.",
              //   company_url: "https://www.linkedin.com/company/freecopy/about/",
              //   logo_path: "freecopy_logo.png",
              //   duration: "Nov 2017 - Dec 2017",
              //   location: "Ahmedabad, Gujarat",
              //   description:
              //     "FreeCopy is the Start up from Indian Institute of Management, Ahmedabad. I have changed the integration of the whole app from Google to Firebase. I learnt the efﬁcient ways of Data communications like Retroﬁt, Eventbus etc. I experienced the real time start up. I learnt the Design thinking of UI on perspective of People.",
              //   color: "#fc1f20",
              // },
            ],
          },
          {
            title: "Internships",
            experiences: [
              {
                title: "Computer Science Intern",
                company: "Saudi Aramco",
                company_url: "https://www.aramco.com/",
                logo_path: "aramco.png",
                duration: "Jul 2023 – Aug 2023",
                location: "Dhahran, Kingdom of Saudi Arabia",
                description:
                  "I contributed to the development and enhancement of web-based gamification features designed to support the business mathematics curriculum. I also assisted in troubleshooting technical challenges and configuring iPads for student acceptance tests, ensuring a smooth and efficient deployment for educational use.",
                color: "#000000",
              },
              //     {
              //       title: "Data Science Research Intern",
              //       company: "Delhivery Pvt. Ltd.",
              //       company_url: "https://www.delhivery.com/",
              //       logo_path: "delhivery_logo.png",
              //       duration: "May 2019 - Sept 2019",
              //       location: "Gurgaon, Haryana",
              //       description:
              //         "I have worked on project of predicting freight rates based on previous data. There were two objectives: (1) To build a forecasting engine to predict daily freight rates. (2) To embed feature in the model which can explain the seasonal major changes in freight rate based on regions and locations. I have closely worked with deep learning models in combination with statistical methods to create solution for this. At the end of internship, I had created model deployed on AWS EC2 with the use of Kafka stream jobs, ElasticSearch and PostgreSQL.",
              //       color: "#ee3c26",
              //     },
              //     {
              //       title: "Data Science Intern",
              //       company: "Intel Indexer LLC",
              //       company_url:
              //         "https://opencorporates.com/companies/us_dc/EXTUID_4170286",
              //       logo_path: "intel_logo.jpg",
              //       duration: "Nov 2018 - Dec 2018",
              //       location: "Work From Home",
              //       description:
              //         "This is financial Solution Company. I have made Supervised Learning model for the company which can perform time series analysis on Stock price data for 32 companies. I have built LSTM Neural Networks Model and trained the data of 32 companies for last 2 years. This model is also used for forecasting.",
              //       color: "#0071C5",
              //     },
            ],
          },
          // {
          //   title: "Volunteerships",
          //   experiences: [
          //     {
          //       title: "Google Explore ML Facilitator",
          //       company: "Google",
          //       company_url: "https://about.google/",
          //       logo_path: "google_logo.png",
          //       duration: "June 2019 - April 2020",
          //       location: "Hyderabad, Telangana",
          //       description:
          //         "Explore Machine Learning (ML) is a Google-sponsored program for university students to get started with Machine Learning. The curriculum offers 3 tracks of ML Content (Beginner, Intermediate, Advanced) and relies on university student facilitators to train other students on campus and to build opensource projects under this program.",
          //       color: "#4285F4",
          //     },
          //     {
          //       title: "Microsoft Student Partner",
          //       company: "Microsoft",
          //       company_url: "https://www.microsoft.com/",
          //       logo_path: "microsoft_logo.png",
          //       duration: "Aug 2019 - May 2020",
          //       location: "Hyderabad, Telangana",
          //       description:
          //         "Microsoft Student Partner is a program for university students to lead the awareness and use of Cloud especially Azure tools in the development of their projects and startups. Under this program, I have organised hands on workshops and seminars to teach Cloud Computing concepts to students.",
          //       color: "#D83B01",
          //     },
          //     {
          //       title: "Mozilla Campus Captain",
          //       company: "Mozilla",
          //       company_url: "https://www.mozilla.org/",
          //       logo_path: "mozilla_logo.png",
          //       duration: "Oct 2019 - May 2020",
          //       location: "Kurnool, Andhra Pradesh",
          //       description:
          //         "My responsibility for this program was to create opensource environment in college and in the city. We have organised multiple hackathons on the problems collected by ordinary people from Kurnool city. We have build opensource community of our own college. The community is available at dsc_iiitdmk on github.",
          //       color: "#000000",
          //     },
          //     {
          //       title: "Developer Students Club Member",
          //       company: "DSC IIITDM Kurnool",
          //       company_url:
          //         "https://www.linkedin.com/company/developer-students-club-iiitdm-kurnool",
          //       logo_path: "dsc_logo.png",
          //       duration: "Jan 2018 - May 2020",
          //       location: "Kurnool, Andhra Pradesh",
          //       description:
          //         "We have well established developer club in college which is directly associated with Google Developers. We have developed many interdisciplinary projects under the membership of this club. We have organised workshops and activities on Android Application Development, Flutter and React JS.",
          //       color: "#0C9D58",
          //     },
          //     {
          //       title: "Developer Program Member",
          //       company: "Github",
          //       company_url: "https://github.com/",
          //       logo_path: "github_logo.png",
          //       duration: "July 2019 - PRESENT",
          //       location: "Work From Home",
          //       description:
          //         "I am actively contributing to many opensource projects. I have contributed to projects of organisations like Tensorflow, Uber, Facebook, Google, Scikit-learn, Kiwix, Sympy, Python, NVLabs, Fossasia, Netrack, Keras etc. These contributions include bug fixes, feature requests and formulating proper documentation for project.",
          //       color: "#181717",
          //     },
          //   ],
          // },
        ],
      };

      // Projects Page
      const projectsHeader = {
        title: "Projects",
        description:
          "My projects cover a wide range of areas, including machine learning, full-stack development, and various technical fields. I have worked with different technologies to develop and solve real-world problems, enhancing my technical expertise and skills along the way.",
        avatar_image_path: "projects_image.svg",
      };
      const publicationsHeader = {
        title: "Publications",
        description: "Some of my published Articles, Blogs and Research.",
        avatar_image_path: "projects_image.svg",
      };
      const publications = {
        data: [
          {
            id: "neuro-symbolic-sudoku-solver",
            name: "Neuro-Symbolic Sudoku Solver",
            createdAt: "2023-07-02T00:00:00Z",
            description: "Paper published in KDD KiML 2023",
            url: "https://arxiv.org/abs/2307.00653",
          },
          {
            id: "mdp-diffusion",
            name: "MDP-Diffusion",
            createdAt: "2023-09-19T00:00:00Z",
            description: "Blog published in Paperspace",
            url: "https://blog.paperspace.com/mdp-diffusion/",
          },
          {
            id: "consistency-models",
            name: "Consistency Models",
            createdAt: "2023-10-12T00:00:00Z",
            description: "Blog published in Paperspace",
            url: "https://blog.paperspace.com/consistency-models/",
          },
        ],
      };

      // Contact Page
      const contactPageData = {
        contactSection: {
          title: "Contact Me",
          profile_image_path: "animated_ashutosh.png",
          description:
            "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with ML, AI, React, Android, Cloud and Opensource Development.",
        },
        blogSection: {
          title: "Blogs",
          subtitle:
            "I like to document some of my experiences in professional career journey as well as some technical knowledge sharing.",
          link: "https://blogs.ashutoshhathidara.com/",
          avatar_image_path: "blogs_image.svg",
        },
        addressSection: {
          title: "Address",
          subtitle: "Saratoga Ave, San Jose, CA, USA 95129",
          locality: "San Jose",
          country: "USA",
          region: "California",
          postalCode: "95129",
          streetAddress: "Saratoga Avenue",
          avatar_image_path: "address_image.svg",
          location_map_link: "https://maps.app.goo.gl/NvYZqa34Wye4tpS17",
        },
        phoneSection: {
          title: "",
          subtitle: "",
        },
      };

      /***/
    },

    /***/ "R+8Y": /***/ function (
      module,
      __webpack_exports__,
      __webpack_require__
    ) {
      "use strict";
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        "a",
        function () {
          return Button;
        }
      );
      /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        "cDcd"
      );
      /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
        react__WEBPACK_IMPORTED_MODULE_0__
      );
      /* harmony import */ var _Button_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
        "puG6"
      );
      /* harmony import */ var _Button_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
        _Button_css__WEBPACK_IMPORTED_MODULE_1__
      );
      var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

      const onMouseEnter = (event, color, bgColor) => {
        const el = event.target;
        el.style.color = color;
        el.style.backgroundColor = bgColor;
      };
      const onMouseOut = (event, color, bgColor) => {
        const el = event.target;
        el.style.color = color;
        el.style.backgroundColor = bgColor;
      };
      function Button({ text, className, href, newTab, theme }) {
        return __jsx(
          "div",
          {
            className: className,
          },
          __jsx(
            "a",
            {
              className: "main-button",
              href: href,
              target: newTab && "_blank",
              style: {
                color: theme.body,
                backgroundColor: theme.text,
                border: `solid 1px ${theme.text}`,
              },
              onMouseEnter: (event) =>
                onMouseEnter(event, theme.text, theme.body),
              onMouseOut: (event) => onMouseOut(event, theme.body, theme.text),
            },
            text
          )
        );
      }

      /***/
    },

    /***/ Wti7: /***/ function (
      module,
      __webpack_exports__,
      __webpack_require__
    ) {
      "use strict";
      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        "default",
        function () {
          return ProjectsImg;
        }
      );
      /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        "cDcd"
      );
      /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
        react__WEBPACK_IMPORTED_MODULE_0__
      );
      var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

      class ProjectsImg extends react__WEBPACK_IMPORTED_MODULE_0__[
        "Component"
      ] {
        render() {
          // const theme = this.props.theme;
          return __jsx(
            "svg",
            {
              xmlns: "http://www.w3.org/2000/svg",
              width: "717.67003",
              height: "453.96431",
              viewBox: "0 0 717.67003 453.96431",
              role: "img",
              artist: "Katerina Limpitsouni",
              source: "https://undraw.co/",
            },
            __jsx("path", {
              d:
                "M527.60118,309.43775a3.82674,3.82674,0,0,1-4.314,1.25745,5.82854,5.82854,0,0,1-.6787-.24764,28.82552,28.82552,0,0,0-.36725-7.98934,21.36236,21.36236,0,0,1-1.63966,6.57017,8.91079,8.91079,0,0,1-1.75993-2.51274,22.42528,22.42528,0,0,1-1.60307-6.0463c-1.20439-7.0881-2.39281-14.46206-.42756-21.389,2.87885-10.119,11.95723-17.39344,15.74893-27.21118l1.86811-1.677c3.19777,5.44543,3.33934,12.212,2.03576,18.38674-1.29657,6.187-3.90949,11.99371-5.97512,17.96023s-3.61313,12.31309-2.6548,18.55641C528.05421,306.56558,528.39023,308.18131,527.60118,309.43775Z",
              transform: "translate(-255.61478 -237.96119)",
              fill: "#2f2e41",
            }),
            __jsx("polygon", {
              points:
                "230.469 157.098 218.295 212.779 271.469 230.098 263.65 157.098 230.469 157.098",
              fill: "#ffb6b6",
            }),
            __jsx("path", {
              d:
                "M861.31381,690.55887h24.09571V580.09012A107.65288,107.65288,0,0,0,777.87876,472.55887H553.94028A107.65288,107.65288,0,0,0,446.40952,580.09012V690.55887h24.0957V615.09012A108.65356,108.65356,0,0,1,579.036,506.55887H752.78305A108.65356,108.65356,0,0,1,861.31381,615.09012Z",
              transform: "translate(-255.61478 -237.96119)",
              fill: "#e6e6e6",
            }),
            __jsx("path", {
              d:
                "M568.509,632.7673l-25.68043-7.775a88.4837,88.4837,0,0,1-2.50888-20.963,8.39912,8.39912,0,0,1,13.815-6.35513c13.77338,11.81381,33.94829,18.11782,46.96791,31.58028a52.07341,52.07341,0,0,1,13.888,42.946l5.621,18.18083a87.2586,87.2586,0,0,1-63.97667-35.28461,84.28716,84.28716,0,0,1-10.12173-18.565C557.40487,635.29616,568.509,632.7673,568.509,632.7673Z",
              transform: "translate(-255.61478 -237.96119)",
              fill: "#f2f2f2",
            }),
            __jsx("path", {
              d:
                "M635.438,662.5404l13.09791-3.96554q.02533-.10428.0502-.2087a8.409,8.409,0,0,0-12.48265-9.09359c-5.94563,3.532-12.54779,6.57335-17.28929,11.47613a26.55922,26.55922,0,0,0-7.08337,21.904l-2.86689,9.27285a44.50485,44.50485,0,0,0,32.6303-17.99636,42.98864,42.98864,0,0,0,5.16243-9.46881C641.10146,663.83021,635.438,662.5404,635.438,662.5404Z",
              transform: "translate(-255.61478 -237.96119)",
              fill: "#f2f2f2",
            }),
            __jsx("path", {
              d:
                "M741.46337,391.0911H690.45778a2.72143,2.72143,0,0,0-2.71731,2.72433v80.57381h56.44722V393.81543A2.7229,2.7229,0,0,0,741.46337,391.0911Zm-25.3312,45.78106a6.05117,6.05117,0,0,1-6.02292-6.02289v-9.29349a6.02291,6.02291,0,0,1,12.04581,0v9.29349a6.05109,6.05109,0,0,1-6.02289,6.02289Z",
              transform: "translate(-255.61478 -237.96119)",
              fill: "#3f3d56",
            }),
            __jsx("path", {
              d:
                "M825.92405,265.34656H607.895a7.07769,7.07769,0,0,0-7.06643,7.06638V419.53985a7.07318,7.07318,0,0,0,7.06643,7.06638h218.029a7.07318,7.07318,0,0,0,7.06643-7.06638V272.41294A7.07769,7.07769,0,0,0,825.92405,265.34656Z",
              transform: "translate(-255.61478 -237.96119)",
              fill: "#3f3d56",
            }),
            __jsx("path", {
              d:
                "M824.10413,270.4505H609.71662a3.78733,3.78733,0,0,0-3.7791,3.787V417.71769a3.78562,3.78562,0,0,0,3.7791,3.7791H824.10413a3.78562,3.78562,0,0,0,3.7791-3.7791V274.23747A3.78733,3.78733,0,0,0,824.10413,270.4505Z",
              transform: "translate(-255.61478 -237.96119)",
              fill: "#fff",
            }),
            __jsx("path", {
              d:
                "M687.56538,471.812v7.77377a1.52285,1.52285,0,0,0,1.51976,1.51972h53.75792a1.52739,1.52739,0,0,0,1.51972-1.51972V471.812Z",
              transform: "translate(-255.61478 -237.96119)",
              fill: "#3f3d56",
            }),
            __jsx("path", {
              d:
                "M782.34508,483.81055H654.7962a2.34634,2.34634,0,0,1-2.296-2.82966l1.97916-9.39973a2.35648,2.35648,0,0,1,2.29564-1.86291H780.36631a2.35648,2.35648,0,0,1,2.29565,1.86291l1.97915,9.39973a2.34634,2.34634,0,0,1-2.296,2.82966Z",
              transform: "translate(-255.61478 -237.96119)",
              fill: "#3f3d56",
            }),
            __jsx("rect", {
              x: "402.06594",
              y: "233.44964",
              width: "3.92838",
              height: "2.35703",
              rx: "0.48819",
              fill: "#e6e6e6",
            }),
            __jsx("rect", {
              x: "409.92271",
              y: "233.44964",
              width: "3.92838",
              height: "2.35703",
              rx: "0.48819",
              fill: "#e6e6e6",
            }),
            __jsx("rect", {
              x: "417.77947",
              y: "233.44964",
              width: "3.92838",
              height: "2.35703",
              rx: "0.48819",
              fill: "#e6e6e6",
            }),
            __jsx("rect", {
              x: "425.63623",
              y: "233.44964",
              width: "3.92838",
              height: "2.35703",
              rx: "0.48819",
              fill: "#e6e6e6",
            }),
            __jsx("rect", {
              x: "433.493",
              y: "233.44964",
              width: "3.92838",
              height: "2.35703",
              rx: "0.48819",
              fill: "#e6e6e6",
            }),
            __jsx("rect", {
              x: "441.34976",
              y: "233.44964",
              width: "3.92838",
              height: "2.35703",
              rx: "0.48819",
              fill: "#e6e6e6",
            }),
            __jsx("rect", {
              x: "449.20652",
              y: "233.44964",
              width: "3.92838",
              height: "2.35703",
              rx: "0.48819",
              fill: "#e6e6e6",
            }),
            __jsx("rect", {
              x: "457.06329",
              y: "233.44964",
              width: "3.92838",
              height: "2.35703",
              rx: "0.48819",
              fill: "#e6e6e6",
            }),
            __jsx("rect", {
              x: "464.92005",
              y: "233.44964",
              width: "3.92838",
              height: "2.35703",
              rx: "0.48819",
              fill: "#e6e6e6",
            }),
            __jsx("rect", {
              x: "472.77682",
              y: "233.44964",
              width: "3.92838",
              height: "2.35703",
              rx: "0.48819",
              fill: "#e6e6e6",
            }),
            __jsx("rect", {
              x: "480.63358",
              y: "233.44964",
              width: "3.92838",
              height: "2.35703",
              rx: "0.48819",
              fill: "#e6e6e6",
            }),
            __jsx("rect", {
              x: "488.49034",
              y: "233.44964",
              width: "3.92838",
              height: "2.35703",
              rx: "0.48819",
              fill: "#e6e6e6",
            }),
            __jsx("rect", {
              x: "496.34711",
              y: "233.44964",
              width: "3.92838",
              height: "2.35703",
              rx: "0.48819",
              fill: "#e6e6e6",
            }),
            __jsx("rect", {
              x: "504.20387",
              y: "233.44964",
              width: "3.92838",
              height: "2.35703",
              rx: "0.48819",
              fill: "#e6e6e6",
            }),
            __jsx("rect", {
              x: "512.06064",
              y: "233.44964",
              width: "3.92838",
              height: "2.35703",
              rx: "0.48819",
              fill: "#e6e6e6",
            }),
            __jsx("rect", {
              x: "519.9174",
              y: "233.44964",
              width: "3.92838",
              height: "2.35703",
              rx: "0.48819",
              fill: "#e6e6e6",
            }),
            __jsx("rect", {
              x: "401.9731",
              y: "237.37802",
              width: "3.92838",
              height: "2.35703",
              rx: "0.48819",
              fill: "#e6e6e6",
            }),
            __jsx("rect", {
              x: "409.82987",
              y: "237.37802",
              width: "3.92838",
              height: "2.35703",
              rx: "0.48819",
              fill: "#e6e6e6",
            }),
            __jsx("rect", {
              x: "417.68663",
              y: "237.37802",
              width: "3.92838",
              height: "2.35703",
              rx: "0.48819",
              fill: "#e6e6e6",
            }),
            __jsx("rect", {
              x: "425.54339",
              y: "237.37802",
              width: "3.92838",
              height: "2.35703",
              rx: "0.48819",
              fill: "#e6e6e6",
            }),
            __jsx("rect", {
              x: "433.40016",
              y: "237.37802",
              width: "3.92838",
              height: "2.35703",
              rx: "0.48819",
              fill: "#e6e6e6",
            }),
            __jsx("rect", {
              x: "441.25692",
              y: "237.37802",
              width: "3.92838",
              height: "2.35703",
              rx: "0.48819",
              fill: "#e6e6e6",
            }),
            __jsx("rect", {
              x: "449.11369",
              y: "237.37802",
              width: "3.92838",
              height: "2.35703",
              rx: "0.48819",
              fill: "#e6e6e6",
            }),
            __jsx("rect", {
              x: "456.97045",
              y: "237.37802",
              width: "3.92838",
              height: "2.35703",
              rx: "0.48819",
              fill: "#e6e6e6",
            }),
            __jsx("rect", {
              x: "464.82721",
              y: "237.37802",
              width: "3.92838",
              height: "2.35703",
              rx: "0.48819",
              fill: "#e6e6e6",
            }),
            __jsx("rect", {
              x: "472.68398",
              y: "237.37802",
              width: "3.92838",
              height: "2.35703",
              rx: "0.48819",
              fill: "#e6e6e6",
            }),
            __jsx("rect", {
              x: "480.54074",
              y: "237.37802",
              width: "3.92838",
              height: "2.35703",
              rx: "0.48819",
              fill: "#e6e6e6",
            }),
            __jsx("rect", {
              x: "488.39751",
              y: "237.37802",
              width: "3.92838",
              height: "2.35703",
              rx: "0.48819",
              fill: "#e6e6e6",
            }),
            __jsx("rect", {
              x: "496.25427",
              y: "237.37802",
              width: "3.92838",
              height: "2.35703",
              rx: "0.48819",
              fill: "#e6e6e6",
            }),
            __jsx("rect", {
              x: "504.11103",
              y: "237.37802",
              width: "3.92838",
              height: "2.35703",
              rx: "0.48819",
              fill: "#e6e6e6",
            }),
            __jsx("rect", {
              x: "511.9678",
              y: "237.37802",
              width: "3.92838",
              height: "2.35703",
              rx: "0.48819",
              fill: "#e6e6e6",
            }),
            __jsx("rect", {
              x: "519.82456",
              y: "237.37802",
              width: "3.92838",
              height: "2.35703",
              rx: "0.48819",
              fill: "#e6e6e6",
            }),
            __jsx("rect", {
              x: "439.68557",
              y: "242.09208",
              width: "31.42706",
              height: "2.35703",
              rx: "0.48819",
              fill: "#e6e6e6",
            }),
            __jsx("path", {
              d:
                "M792.13789,306.46885v75.52a19.07267,19.07267,0,0,1-19.07,19.07h-94.52a19.08094,19.08094,0,0,1-17.51-11.49,17.9844,17.9844,0,0,1-1.13-3.51,17.36726,17.36726,0,0,0,6.3,1.17h94.52a17.60458,17.60458,0,0,0,17.58-17.58v-75.52a17.36787,17.36787,0,0,0-1.17-6.3,17.98805,17.98805,0,0,1,3.51,1.13A19.08093,19.08093,0,0,1,792.13789,306.46885Z",
              transform: "translate(-255.61478 -237.96119)",
              fill: "#f2f2f2",
            }),
            __jsx("polygon", {
              points:
                "183.897 368.973 174.522 374.778 146.903 340.828 160.739 332.262 183.897 368.973",
              fill: "#ffb6b6",
            }),
            __jsx("path", {
              d:
                "M447.60543,619.06017l-7.54133,3.36653-4.5245-6.519-.26914,8.65893-20.0014,8.92883a4.9238,4.9238,0,0,1-6.21365-7.05552l11.04809-18.1615-3.21326-7.198,17.248-6.49708Z",
              transform: "translate(-255.61478 -237.96119)",
              fill: "#2f2e41",
            }),
            __jsx("path", {
              d:
                "M413.24955,600.40319l15.8338-15.34432c-11.7637-29.02906-12.70376-47.02215-29.01206-82.13088,38.693,7.91409,66.35622,7.433,98.35619.33742,10.83323-2.3646,38.78551-23.95594,36.48735-35.02685q-.16112-.77624-.3807-1.538c-3.43482-11.7114-1.01609-29.64574-8.45078-42.64173-13.75489-5.18582-34.65268,12.32556-51,23-7.88255,5.14713-2.11233,12.1612-8,14l-22.569,7.32613-55.3725-8.943a20.51148,20.51148,0,0,0-23.37624,17.35929q-.14055.9018-.20361,1.81341c2.54779,14.10343,5.20366,27.83673,8.063,40.87333.923,4.20807-.6352,12.27539,2.8357,12.39545s2.07272,8.46395,3.15368,12.54322C386.2692,569.54028,390.47748,581.69383,413.24955,600.40319Z",
              transform: "translate(-255.61478 -237.96119)",
              fill: "#2f2e41",
            }),
            __jsx("polygon", {
              points:
                "127.329 429.745 117.562 424.647 133.015 383.711 147.43 391.235 127.329 429.745",
              fill: "#ffb6b6",
            }),
            __jsx("path", {
              d:
                "M381.31592,637.14483l15.6612,10.78289c19.19456-27.75961,31.65753-64.854,40.93905-106.36,36.13851-15.76472,67.76063-33.80089,89.79648-57.99314a20.9147,20.9147,0,0,0-1.20931-29.095q-.5784-.5422-1.196-1.03885c-9.54471-7.60285-30.74283-3.22816-44.29181-9.58275l-24.204,33.49961,2.78211,7.80252-8.41994,4.099-7.1092,3.46086-8.13813,3.96175L409.24825,509.669a20.4837,20.4837,0,0,0-9.089,27.62925q.40434.81821.87758,1.59992l-9.908,49.36015s2.72631,8.59307-1.56348,7.789-1.95215,9.72532-1.95215,9.72532Z",
              transform: "translate(-255.61478 -237.96119)",
              fill: "#2f2e41",
            }),
            __jsx("path", {
              d:
                "M377.029,690.26656l-7.32146-3.82115,2.30077-7.5944-6.95466,5.16548-19.41828-10.13462a4.9238,4.9238,0,0,1,1.67253-9.25162l21.09632-2.61639,3.64718-6.98813,15.80243,9.48616Z",
              transform: "translate(-255.61478 -237.96119)",
              fill: "#2f2e41",
            }),
            __jsx("path", {
              d:
                "M590.50644,475.66465l-11.42309-27.60578-9,5,5.43524,28.0821a10.0012,10.0012,0,1,0,14.98785-5.47632Z",
              transform: "translate(-255.61478 -237.96119)",
              fill: "#ffb6b6",
            }),
            __jsx("path", {
              d:
                "M398.82273,257.36811l17.381,24.29955,7.633-6.90918L412.18,248.63825a10.0012,10.0012,0,1,0-13.35723,8.72986Z",
              transform: "translate(-255.61478 -237.96119)",
              fill: "#ffb6b6",
            }),
            __jsx("path", {
              d:
                "M477.31168,411.38205c-11.2735,17.48627,30.02795,55.58585,51.77167,46.67682,3.80743-1.56,16.90438-6.71266,7.95219-13.85633s1.03792.851,1.274-3.79932c.15787-3.109-2.24924-9.9292.26227-9.63677s3.953-6.97133-1.51673-8.82157a10.61794,10.61794,0,0,1-7-9c-.523-19.16651,5.96782-39.17735,5.96782-39.17735l26.49793,67.73493s-.19573,11.71851,3.18337,8.13746,3.13322,8.00923,3.13322,8.00923,5.02458,3.50661,2.13523,5.45816,3.11066,7.95156,3.11066,7.95156l14-1s-.21919-10.4-2.6096-12.7-1.21623-5.919-1.21623-5.919-4.92825-4.58417-2.05121-9.98259-20.951-101.96148-20.951-101.96148a25.7199,25.7199,0,0,0-18.366-19.62039l-15.12093-4.16334-2.685-10.6532H503.792l-3.70866,7-34-3s-33.64257-30.60991-32-33-3.57255-7.98576-3.57255-7.98576-4.45387-1.45771-1.94066-2.236-2.23723-2.57768-2.23723-2.57768-4.39964-1.1561-2.3246-2.67834-6.925-2.52224-6.925-2.52224l-11.67717,9.52756,2.3601,4.00191s-1.439,5.44938.439,3.46,2.23156,3.78393,2.23156,3.78393.95909,6.32194,6.64648,8.22664,10,20,10,20l48,40c-7.31055,8.39115-5.5705,17.166.90564,26.14173Z",
              transform: "translate(-255.61478 -237.96119)",
              fill: "#5E548E",
            }),
            __jsx("circle", {
              cx: "258.34259",
              cy: "36.96382",
              r: "23.0557",
              fill: "#ffb6b6",
            }),
            __jsx("path", {
              d:
                "M534.08335,268.05887c-.59.17-9.25,1.3-13,2-3.68.69-4.32-4-7.33-3.12a.1266.1266,0,0,0-.01-.06,28.34378,28.34378,0,0,0-2.37-7.17,21.17806,21.17806,0,0,1,.17005,6.6.98419.98419,0,0,1-.02.17c-.01.1-.03.19-.04.29-3.18-1.4-5.2-.15-7.4.29-2.46.49-4.38,1.57-3,10,2.83,17.34,17.55,23.53,15,35-.5,2.27-1.76,5.11-3.34,5.82a28.34378,28.34378,0,0,0-2.37-7.17,21.17806,21.17806,0,0,1,.17005,6.6c-2.45-2.65-4.22-11.91-12.46-19.25-2.03-1.8-12.2-12.48-13.42-15a32.13615,32.13615,0,0,1,.54,6.11,29.41586,29.41586,0,0,1-.28,4.1,1.15145,1.15145,0,0,1-.03.26c-.01.16-.04.3-.06.45-.02.17-.05.33-.08.5-3.33-.48-6.28-1.06-7.67-2.42-6.76-6.58,1.49-19.4,6-31,6.45-16.61,25.18-18.82,27-19,8.02-.81,21.57.91,26,10C539.18332,258.42887,537.20334,267.15885,534.08335,268.05887Z",
              transform: "translate(-255.61478 -237.96119)",
              fill: "#2f2e41",
            }),
            __jsx("path", {
              d:
                "M485.46837,271.80814l16.70111-25.98028a25.61246,25.61246,0,0,0-13.18811-3.4596,16.41918,16.41918,0,0,0-12.10913,5.71143c-3.41095,4.2392-3.99622,10.23181-2.7182,15.52069C474.59538,265.427,483,259,481,262c-1.64185,2.34882-4.3266,12.2215-5,15-1.08368,4.4718-4.06343,9.06211-1.40907,12.82053,3.13885,4.44446,8.74,6.65363,14.17651,6.878s10.7876-1.28223,15.95416-2.98871Z",
              transform: "translate(-255.61478 -237.96119)",
              fill: "#2f2e41",
            }),
            __jsx("path", {
              d:
                "M491.88559,270.78348a1.00011,1.00011,0,0,1-.27295-1.96191c.26221-.43262.15479-2.25342.06836-3.72461-.32519-5.52393-.86963-14.769,8.106-21.00977a.99976.99976,0,0,1,1.1416,1.6416c-8.05469,5.60108-7.57129,13.81543-7.251,19.25049.18262,3.10742.315,5.352-1.56982,5.7793A.99351.99351,0,0,1,491.88559,270.78348Z",
              transform: "translate(-255.61478 -237.96119)",
              fill: "#5E548E",
            }),
            __jsx("path", {
              d:
                "M255.61478,689.91176a1.18648,1.18648,0,0,0,1.18292,1.19H972.09481a1.19,1.19,0,0,0,0-2.38h-715.29a1.18649,1.18649,0,0,0-1.19,1.183Z",
              transform: "translate(-255.61478 -237.96119)",
              fill: "#ccc",
            }),
            __jsx("path", {
              d:
                "M698.14954,332.81065H683.01746a1.51321,1.51321,0,0,1,0-3.02642h15.13208a1.51321,1.51321,0,0,1,0,3.02642Z",
              transform: "translate(-255.61478 -237.96119)",
              fill: "#5E548E",
            }),
            __jsx("path", {
              d:
                "M725.38727,332.81065H710.2552a1.51321,1.51321,0,1,1,0-3.02642h15.13207a1.51321,1.51321,0,1,1,0,3.02642Z",
              transform: "translate(-255.61478 -237.96119)",
              fill: "#5E548E",
            }),
            __jsx("path", {
              d:
                "M739.00614,344.91631H723.87407a1.51321,1.51321,0,1,1,0-3.02642h15.13207a1.51321,1.51321,0,1,1,0,3.02642Z",
              transform: "translate(-255.61478 -237.96119)",
              fill: "#5E548E",
            }),
            __jsx("path", {
              d:
                "M711.8519,344.91631H683.01746a1.51321,1.51321,0,0,1,0-3.02642H711.8519a1.51321,1.51321,0,0,1,0,3.02642Z",
              transform: "translate(-255.61478 -237.96119)",
              fill: "#5E548E",
            }),
            __jsx("path", {
              d:
                "M766.32737,332.81065H737.49293a1.51321,1.51321,0,0,1,0-3.02642h28.83444a1.51321,1.51321,0,1,1,0,3.02642Z",
              transform: "translate(-255.61478 -237.96119)",
              fill: "#5E548E",
            }),
            __jsx("path", {
              d:
                "M708.50929,309.88668H679.67486a1.51321,1.51321,0,1,1,0-3.02641h28.83443a1.5132,1.5132,0,1,1,0,3.02641Z",
              transform: "translate(-255.61478 -237.96119)",
              fill: "#5E548E",
            }),
            __jsx("path", {
              d:
                "M710.88008,318.72742a1.35512,1.35512,0,0,1-.83239-2.425l7.38326-5.73907a2.71359,2.71359,0,0,0,.328-3.9837l-6.19864-6.7106a1.35508,1.35508,0,1,1,1.99032-1.83946l9.20523,9.96483a1.3553,1.3553,0,0,1-.16344,1.98966l-10.88125,8.45819A1.35141,1.35141,0,0,1,710.88008,318.72742Z",
              transform: "translate(-255.61478 -237.96119)",
              fill: "#5E548E",
            }),
            __jsx("path", {
              d:
                "M678.21581,318.72742a1.35512,1.35512,0,0,0,.83239-2.425l-7.38326-5.73907a2.71358,2.71358,0,0,1-.328-3.9837l6.19864-6.7106a1.35508,1.35508,0,0,0-1.99032-1.83946l-9.20523,9.96483a1.35531,1.35531,0,0,0,.16343,1.98966l10.88126,8.45819A1.35136,1.35136,0,0,0,678.21581,318.72742Z",
              transform: "translate(-255.61478 -237.96119)",
              fill: "#5E548E",
            }),
            __jsx("path", {
              d:
                "M723.41551,370.86669H694.58108a1.51321,1.51321,0,0,1,0-3.02642h28.83443a1.51321,1.51321,0,0,1,0,3.02642Z",
              transform: "translate(-255.61478 -237.96119)",
              fill: "#5E548E",
            }),
            __jsx("path", {
              d:
                "M728.49652,378.35231a1.35512,1.35512,0,0,1-.83239-2.425l7.38326-5.73907a2.71357,2.71357,0,0,0,.328-3.98369l-6.19864-6.71061a1.35508,1.35508,0,0,1,1.99032-1.83946l9.20523,9.96483a1.35531,1.35531,0,0,1-.16343,1.98966l-10.88125,8.4582A1.35146,1.35146,0,0,1,728.49652,378.35231Z",
              transform: "translate(-255.61478 -237.96119)",
              fill: "#5E548E",
            }),
            __jsx("path", {
              d:
                "M678.21581,378.35231a1.35512,1.35512,0,0,0,.83239-2.425l-7.38326-5.73907a2.71357,2.71357,0,0,1-.328-3.98369l6.19864-6.71061a1.35508,1.35508,0,1,0-1.99032-1.83946l-9.20523,9.96483a1.35531,1.35531,0,0,0,.16343,1.98966l10.88126,8.4582A1.35142,1.35142,0,0,0,678.21581,378.35231Z",
              transform: "translate(-255.61478 -237.96119)",
              fill: "#5E548E",
            }),
            __jsx("path", {
              d:
                "M680.78914,374.11256l6.06111-13.86516a1.51321,1.51321,0,0,1,2.773,1.21223l-6.06112,13.86515a1.51321,1.51321,0,1,1-2.773-1.21222Z",
              transform: "translate(-255.61478 -237.96119)",
              fill: "#5E548E",
            })
          );
        }
      }

      /***/
    },

    /***/ bOmX: /***/ function (module, exports) {
      /***/
    },

    /***/ cDcd: /***/ function (module, exports) {
      module.exports = require("react");

      /***/
    },

    /***/ iEK7: /***/ function (
      module,
      __webpack_exports__,
      __webpack_require__
    ) {
      "use strict";
      // ESM COMPAT FLAG
      __webpack_require__.r(__webpack_exports__);

      // EXTERNAL MODULE: external "react"
      var external_react_ = __webpack_require__("cDcd");
      var external_react_default = /*#__PURE__*/ __webpack_require__.n(
        external_react_
      );

      // EXTERNAL MODULE: ./src/components/projectLanguages/ProjectLanguages.css
      var projectLanguages_ProjectLanguages = __webpack_require__("LIen");

      // EXTERNAL MODULE: external "react-bootstrap"
      var external_react_bootstrap_ = __webpack_require__("IZS3");

      // CONCATENATED MODULE: ./src/components/projectLanguages/ProjectLanguages.js
      var __jsx = external_react_default.a.createElement;

      class ProjectLanguages_ProjectLanguages extends external_react_[
        "Component"
      ] {
        render() {
          return __jsx(
            "div",
            null,
            __jsx(
              "div",
              {
                className: "software-skills-main-div",
              },
              __jsx(
                "ul",
                {
                  className: "dev-icons-languages",
                },
                this.props.logos.map((logo) => {
                  return __jsx(
                    external_react_bootstrap_["OverlayTrigger"],
                    {
                      key: logo.name,
                      placement: "top",
                      overlay: __jsx(
                        external_react_bootstrap_["Tooltip"],
                        {
                          id: `tooltip-top`,
                        },
                        __jsx("strong", null, logo.name)
                      ),
                    },
                    __jsx(
                      "li",
                      {
                        className: "software-skill-inline-languages",
                        name: logo.skillName,
                      },
                      __jsx("span", {
                        className: "iconify",
                        "data-icon": logo.iconifyClass,
                        "data-inline": "false",
                      })
                    )
                  );
                })
              )
            )
          );
        }
      }
      /* harmony default export */ var components_projectLanguages_ProjectLanguages = ProjectLanguages_ProjectLanguages;
      // EXTERNAL MODULE: ./src/components/githubRepoCard/GithubRepoCard.css
      var GithubRepoCard = __webpack_require__("FSWy");

      // EXTERNAL MODULE: external "react-reveal"
      var external_react_reveal_ = __webpack_require__("HfBV");

      // CONCATENATED MODULE: ./src/components/githubRepoCard/GithubRepoCard.js
      var GithubRepoCard_jsx = external_react_default.a.createElement;

      function GithubRepoCard_GithubRepoCard({ repo, theme }) {
        function openRepoinNewTab(url) {
          var win = window.open(url, "_blank");
          win.focus();
        }
        return GithubRepoCard_jsx(
          "div",
          {
            className: "repo-card-div",
            style: {
              backgroundColor: theme.highlight,
            },
          },
          GithubRepoCard_jsx(
            external_react_reveal_["Fade"],
            {
              bottom: true,
              duration: 2000,
              distance: "40px",
            },
            GithubRepoCard_jsx(
              "div",
              {
                key: repo.id,
                onClick: () => openRepoinNewTab(repo.url),
              },
              GithubRepoCard_jsx(
                "div",
                {
                  className: "repo-name-div",
                },
                GithubRepoCard_jsx(
                  "svg",
                  {
                    "aria-hidden": "true",
                    className: "octicon repo-svg",
                    height: "16",
                    role: "img",
                    viewBox: "0 0 12 16",
                    width: "12",
                  },
                  GithubRepoCard_jsx("path", {
                    "fill-rule": "evenodd",
                    d:
                      "M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z",
                  })
                ),
                GithubRepoCard_jsx(
                  "p",
                  {
                    className: "repo-name",
                    style: {
                      color: theme.text,
                    },
                  },
                  repo.name
                )
              ),
              GithubRepoCard_jsx(
                "p",
                {
                  className: "repo-description",
                  style: {
                    color: theme.text,
                  },
                },
                repo.description
              ),
              GithubRepoCard_jsx(
                "div",
                {
                  className: "repo-details",
                },
                GithubRepoCard_jsx(
                  "p",
                  {
                    className: "repo-creation-date subTitle",
                    style: {
                      color: theme.secondaryText,
                    },
                  },
                  "Created on ",
                  repo.createdAt.split("T")[0]
                ),
                GithubRepoCard_jsx(
                  components_projectLanguages_ProjectLanguages,
                  {
                    className: "repo-languages",
                    logos: repo.languages,
                  }
                )
              )
            )
          )
        );
      }
      // EXTERNAL MODULE: ./src/components/button/Button.js
      var Button = __webpack_require__("R+8Y");

      // EXTERNAL MODULE: ./src/components/topButton/TopButton.js
      var TopButton = __webpack_require__("3X8q");

      // EXTERNAL MODULE: ./src/portfolio.js
      var portfolio = __webpack_require__("QjGT");

      // EXTERNAL MODULE: ./src/shared/opensource/projects.json
      var projects = __webpack_require__("vr6h");

      // EXTERNAL MODULE: ./src/pages/projects/Projects.css
      var projects_Projects = __webpack_require__("ExO7");

      // EXTERNAL MODULE: ./src/pages/projects/ProjectsImg.js
      var ProjectsImg = __webpack_require__("Wti7");

      // CONCATENATED MODULE: ./src/pages/projects/Projects.js
      var Projects_jsx = external_react_default.a.createElement;

      // import Header from "../../components/header/Header";
      // import Footer from "../../components/footer/Footer";

      // import PublicationCard from "../../components/publicationsCard/PublicationCard";

      class Projects_Projects extends external_react_["Component"] {
        render() {
          const theme = this.props.theme;
          return Projects_jsx(
            "div",
            {
              className: "projects-main",
            },
            Projects_jsx(
              "div",
              {
                className: "basic-projects",
              },
              Projects_jsx(
                external_react_reveal_["Fade"],
                {
                  bottom: true,
                  duration: 2000,
                  distance: "40px",
                },
                Projects_jsx(
                  "div",
                  {
                    className: "projects-heading-div",
                  },
                  Projects_jsx(
                    "div",
                    {
                      className: "projects-heading-img-div",
                    },
                    Projects_jsx(ProjectsImg["default"], {
                      theme: theme,
                    })
                  ),
                  Projects_jsx(
                    "div",
                    {
                      className: "projects-heading-text-div",
                    },
                    Projects_jsx(
                      "h1",
                      {
                        className: "projects-heading-text",
                        style: {
                          color: theme.text,
                        },
                      },
                      portfolio["g" /* projectsHeader */].title
                    ),
                    Projects_jsx(
                      "p",
                      {
                        className: "projects-header-detail-text subTitle",
                        style: {
                          color: theme.secondaryText,
                        },
                      },
                      portfolio["g" /* projectsHeader */]["description"]
                    )
                  )
                )
              )
            ),
            Projects_jsx(
              "div",
              {
                className: "repo-cards-div-main",
              },
              projects.data.map((repo) => {
                return Projects_jsx(GithubRepoCard_GithubRepoCard, {
                  repo: repo,
                  theme: theme,
                });
              })
            ),
            Projects_jsx(Button["a" /* default */], {
              text: "More Projects",
              className: "project-button",
              href: portfolio["f" /* greeting */].githubProfile,
              newTab: true,
              theme: theme,
            }),
            Projects_jsx(TopButton["a" /* default */], {
              theme: this.props.theme,
            })
          );
        }
      }
      /* harmony default export */ var pages_projects_Projects = (__webpack_exports__[
        "default"
      ] = Projects_Projects);

      /***/
    },

    /***/ puG6: /***/ function (module, exports) {
      /***/
    },

    /***/ vr6h: /***/ function (module) {
      module.exports = JSON.parse(
        '{"data":[{"id":"Custom_Project_ID_001","name":"Automated Pain Assessment Using Facial Expression","createdAt":"2023-05-15T00:00:00Z","url":"https://example.com","description":"An AI-based project aimed at automating pain assessment using facial expression analysis.","isFork":false,"languages":[{"name":"Python","iconifyClass":"logos-python"},{"name":"Dart","iconifyClass":"logos-dart"},{"name":"Flask","iconifyClass":"logos-flask"},{"name":"Firebase","iconifyClass":"logos-firebase"}]},{"id":"R_kgDOMqMtLg","name":"Ecommerce-Project-Frontend-Part","createdAt":"2024-08-29T19:56:49Z","url":"https://github.com/EnasBatarfi/Ecommerce-Project-Frontend-Part","description":"A frontend project for an e-commerce platform that focuses on user experience and interface design.","isFork":false,"languages":[{"name":"HTML","iconifyClass":"logos-html-5"},{"name":"JavaScript","iconifyClass":"logos-javascript"},{"name":"CSS","iconifyClass":"logos-css-3"}]},{"id":"R_kgDOL7SvXQ","name":"Ecommerce-Project-Backend-Part","createdAt":"2024-05-14T07:51:04Z","url":"https://github.com/EnasBatarfi/Ecommerce-Project-Backend-Part","description":"Backend development for an e-commerce platform focused on building a secure and scalable foundation.","isFork":false,"languages":[{"name":"C#","iconifyClass":"logos-c-sharp"},{"name":"Dockerfile","iconifyClass":"simple-icons:docker"}]},{"id":"R_kgDOMqcDnA","name":"Todo-App","createdAt":"2024-08-30T09:32:29Z","url":"https://github.com/EnasBatarfi/Todo-App","description":"A simple to-do list application that helps users track tasks and stay organized.","isFork":false,"languages":[{"name":"HTML","iconifyClass":"logos-html-5"},{"name":"JavaScript","iconifyClass":"logos-javascript"},{"name":"CSS","iconifyClass":"logos-css-3"}]},{"id":"R_kgDOMqcAxw","name":"Banking-App","createdAt":"2024-08-30T09:30:46Z","url":"https://github.com/EnasBatarfi/Banking-App","description":"A banking application that provides a secure environment for managing financial transactions.","isFork":false,"languages":[{"name":"JavaScript","iconifyClass":"logos-javascript"}]},{"id":"R_kgDOMqcIKQ","name":"Ecommerce-Landing-Page","createdAt":"2024-08-30T09:35:25Z","url":"https://github.com/EnasBatarfi/Ecommerce-Landing-Page-","description":"A landing page designed to engage visitors and promote an e-commerce platform.","isFork":false,"languages":[{"name":"HTML","iconifyClass":"logos-html-5"},{"name":"CSS","iconifyClass":"logos-css-3"}]}]}'
      );

      /***/
    },

    /******/
  }
);
