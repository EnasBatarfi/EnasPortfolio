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
  /******/ /******/ return __webpack_require__((__webpack_require__.s = 10));
  /******/
})(
  /************************************************************************/
  /******/ {
    /***/ "0oLP": /***/ function (module, exports) {
      /***/
    },

    /***/ 10: /***/ function (module, exports, __webpack_require__) {
      module.exports = __webpack_require__("aJCb");

      /***/
    },

    /***/ "1ZGf": /***/ function (module) {
      module.exports = JSON.parse(
        '{"data":[],"open":0,"closed":0,"totalCount":0}'
      );

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

    /***/ "5RjE": /***/ function (module) {
      module.exports = JSON.parse(
        '{"data":[{"login":"Integrify-Finland","avatarUrl":"https://avatars.githubusercontent.com/u/34094527?v=4","__typename":"Organization"}]}'
      );

      /***/
    },

    /***/ "9896": /***/ function (module, exports) {
      /***/
    },

    /***/ CiQn: /***/ function (module, exports) {
      /***/
    },

    /***/ Dq34: /***/ function (
      module,
      __webpack_exports__,
      __webpack_require__
    ) {
      "use strict";
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        "a",
        function () {
          return Footer;
        }
      );
      /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        "cDcd"
      );
      /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
        react__WEBPACK_IMPORTED_MODULE_0__
      );
      /* harmony import */ var _Footer_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
        "vIAb"
      );
      /* harmony import */ var _Footer_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
        _Footer_css__WEBPACK_IMPORTED_MODULE_1__
      );
      /* harmony import */ var react_reveal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
        "HfBV"
      );
      /* harmony import */ var react_reveal__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(
        react_reveal__WEBPACK_IMPORTED_MODULE_2__
      );
      /* harmony import */ var _portfolio_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
        "QjGT"
      );
      var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

      /* eslint-disable jsx-a11y/accessible-emoji */

      function Footer(props) {
        return __jsx(
          "div",
          {
            className: "footer-div",
          },
          __jsx(
            react_reveal__WEBPACK_IMPORTED_MODULE_2__["Fade"],
            null,
            __jsx(
              "p",
              {
                className: "footer-text",
                style: {
                  color: props.theme.secondaryText,
                },
              },
              "Made with ",
              __jsx(
                "span",
                {
                  role: "img",
                },
                "\u2764\uFE0F"
              ),
              " by ",
              _portfolio_js__WEBPACK_IMPORTED_MODULE_3__[/* greeting */ "f"]
                .title
            )
          )
        );
      }

      /***/
    },

    /***/ HfBV: /***/ function (module, exports) {
      module.exports = require("react-reveal");

      /***/
    },

    /***/ INKo: /***/ function (module, exports) {
      /***/
    },

    /***/ IZS3: /***/ function (module, exports) {
      module.exports = require("react-bootstrap");

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

    /***/ WfwW: /***/ function (module, exports) {
      /***/
    },

    /***/ X2J8: /***/ function (module, exports) {
      /***/
    },

    /***/ ZBbe: /***/ function (
      module,
      __webpack_exports__,
      __webpack_require__
    ) {
      "use strict";

      // EXTERNAL MODULE: external "react"
      var external_react_ = __webpack_require__("cDcd");
      var external_react_default = /*#__PURE__*/ __webpack_require__.n(
        external_react_
      );

      // EXTERNAL MODULE: ./src/components/header/Header.css
      var header_Header = __webpack_require__("ye91");

      // EXTERNAL MODULE: external "react-reveal"
      var external_react_reveal_ = __webpack_require__("HfBV");

      // EXTERNAL MODULE: external "react-router-dom"
      var external_react_router_dom_ = __webpack_require__("oncg");

      // EXTERNAL MODULE: ./src/portfolio.js
      var portfolio = __webpack_require__("QjGT");

      // EXTERNAL MODULE: external "react-helmet"
      var external_react_helmet_ = __webpack_require__("zIXN");

      // CONCATENATED MODULE: ./src/components/seoHeader/SeoHeader.js
      var __jsx = external_react_default.a.createElement;

      function SeoHeader() {
        var _experience$sections,
          _experience$sections$,
          _experience$sections$2,
          _seo$og,
          _contactPageData$phon,
          _contactPageData$addr,
          _contactPageData$addr2,
          _contactPageData$addr3,
          _contactPageData$addr4,
          _contactPageData$addr5,
          _seo$og2,
          _seo$og3,
          _seo$og4;
        let sameAs = [];
        portfolio["k" /* socialMediaLinks */]
          .filter(
            (media) =>
              !(media.link.startsWith("tel") || media.link.startsWith("mailto"))
          )
          .forEach((media) => {
            sameAs.push(media.link);
          });
        let mail = portfolio["k" /* socialMediaLinks */]
          .find((media) => media.link.startsWith("mailto"))
          .link.substring("mailto:".length);
        let job =
          (_experience$sections = portfolio["e" /* experience */].sections) ===
            null || _experience$sections === void 0
            ? void 0
            : (_experience$sections$ = _experience$sections.find(
                (section) => section.work
              )) === null || _experience$sections$ === void 0
            ? void 0
            : (_experience$sections$2 = _experience$sections$.experiences) ===
                null || _experience$sections$2 === void 0
            ? void 0
            : _experience$sections$2.at(0);
        let credentials = [];
        portfolio["a" /* certifications */].certifications.forEach(
          (certification) => {
            credentials.push({
              "@context": "https://schema.org",
              "@type": "EducationalOccupationalCredential",
              url: certification.certificate_link,
              name: certification.title,
              description: certification.subtitle,
            });
          }
        );
        const data = {
          "@context": "https://schema.org/",
          "@type": "Person",
          name: portfolio["f" /* greeting */].title,
          url:
            portfolio["h" /* seo */] === null ||
            portfolio["h" /* seo */] === void 0
              ? void 0
              : (_seo$og = portfolio["h" /* seo */].og) === null ||
                _seo$og === void 0
              ? void 0
              : _seo$og.url,
          email: mail,
          telephone:
            (_contactPageData$phon =
              portfolio["c" /* contactPageData */].phoneSection) === null ||
            _contactPageData$phon === void 0
              ? void 0
              : _contactPageData$phon.subtitle,
          sameAs: sameAs,
          jobTitle: job.title,
          worksFor: {
            "@type": "Organization",
            name: job.company,
          },
          address: {
            "@type": "PostalAddress",
            addressLocality:
              (_contactPageData$addr =
                portfolio["c" /* contactPageData */].addressSection) === null ||
              _contactPageData$addr === void 0
                ? void 0
                : _contactPageData$addr.locality,
            addressRegion:
              (_contactPageData$addr2 =
                portfolio["c" /* contactPageData */].addressSection) === null ||
              _contactPageData$addr2 === void 0
                ? void 0
                : _contactPageData$addr2.region,
            addressCountry:
              (_contactPageData$addr3 =
                portfolio["c" /* contactPageData */].addressSection) === null ||
              _contactPageData$addr3 === void 0
                ? void 0
                : _contactPageData$addr3.country,
            postalCode:
              (_contactPageData$addr4 =
                portfolio["c" /* contactPageData */].addressSection) === null ||
              _contactPageData$addr4 === void 0
                ? void 0
                : _contactPageData$addr4.postalCode,
            streetAddress:
              (_contactPageData$addr5 =
                portfolio["c" /* contactPageData */].addressSection) === null ||
              _contactPageData$addr5 === void 0
                ? void 0
                : _contactPageData$addr5.streetAddress,
          },
          hasCredential: credentials,
        };
        return __jsx(
          external_react_helmet_["Helmet"],
          null,
          __jsx("title", null, portfolio["h" /* seo */].title),
          __jsx("meta", {
            name: "description",
            content: portfolio["h" /* seo */].description,
          }),
          __jsx("meta", {
            property: "og:title",
            content:
              portfolio["h" /* seo */] === null ||
              portfolio["h" /* seo */] === void 0
                ? void 0
                : (_seo$og2 = portfolio["h" /* seo */].og) === null ||
                  _seo$og2 === void 0
                ? void 0
                : _seo$og2.title,
          }),
          __jsx("meta", {
            property: "og:type",
            content:
              portfolio["h" /* seo */] === null ||
              portfolio["h" /* seo */] === void 0
                ? void 0
                : (_seo$og3 = portfolio["h" /* seo */].og) === null ||
                  _seo$og3 === void 0
                ? void 0
                : _seo$og3.type,
          }),
          __jsx("meta", {
            property: "og:url",
            content:
              portfolio["h" /* seo */] === null ||
              portfolio["h" /* seo */] === void 0
                ? void 0
                : (_seo$og4 = portfolio["h" /* seo */].og) === null ||
                  _seo$og4 === void 0
                ? void 0
                : _seo$og4.url,
          }),
          __jsx(
            "script",
            {
              type: "application/ld+json",
            },
            JSON.stringify(data)
          )
        );
      }
      /* harmony default export */ var seoHeader_SeoHeader = SeoHeader;
      // CONCATENATED MODULE: ./src/components/header/Header.js
      var Header_jsx = external_react_default.a.createElement;

      const onMouseEnter = (event, color) => {
        const el = event.target;
        el.style.backgroundColor = color;
      };
      const onMouseOut = (event) => {
        const el = event.target;
        el.style.backgroundColor = "transparent";
      };
      class Header_Header extends external_react_["Component"] {
        render() {
          const theme = this.props.theme;
          const link = portfolio["i" /* settings */].isSplash
            ? "/splash"
            : "home";
          return Header_jsx(
            external_react_reveal_["Fade"],
            {
              top: true,
              duration: 1000,
              distance: "20px",
            },
            Header_jsx(seoHeader_SeoHeader, null),
            Header_jsx(
              "div",
              null,
              Header_jsx(
                "header",
                {
                  className: "header",
                },
                Header_jsx(
                  external_react_router_dom_["NavLink"],
                  {
                    to: link,
                    tag: external_react_router_dom_["Link"],
                    className: "logo",
                  },
                  Header_jsx(
                    "span",
                    {
                      style: {
                        color: theme.text,
                      },
                    },
                    " <"
                  ),
                  Header_jsx(
                    "span",
                    {
                      className: "logo-name",
                      style: {
                        color: theme.text,
                      },
                    },
                    portfolio["f" /* greeting */].logo_name
                  ),
                  Header_jsx(
                    "span",
                    {
                      style: {
                        color: theme.text,
                      },
                    },
                    "/>"
                  )
                ),
                Header_jsx("input", {
                  className: "menu-btn",
                  type: "checkbox",
                  id: "menu-btn",
                }),
                Header_jsx(
                  "label",
                  {
                    className: "menu-icon",
                    htmlFor: "menu-btn",
                  },
                  Header_jsx("span", {
                    className: "navicon",
                  })
                ),
                Header_jsx(
                  "ul",
                  {
                    className: "menu",
                    style: {
                      backgroundColor: theme.body,
                    },
                  },
                  Header_jsx(
                    "li",
                    null,
                    Header_jsx(
                      external_react_router_dom_["NavLink"],
                      {
                        to: "/home",
                        tag: external_react_router_dom_["Link"],
                        activeStyle: {
                          fontWeight: "bold",
                        },
                        style: {
                          color: theme.text,
                        },
                        onMouseEnter: (event) =>
                          onMouseEnter(event, theme.highlight),
                        onMouseOut: (event) => onMouseOut(event),
                      },
                      "Home"
                    )
                  ),
                  Header_jsx(
                    "li",
                    null,
                    Header_jsx(
                      external_react_router_dom_["NavLink"],
                      {
                        to: "/education",
                        tag: external_react_router_dom_["Link"],
                        activeStyle: {
                          fontWeight: "bold",
                        },
                        style: {
                          color: theme.text,
                        },
                        onMouseEnter: (event) =>
                          onMouseEnter(event, theme.highlight),
                        onMouseOut: (event) => onMouseOut(event),
                      },
                      "Education"
                    )
                  ),
                  Header_jsx(
                    "li",
                    null,
                    Header_jsx(
                      external_react_router_dom_["NavLink"],
                      {
                        to: "/experience",
                        tag: external_react_router_dom_["Link"],
                        activeStyle: {
                          fontWeight: "bold",
                        },
                        style: {
                          color: theme.text,
                        },
                        onMouseEnter: (event) =>
                          onMouseEnter(event, theme.highlight),
                        onMouseOut: (event) => onMouseOut(event),
                      },
                      "Experience"
                    )
                  ),
                  Header_jsx(
                    "li",
                    null,
                    Header_jsx(
                      external_react_router_dom_["NavLink"],
                      {
                        to: "/projects",
                        tag: external_react_router_dom_["Link"],
                        activeStyle: {
                          fontWeight: "bold",
                        },
                        style: {
                          color: theme.text,
                        },
                        onMouseEnter: (event) =>
                          onMouseEnter(event, theme.highlight),
                        onMouseOut: (event) => onMouseOut(event),
                      },
                      "Projects"
                    )
                  ),
                  Header_jsx(
                    "li",
                    null,
                    Header_jsx(
                      external_react_router_dom_["NavLink"],
                      {
                        to: "/contact",
                        tag: external_react_router_dom_["Link"],
                        activeStyle: {
                          fontWeight: "bold",
                        },
                        style: {
                          color: theme.text,
                        },
                        onMouseEnter: (event) =>
                          onMouseEnter(event, theme.highlight),
                        onMouseOut: (event) => onMouseOut(event),
                      },
                      "Contact Me"
                    )
                  )
                )
              )
            )
          );
        }
      }
      /* harmony default export */ var components_header_Header = (__webpack_exports__[
        "a"
      ] = Header_Header);

      /***/
    },

    /***/ Zj6i: /***/ function (module, exports) {
      /***/
    },

    /***/ aJCb: /***/ function (
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

      // EXTERNAL MODULE: ./src/components/header/Header.js + 1 modules
      var Header = __webpack_require__("ZBbe");

      // EXTERNAL MODULE: ./src/components/footer/Footer.js
      var Footer = __webpack_require__("Dq34");

      // EXTERNAL MODULE: external "react-chartjs-2"
      var external_react_chartjs_2_ = __webpack_require__("t3hY");

      // EXTERNAL MODULE: external "react-reveal"
      var external_react_reveal_ = __webpack_require__("HfBV");

      // EXTERNAL MODULE: ./src/components/pullRequestChart/PullRequestChart.css
      var pullRequestChart_PullRequestChart = __webpack_require__("9896");

      // EXTERNAL MODULE: ./src/shared/opensource/pull_requests.json
      var pull_requests = __webpack_require__("ku/W");

      // CONCATENATED MODULE: ./src/components/pullRequestChart/PullRequestChart.js
      var __jsx = external_react_default.a.createElement;

      class PullRequestChart_PullRequestChart extends external_react_[
        "Component"
      ] {
        render() {
          const data = {
            labels: ["Open", "Merged", "Closed"],
            datasets: [
              {
                data: [
                  pull_requests["open"],
                  pull_requests["merged"],
                  pull_requests["closed"],
                ],
                backgroundColor: ["#28a745", "#6f42c1", "#d73a49"],
                hoverBackgroundColor: ["#28a745dd", "#6f42c1dd", "#d73a49dd"],
              },
            ],
          };
          return __jsx(
            "div",
            {
              className: "pr-chart",
            },
            __jsx(
              external_react_reveal_["Fade"],
              {
                bottom: true,
                duration: 2000,
                distance: "20px",
              },
              __jsx(
                "h2",
                {
                  className: "pr-chart-header",
                },
                "Pull Request Distribution"
              )
            ),
            __jsx(external_react_chartjs_2_["Doughnut"], {
              data: data,
              options: {
                padding: "0",
                margin: "0",
                responsive: true,
                maintainAspectRatio: true,
                animation: {
                  duration: 4000,
                },
              },
            })
          );
        }
      }
      /* harmony default export */ var components_pullRequestChart_PullRequestChart = PullRequestChart_PullRequestChart;
      // EXTERNAL MODULE: ./src/components/issueChart/IssueChart.css
      var issueChart_IssueChart = __webpack_require__("t+/5");

      // EXTERNAL MODULE: ./src/shared/opensource/issues.json
      var issues = __webpack_require__("1ZGf");

      // CONCATENATED MODULE: ./src/components/issueChart/IssueChart.js
      var IssueChart_jsx = external_react_default.a.createElement;

      class IssueChart_IssueChart extends external_react_["Component"] {
        render() {
          const data = {
            labels: ["Open", "Closed"],
            datasets: [
              {
                data: [issues["open"], issues["closed"]],
                backgroundColor: ["#28a745", "#d73a49"],
                hoverBackgroundColor: ["#28a745dd", "#d73a49dd"],
              },
            ],
          };
          return IssueChart_jsx(
            "div",
            {
              className: "issue-chart",
            },
            IssueChart_jsx(
              external_react_reveal_["Fade"],
              {
                bottom: true,
                duration: 2000,
                distance: "20px",
              },
              IssueChart_jsx(
                "h2",
                {
                  className: "issue-chart-header",
                },
                "Issue Distribution"
              )
            ),
            IssueChart_jsx(external_react_chartjs_2_["Doughnut"], {
              data: data,
              options: {
                margin: "0",
                padding: "0",
                responsive: true,
                maintainAspectRatio: true,
                animation: {
                  duration: 4000,
                },
              },
            })
          );
        }
      }
      /* harmony default export */ var components_issueChart_IssueChart = IssueChart_IssueChart;
      // EXTERNAL MODULE: ./src/containers/opensourceCharts/OpensourceCharts.css
      var opensourceCharts_OpensourceCharts = __webpack_require__("WfwW");

      // CONCATENATED MODULE: ./src/containers/opensourceCharts/OpensourceCharts.js
      var OpensourceCharts_jsx = external_react_default.a.createElement;

      class OpensourceCharts_OpensourceCharts extends external_react_[
        "Component"
      ] {
        render() {
          const theme = this.props.theme;
          return OpensourceCharts_jsx(
            "div",
            {
              className: "main-div",
            },
            OpensourceCharts_jsx(
              "div",
              {
                className: "os-charts-header-div",
              },
              OpensourceCharts_jsx(
                external_react_reveal_["Fade"],
                {
                  bottom: true,
                  duration: 2000,
                  distance: "20px",
                },
                OpensourceCharts_jsx(
                  "h1",
                  {
                    className: "os-charts-header",
                    style: {
                      color: theme.text,
                    },
                  },
                  "Contributions"
                )
              )
            ),
            OpensourceCharts_jsx(
              "div",
              {
                className: "os-charts-body-div",
              },
              OpensourceCharts_jsx(
                components_pullRequestChart_PullRequestChart,
                null
              ),
              OpensourceCharts_jsx(components_issueChart_IssueChart, null)
            )
          );
        }
      }
      /* harmony default export */ var containers_opensourceCharts_OpensourceCharts = OpensourceCharts_OpensourceCharts;
      // EXTERNAL MODULE: ./src/containers/organizations/Organizations.css
      var organizations_Organizations = __webpack_require__("Zj6i");

      // EXTERNAL MODULE: ./src/components/organizationList/OrganizationList.css
      var organizationList_OrganizationList = __webpack_require__("X2J8");

      // EXTERNAL MODULE: external "react-bootstrap"
      var external_react_bootstrap_ = __webpack_require__("IZS3");

      // CONCATENATED MODULE: ./src/components/organizationList/OrganizationList.js
      var OrganizationList_jsx = external_react_default.a.createElement;

      class OrganizationList_OrganizationList extends external_react_[
        "Component"
      ] {
        render() {
          return OrganizationList_jsx(
            "div",
            {
              className: "organizations-main-div",
            },
            OrganizationList_jsx(
              "ul",
              {
                className: "dev-icons-orgs",
              },
              this.props.logos.map((logo) => {
                return OrganizationList_jsx(
                  external_react_bootstrap_["OverlayTrigger"],
                  {
                    key: logo["login"],
                    placement: "top",
                    style: {
                      marginBottom: "5px",
                    },
                    overlay: OrganizationList_jsx(
                      external_react_bootstrap_["Tooltip"],
                      {
                        id: `tooltip-top`,
                      },
                      OrganizationList_jsx("strong", null, logo["login"])
                    ),
                  },
                  OrganizationList_jsx(
                    "li",
                    {
                      className: "organizations-inline",
                      name: logo["login"],
                    },
                    OrganizationList_jsx(
                      external_react_reveal_["Fade"],
                      {
                        bottom: true,
                        duration: 2000,
                        distance: "40px",
                      },
                      OrganizationList_jsx("img", {
                        className: "organizations-img",
                        src: logo["avatarUrl"],
                        alt: logo["login"],
                      })
                    )
                  )
                );
              })
            )
          );
        }
      }
      /* harmony default export */ var components_organizationList_OrganizationList = OrganizationList_OrganizationList;
      // EXTERNAL MODULE: ./src/shared/opensource/organizations.json
      var organizations = __webpack_require__("5RjE");

      // CONCATENATED MODULE: ./src/containers/organizations/Organizations.js
      var Organizations_jsx = external_react_default.a.createElement;

      class Organizations_Organizations extends external_react_["Component"] {
        render() {
          const theme = this.props.theme;
          return Organizations_jsx(
            "div",
            {
              id: "organizations",
            },
            Organizations_jsx(
              "div",
              {
                className: "organizations-header-div",
              },
              Organizations_jsx(
                external_react_reveal_["Fade"],
                {
                  bottom: true,
                  duration: 2000,
                  distance: "20px",
                },
                Organizations_jsx(
                  "h1",
                  {
                    className: "organizations-header",
                    style: {
                      color: theme.text,
                    },
                  },
                  "Contributed Organizations"
                )
              )
            ),
            Organizations_jsx(components_organizationList_OrganizationList, {
              logos: organizations["data"],
            })
          );
        }
      }
      /* harmony default export */ var containers_organizations_Organizations = Organizations_Organizations;
      // EXTERNAL MODULE: ./src/containers/pullRequests/PullRequests.css
      var pullRequests_PullRequests = __webpack_require__("CiQn");

      // EXTERNAL MODULE: ./src/components/pullRequestCard/PullRequestCard.css
      var pullRequestCard_PullRequestCard = __webpack_require__("INKo");

      // CONCATENATED MODULE: ./src/components/pullRequestCard/PullRequestCard.js
      var PullRequestCard_jsx = external_react_default.a.createElement;

      class PullRequestCard_PullRequestCard extends external_react_[
        "Component"
      ] {
        render() {
          const pullRequest = this.props.pullRequest;
          var iconPR;
          var bgColor;
          if (pullRequest["state"] === "OPEN") {
            iconPR = {
              iconifyClass: "octicon:git-pull-request",
              style: {
                color: "#28a745",
              },
            };
            bgColor = "#dcffe4";
          } else if (pullRequest["state"] === "MERGED") {
            iconPR = {
              iconifyClass: "octicon:git-merge",
              style: {
                color: "#6f42c1",
              },
            };
            bgColor = "#f5f0ff";
          } else {
            iconPR = {
              iconifyClass: "octicon:git-pull-request",
              style: {
                color: "#d73a49",
              },
            };
            bgColor = "#ffdce0";
          }
          var subtitleString =
            "#" +
            pullRequest["number"] +
            " opened on " +
            pullRequest["createdAt"].split("T")[0];
          var mergedBy;
          if (pullRequest["mergedBy"] !== null) {
            const name = pullRequest["mergedBy"]["login"];
            mergedBy = PullRequestCard_jsx(
              external_react_bootstrap_["OverlayTrigger"],
              {
                key: name,
                placement: "top",
                style: {
                  marginBottom: "5px",
                },
                overlay: PullRequestCard_jsx(
                  external_react_bootstrap_["Tooltip"],
                  {
                    id: `tooltip-top`,
                  },
                  PullRequestCard_jsx("strong", null, `Merged by ${name}`)
                ),
              },
              PullRequestCard_jsx(
                "a",
                {
                  href: pullRequest["mergedBy"]["url"],
                  target: "_blank",
                  rel: "noopener noreferrer",
                },
                PullRequestCard_jsx("img", {
                  className: "merge-by-img",
                  src: pullRequest["mergedBy"]["avatarUrl"],
                  alt: "",
                })
              )
            );
          } else {
            mergedBy = PullRequestCard_jsx("noscript", null);
          }
          return PullRequestCard_jsx(
            external_react_reveal_["Fade"],
            {
              bottom: true,
              duration: 2000,
              distance: "40px",
            },
            PullRequestCard_jsx(
              "div",
              {
                className: "pull-request-card",
                style: {
                  backgroundColor: bgColor,
                  border: `1px solid ${iconPR.style.color}`,
                },
              },
              PullRequestCard_jsx(
                "div",
                {
                  className: "pr-top",
                },
                PullRequestCard_jsx(
                  "div",
                  {
                    className: "pr-header",
                  },
                  PullRequestCard_jsx("span", {
                    className: "iconify pr-icons",
                    "data-icon": iconPR.iconifyClass,
                    style: iconPR.style,
                    "data-inline": "false",
                  }),
                  PullRequestCard_jsx(
                    "div",
                    {
                      className: "pr-title-header",
                    },
                    PullRequestCard_jsx(
                      "p",
                      {
                        className: "pr-title",
                      },
                      PullRequestCard_jsx(
                        "a",
                        {
                          href: pullRequest["url"],
                          target: "_blank",
                          rel: "noopener noreferrer",
                        },
                        pullRequest["title"]
                      )
                    ),
                    PullRequestCard_jsx(
                      "p",
                      {
                        className: "pr-subtitle",
                      },
                      subtitleString
                    )
                  )
                ),
                PullRequestCard_jsx(
                  "div",
                  {
                    className: "files-changed-header",
                  },
                  PullRequestCard_jsx(
                    "p",
                    {
                      className: "files-changed-text",
                      style: {
                        backgroundColor: iconPR.style.color,
                      },
                    },
                    pullRequest["changedFiles"]
                  ),
                  PullRequestCard_jsx(
                    "p",
                    {
                      className: "files-changed-text-2",
                    },
                    "Files Changed"
                  )
                )
              ),
              PullRequestCard_jsx(
                "div",
                {
                  className: "pr-down",
                },
                PullRequestCard_jsx(
                  "div",
                  {
                    className: "changes-repo",
                  },
                  PullRequestCard_jsx(
                    "p",
                    {
                      className: "parent-repo",
                    },
                    "Repository:",
                    " ",
                    PullRequestCard_jsx(
                      "a",
                      {
                        style: {
                          color: iconPR.style.color,
                        },
                        href: pullRequest["baseRepository"]["url"],
                      },
                      pullRequest["baseRepository"]["owner"]["login"],
                      "/",
                      pullRequest["baseRepository"]["name"]
                    )
                  ),
                  PullRequestCard_jsx(
                    "div",
                    {
                      className: "changes-files",
                    },
                    PullRequestCard_jsx(
                      "p",
                      {
                        className: "additions-files",
                      },
                      PullRequestCard_jsx(
                        "strong",
                        null,
                        pullRequest["additions"],
                        " + "
                      )
                    ),
                    PullRequestCard_jsx(
                      "p",
                      {
                        className: "deletions-files",
                      },
                      PullRequestCard_jsx(
                        "strong",
                        null,
                        pullRequest["deletions"],
                        " - "
                      )
                    ),
                    mergedBy
                  )
                ),
                PullRequestCard_jsx(
                  "div",
                  {
                    className: "owner-img-div",
                  },
                  PullRequestCard_jsx(
                    "a",
                    {
                      href: pullRequest["baseRepository"]["owner"]["url"],
                      target: "_blank",
                      rel: "noopener noreferrer",
                    },
                    PullRequestCard_jsx("img", {
                      className: "owner-img",
                      src: pullRequest["baseRepository"]["owner"]["avatarUrl"],
                      alt: "",
                    })
                  )
                )
              )
            )
          );
        }
      }
      /* harmony default export */ var components_pullRequestCard_PullRequestCard = PullRequestCard_PullRequestCard;
      // CONCATENATED MODULE: ./src/containers/pullRequests/PullRequests.js
      var PullRequests_jsx = external_react_default.a.createElement;

      class PullRequests_PullRequests extends external_react_["Component"] {
        render() {
          const theme = this.props.theme;
          return PullRequests_jsx(
            "div",
            null,
            PullRequests_jsx(
              "div",
              {
                className: "pull-requests-header-div",
              },
              PullRequests_jsx(
                external_react_reveal_["Fade"],
                {
                  bottom: true,
                  duration: 2000,
                  distance: "20px",
                },
                PullRequests_jsx(
                  "h1",
                  {
                    className: "pull-requests-header",
                    style: {
                      color: theme.text,
                    },
                  },
                  "Pull Requests"
                )
              )
            ),
            PullRequests_jsx(
              "div",
              {
                className: "pull-request-body-div",
              },
              pull_requests["data"].map((pullRequest) => {
                return PullRequests_jsx(
                  components_pullRequestCard_PullRequestCard,
                  {
                    pullRequest: pullRequest,
                  }
                );
              })
            )
          );
        }
      }
      /* harmony default export */ var containers_pullRequests_PullRequests = PullRequests_PullRequests;
      // EXTERNAL MODULE: ./src/containers/issues/Issues.css
      var issues_Issues = __webpack_require__("sosd");

      // EXTERNAL MODULE: ./src/components/issueCard/IssueCard.css
      var issueCard_IssueCard = __webpack_require__("ur+B");

      // CONCATENATED MODULE: ./src/components/issueCard/IssueCard.js
      var IssueCard_jsx = external_react_default.a.createElement;

      class IssueCard_IssueCard extends external_react_["Component"] {
        render() {
          const issue = this.props.issue;
          var iconPR;
          var bgColor;
          if (issue["closed"] === false) {
            iconPR = {
              iconifyClass: "octicon:issue-opened",
              style: {
                color: "#28a745",
              },
            };
            bgColor = "#dcffe4";
          } else {
            iconPR = {
              iconifyClass: "octicon:issue-closed",
              style: {
                color: "#d73a49",
              },
            };
            bgColor = "#ffdce0";
          }
          var subtitleString =
            "#" +
            issue["number"] +
            " opened on " +
            issue["createdAt"].split("T")[0];
          var assignee;
          if (issue["assignees"]["nodes"].length > 0) {
            const name = issue["assignees"]["nodes"][0]["name"];
            assignee = IssueCard_jsx(
              external_react_bootstrap_["OverlayTrigger"],
              {
                key: name,
                placement: "top",
                style: {
                  marginBottom: "5px",
                },
                overlay: IssueCard_jsx(
                  external_react_bootstrap_["Tooltip"],
                  {
                    id: `tooltip-top`,
                  },
                  IssueCard_jsx("strong", null, `Assigned to ${name}`)
                ),
              },
              IssueCard_jsx(
                "a",
                {
                  href: issue["assignees"]["nodes"][0]["url"],
                  target: "_blank",
                  rel: "noopener noreferrer",
                },
                IssueCard_jsx("img", {
                  className: "assigned-to-img",
                  src: issue["assignees"]["nodes"][0]["avatarUrl"],
                  alt: "",
                })
              )
            );
          } else {
            assignee = IssueCard_jsx("noscript", null);
          }
          return IssueCard_jsx(
            external_react_reveal_["Fade"],
            {
              bottom: true,
              duration: 2000,
              distance: "40px",
            },
            IssueCard_jsx(
              "div",
              {
                className: "issue-card",
                style: {
                  backgroundColor: bgColor,
                  border: `1px solid ${iconPR.style.color}`,
                },
              },
              IssueCard_jsx(
                "div",
                {
                  className: "issue-top",
                },
                IssueCard_jsx(
                  "div",
                  {
                    className: "issue-header",
                  },
                  IssueCard_jsx("span", {
                    className: "iconify issue-icons",
                    "data-icon": iconPR.iconifyClass,
                    style: iconPR.style,
                    "data-inline": "false",
                  }),
                  IssueCard_jsx(
                    "div",
                    {
                      className: "issue-title-header",
                    },
                    IssueCard_jsx(
                      "p",
                      {
                        className: "issue-title",
                      },
                      IssueCard_jsx(
                        "a",
                        {
                          href: issue["url"],
                          target: "_blank",
                          rel: "noopener noreferrer",
                        },
                        issue["title"]
                      )
                    ),
                    IssueCard_jsx(
                      "p",
                      {
                        className: "issue-subtitle",
                      },
                      subtitleString
                    )
                  )
                )
              ),
              IssueCard_jsx(
                "div",
                {
                  className: "issue-down",
                },
                IssueCard_jsx(
                  "div",
                  {
                    className: "assignee-repo",
                  },
                  IssueCard_jsx(
                    "p",
                    {
                      className: "parent-repo",
                    },
                    "Repository:",
                    " ",
                    IssueCard_jsx(
                      "a",
                      {
                        style: {
                          color: iconPR.style.color,
                        },
                        href: issue["repository"]["url"],
                      },
                      issue["repository"]["owner"]["login"],
                      "/",
                      issue["repository"]["name"]
                    )
                  ),
                  IssueCard_jsx(
                    "div",
                    {
                      className: "assignee-info",
                    },
                    assignee
                  )
                ),
                IssueCard_jsx(
                  "div",
                  {
                    className: "owner-img-div",
                  },
                  IssueCard_jsx(
                    "a",
                    {
                      href: issue["repository"]["owner"]["url"],
                      target: "_blank",
                      rel: "noopener noreferrer",
                    },
                    IssueCard_jsx("img", {
                      className: "owner-img",
                      src: issue["repository"]["owner"]["avatarUrl"],
                      alt: "",
                    })
                  )
                )
              )
            )
          );
        }
      }
      /* harmony default export */ var components_issueCard_IssueCard = IssueCard_IssueCard;
      // CONCATENATED MODULE: ./src/containers/issues/Issues.js
      var Issues_jsx = external_react_default.a.createElement;

      class Issues_Issues extends external_react_["Component"] {
        render() {
          const theme = this.props.theme;
          return Issues_jsx(
            "div",
            null,
            Issues_jsx(
              "div",
              {
                className: "issues-header-div",
              },
              Issues_jsx(
                external_react_reveal_["Fade"],
                {
                  bottom: true,
                  duration: 2000,
                  distance: "20px",
                },
                Issues_jsx(
                  "h1",
                  {
                    className: "issues-header",
                    style: {
                      color: theme.text,
                    },
                  },
                  "Issues"
                )
              )
            ),
            Issues_jsx(
              "div",
              {
                className: "issues-body-div",
              },
              issues["data"].map((issue) => {
                return Issues_jsx(components_issueCard_IssueCard, {
                  issue: issue,
                });
              })
            )
          );
        }
      }
      /* harmony default export */ var containers_issues_Issues = Issues_Issues;
      // EXTERNAL MODULE: ./src/components/topButton/TopButton.js
      var TopButton = __webpack_require__("3X8q");

      // EXTERNAL MODULE: ./src/pages/opensource/Opensource.css
      var opensource_Opensource = __webpack_require__("0oLP");

      // CONCATENATED MODULE: ./src/pages/opensource/Opensource.js
      var Opensource_jsx = external_react_default.a.createElement;

      class Opensource_Opensource extends external_react_["Component"] {
        render() {
          return Opensource_jsx(
            "div",
            {
              className: "opensource-main",
            },
            Opensource_jsx(Header["a" /* default */], {
              theme: this.props.theme,
            }),
            Opensource_jsx(containers_organizations_Organizations, {
              theme: this.props.theme,
            }),
            Opensource_jsx(containers_opensourceCharts_OpensourceCharts, {
              theme: this.props.theme,
            }),
            Opensource_jsx(containers_pullRequests_PullRequests, {
              theme: this.props.theme,
            }),
            Opensource_jsx(containers_issues_Issues, {
              theme: this.props.theme,
            }),
            Opensource_jsx(Footer["a" /* default */], {
              theme: this.props.theme,
              onToggle: this.props.onToggle,
            }),
            Opensource_jsx(TopButton["a" /* default */], {
              theme: this.props.theme,
            })
          );
        }
      }
      /* harmony default export */ var pages_opensource_Opensource = (__webpack_exports__[
        "default"
      ] = Opensource_Opensource);

      /***/
    },

    /***/ bOmX: /***/ function (module, exports) {
      /***/
    },

    /***/ cDcd: /***/ function (module, exports) {
      module.exports = require("react");

      /***/
    },

    /***/ "ku/W": /***/ function (module) {
      module.exports = JSON.parse(
        '{"data":[{"id":"PR_kwDOL54its5v3UOr","title":"Enas\'s Front End","url":"https://github.com/Integrify-Finland/sda-online-2-frontend/pull/34","state":"OPEN","mergedBy":null,"createdAt":"2024-05-18T14:54:04Z","number":34,"changedFiles":96,"additions":13761,"deletions":1102,"baseRepository":{"name":"sda-online-2-frontend","url":"https://github.com/Integrify-Finland/sda-online-2-frontend","owner":{"avatarUrl":"https://avatars.githubusercontent.com/u/34094527?v=4","login":"Integrify-Finland","url":"https://github.com/Integrify-Finland"}}},{"id":"PR_kwDOLxEyuM5vKXHC","title":"edit the pagination","url":"https://github.com/Mohkhasa/sda-online-2-csharp-backend_teamwork/pull/22","state":"MERGED","mergedBy":{"avatarUrl":"https://avatars.githubusercontent.com/u/83678009?u=39ab309892d7800ae710bc80ac32ce6b7c1b8fcf&v=4","url":"https://github.com/Mohkhasa","login":"Mohkhasa"},"createdAt":"2024-05-11T14:59:22Z","number":22,"changedFiles":6,"additions":10,"deletions":10,"baseRepository":{"name":"sda-online-2-csharp-backend_teamwork","url":"https://github.com/Mohkhasa/sda-online-2-csharp-backend_teamwork","owner":{"avatarUrl":"https://avatars.githubusercontent.com/u/83678009?u=39ab309892d7800ae710bc80ac32ce6b7c1b8fcf&v=4","login":"Mohkhasa","url":"https://github.com/Mohkhasa"}}},{"id":"PR_kwDOLxEyuM5vKVyy","title":"Update Price From the Database","url":"https://github.com/Mohkhasa/sda-online-2-csharp-backend_teamwork/pull/21","state":"MERGED","mergedBy":{"avatarUrl":"https://avatars.githubusercontent.com/u/83678009?u=39ab309892d7800ae710bc80ac32ce6b7c1b8fcf&v=4","url":"https://github.com/Mohkhasa","login":"Mohkhasa"},"createdAt":"2024-05-11T14:41:35Z","number":21,"changedFiles":5,"additions":486,"deletions":8,"baseRepository":{"name":"sda-online-2-csharp-backend_teamwork","url":"https://github.com/Mohkhasa/sda-online-2-csharp-backend_teamwork","owner":{"avatarUrl":"https://avatars.githubusercontent.com/u/83678009?u=39ab309892d7800ae710bc80ac32ce6b7c1b8fcf&v=4","login":"Mohkhasa","url":"https://github.com/Mohkhasa"}}},{"id":"PR_kwDOLxEyuM5vIoWs","title":"Admin testing and changes needed done","url":"https://github.com/Mohkhasa/sda-online-2-csharp-backend_teamwork/pull/17","state":"MERGED","mergedBy":{"avatarUrl":"https://avatars.githubusercontent.com/u/83678009?u=39ab309892d7800ae710bc80ac32ce6b7c1b8fcf&v=4","url":"https://github.com/Mohkhasa","login":"Mohkhasa"},"createdAt":"2024-05-10T20:58:54Z","number":17,"changedFiles":49,"additions":3592,"deletions":144,"baseRepository":{"name":"sda-online-2-csharp-backend_teamwork","url":"https://github.com/Mohkhasa/sda-online-2-csharp-backend_teamwork","owner":{"avatarUrl":"https://avatars.githubusercontent.com/u/83678009?u=39ab309892d7800ae710bc80ac32ce6b7c1b8fcf&v=4","login":"Mohkhasa","url":"https://github.com/Mohkhasa"}}},{"id":"PR_kwDOLxEyuM5vEe_s","title":"add the remaining data for db intialization","url":"https://github.com/Mohkhasa/sda-online-2-csharp-backend_teamwork/pull/16","state":"MERGED","mergedBy":{"avatarUrl":"https://avatars.githubusercontent.com/u/83678009?u=39ab309892d7800ae710bc80ac32ce6b7c1b8fcf&v=4","url":"https://github.com/Mohkhasa","login":"Mohkhasa"},"createdAt":"2024-05-10T08:03:32Z","number":16,"changedFiles":10,"additions":1597,"deletions":72,"baseRepository":{"name":"sda-online-2-csharp-backend_teamwork","url":"https://github.com/Mohkhasa/sda-online-2-csharp-backend_teamwork","owner":{"avatarUrl":"https://avatars.githubusercontent.com/u/83678009?u=39ab309892d7800ae710bc80ac32ce6b7c1b8fcf&v=4","login":"Mohkhasa","url":"https://github.com/Mohkhasa"}}},{"id":"PR_kwDOLxEyuM5u_v9Z","title":"add uniqueness across the two tables","url":"https://github.com/Mohkhasa/sda-online-2-csharp-backend_teamwork/pull/12","state":"MERGED","mergedBy":{"avatarUrl":"https://avatars.githubusercontent.com/u/83678009?u=39ab309892d7800ae710bc80ac32ce6b7c1b8fcf&v=4","url":"https://github.com/Mohkhasa","login":"Mohkhasa"},"createdAt":"2024-05-09T14:14:25Z","number":12,"changedFiles":5,"additions":24,"deletions":3,"baseRepository":{"name":"sda-online-2-csharp-backend_teamwork","url":"https://github.com/Mohkhasa/sda-online-2-csharp-backend_teamwork","owner":{"avatarUrl":"https://avatars.githubusercontent.com/u/83678009?u=39ab309892d7800ae710bc80ac32ce6b7c1b8fcf&v=4","login":"Mohkhasa","url":"https://github.com/Mohkhasa"}}},{"id":"PR_kwDOLxEyuM5u9yjP","title":"add forget and reset password end points","url":"https://github.com/Mohkhasa/sda-online-2-csharp-backend_teamwork/pull/11","state":"MERGED","mergedBy":{"avatarUrl":"https://avatars.githubusercontent.com/u/83678009?u=39ab309892d7800ae710bc80ac32ce6b7c1b8fcf&v=4","url":"https://github.com/Mohkhasa","login":"Mohkhasa"},"createdAt":"2024-05-09T08:51:52Z","number":11,"changedFiles":19,"additions":1716,"deletions":5,"baseRepository":{"name":"sda-online-2-csharp-backend_teamwork","url":"https://github.com/Mohkhasa/sda-online-2-csharp-backend_teamwork","owner":{"avatarUrl":"https://avatars.githubusercontent.com/u/83678009?u=39ab309892d7800ae710bc80ac32ce6b7c1b8fcf&v=4","login":"Mohkhasa","url":"https://github.com/Mohkhasa"}}},{"id":"PR_kwDOLxEyuM5u2n3v","title":"Edit the authentication and the authorization","url":"https://github.com/Mohkhasa/sda-online-2-csharp-backend_teamwork/pull/9","state":"MERGED","mergedBy":{"avatarUrl":"https://avatars.githubusercontent.com/u/83678009?u=39ab309892d7800ae710bc80ac32ce6b7c1b8fcf&v=4","url":"https://github.com/Mohkhasa","login":"Mohkhasa"},"createdAt":"2024-05-08T09:05:56Z","number":9,"changedFiles":18,"additions":217,"deletions":226,"baseRepository":{"name":"sda-online-2-csharp-backend_teamwork","url":"https://github.com/Mohkhasa/sda-online-2-csharp-backend_teamwork","owner":{"avatarUrl":"https://avatars.githubusercontent.com/u/83678009?u=39ab309892d7800ae710bc80ac32ce6b7c1b8fcf&v=4","login":"Mohkhasa","url":"https://github.com/Mohkhasa"}}},{"id":"PR_kwDOLxEyuM5upys6","title":"Applying the centralized API response","url":"https://github.com/Mohkhasa/sda-online-2-csharp-backend_teamwork/pull/8","state":"MERGED","mergedBy":{"avatarUrl":"https://avatars.githubusercontent.com/u/83678009?u=39ab309892d7800ae710bc80ac32ce6b7c1b8fcf&v=4","url":"https://github.com/Mohkhasa","login":"Mohkhasa"},"createdAt":"2024-05-06T15:40:48Z","number":8,"changedFiles":27,"additions":2283,"deletions":558,"baseRepository":{"name":"sda-online-2-csharp-backend_teamwork","url":"https://github.com/Mohkhasa/sda-online-2-csharp-backend_teamwork","owner":{"avatarUrl":"https://avatars.githubusercontent.com/u/83678009?u=39ab309892d7800ae710bc80ac32ce6b7c1b8fcf&v=4","login":"Mohkhasa","url":"https://github.com/Mohkhasa"}}},{"id":"PR_kwDOLxEyuM5ujODq","title":"create the ApiResponse and ApiResponseTemplate ","url":"https://github.com/Mohkhasa/sda-online-2-csharp-backend_teamwork/pull/7","state":"MERGED","mergedBy":{"avatarUrl":"https://avatars.githubusercontent.com/u/83678009?u=39ab309892d7800ae710bc80ac32ce6b7c1b8fcf&v=4","url":"https://github.com/Mohkhasa","login":"Mohkhasa"},"createdAt":"2024-05-04T19:33:50Z","number":7,"changedFiles":3,"additions":71,"deletions":3,"baseRepository":{"name":"sda-online-2-csharp-backend_teamwork","url":"https://github.com/Mohkhasa/sda-online-2-csharp-backend_teamwork","owner":{"avatarUrl":"https://avatars.githubusercontent.com/u/83678009?u=39ab309892d7800ae710bc80ac32ce6b7c1b8fcf&v=4","login":"Mohkhasa","url":"https://github.com/Mohkhasa"}}},{"id":"PR_kwDOLxEyuM5uiwQq","title":"edit the authentication  in some of the methods","url":"https://github.com/Mohkhasa/sda-online-2-csharp-backend_teamwork/pull/6","state":"MERGED","mergedBy":{"avatarUrl":"https://avatars.githubusercontent.com/u/83678009?u=39ab309892d7800ae710bc80ac32ce6b7c1b8fcf&v=4","url":"https://github.com/Mohkhasa","login":"Mohkhasa"},"createdAt":"2024-05-04T14:13:55Z","number":6,"changedFiles":5,"additions":11,"deletions":10,"baseRepository":{"name":"sda-online-2-csharp-backend_teamwork","url":"https://github.com/Mohkhasa/sda-online-2-csharp-backend_teamwork","owner":{"avatarUrl":"https://avatars.githubusercontent.com/u/83678009?u=39ab309892d7800ae710bc80ac32ce6b7c1b8fcf&v=4","login":"Mohkhasa","url":"https://github.com/Mohkhasa"}}},{"id":"PR_kwDOLxEyuM5taPjp","title":"Enas\'s Backend Teamwork Project","url":"https://github.com/Mohkhasa/sda-online-2-csharp-backend_teamwork/pull/1","state":"MERGED","mergedBy":{"avatarUrl":"https://avatars.githubusercontent.com/u/83678009?u=39ab309892d7800ae710bc80ac32ce6b7c1b8fcf&v=4","url":"https://github.com/Mohkhasa","login":"Mohkhasa"},"createdAt":"2024-04-22T23:42:51Z","number":1,"changedFiles":28,"additions":872,"deletions":182,"baseRepository":{"name":"sda-online-2-csharp-backend_teamwork","url":"https://github.com/Mohkhasa/sda-online-2-csharp-backend_teamwork","owner":{"avatarUrl":"https://avatars.githubusercontent.com/u/83678009?u=39ab309892d7800ae710bc80ac32ce6b7c1b8fcf&v=4","login":"Mohkhasa","url":"https://github.com/Mohkhasa"}}},{"id":"PR_kwDOLuQE4s5swU8E","title":"Enas\'s Library Management","url":"https://github.com/Integrify-Finland/sda-online-2-csharp-library_management/pull/23","state":"OPEN","mergedBy":null,"createdAt":"2024-04-16T05:48:14Z","number":23,"changedFiles":8,"additions":614,"deletions":2,"baseRepository":{"name":"sda-online-2-csharp-library_management","url":"https://github.com/Integrify-Finland/sda-online-2-csharp-library_management","owner":{"avatarUrl":"https://avatars.githubusercontent.com/u/34094527?v=4","login":"Integrify-Finland","url":"https://github.com/Integrify-Finland"}}},{"id":"PR_kwDOLkjphc5qpZ6j","title":"Enas\'s Inventory Management ","url":"https://github.com/Integrify-Finland/sda-online-2-inventory_management/pull/32","state":"OPEN","mergedBy":null,"createdAt":"2024-03-25T11:41:54Z","number":32,"changedFiles":5,"additions":421,"deletions":2,"baseRepository":{"name":"sda-online-2-inventory_management","url":"https://github.com/Integrify-Finland/sda-online-2-inventory_management","owner":{"avatarUrl":"https://avatars.githubusercontent.com/u/34094527?v=4","login":"Integrify-Finland","url":"https://github.com/Integrify-Finland"}}},{"id":"PR_kwDOLisn585qkYOc","title":"Enas\'s Challenging App","url":"https://github.com/Integrify-Finland/sda-online-2-csharp-function_challenges/pull/35","state":"OPEN","mergedBy":null,"createdAt":"2024-03-23T19:45:45Z","number":35,"changedFiles":1,"additions":318,"deletions":31,"baseRepository":{"name":"sda-online-2-csharp-function_challenges","url":"https://github.com/Integrify-Finland/sda-online-2-csharp-function_challenges","owner":{"avatarUrl":"https://avatars.githubusercontent.com/u/34094527?v=4","login":"Integrify-Finland","url":"https://github.com/Integrify-Finland"}}},{"id":"PR_kwDOLhq2Js5p7dYy","title":"Enas\'s Temperature Converter App","url":"https://github.com/Integrify-Finland/sda-online-2-temperature_converter/pull/16","state":"OPEN","mergedBy":null,"createdAt":"2024-03-18T11:44:06Z","number":16,"changedFiles":2,"additions":136,"deletions":1,"baseRepository":{"name":"sda-online-2-temperature_converter","url":"https://github.com/Integrify-Finland/sda-online-2-temperature_converter","owner":{"avatarUrl":"https://avatars.githubusercontent.com/u/34094527?v=4","login":"Integrify-Finland","url":"https://github.com/Integrify-Finland"}}},{"id":"PR_kwDOLbRads5olhi0","title":"Enas\'s Budget App","url":"https://github.com/Integrify-Finland/sda-online-2-react-budget-app/pull/7","state":"OPEN","mergedBy":null,"createdAt":"2024-03-04T12:49:12Z","number":7,"changedFiles":18,"additions":862,"deletions":77,"baseRepository":{"name":"sda-online-2-react-budget-app","url":"https://github.com/Integrify-Finland/sda-online-2-react-budget-app","owner":{"avatarUrl":"https://avatars.githubusercontent.com/u/34094527?v=4","login":"Integrify-Finland","url":"https://github.com/Integrify-Finland"}}},{"id":"PR_kwDOLYq_Ls5oflhy","title":"Enas\'s Bank App","url":"https://github.com/Integrify-Finland/sda-2-online-javascript-typescript-banking-app/pull/28","state":"OPEN","mergedBy":null,"createdAt":"2024-03-02T22:43:30Z","number":28,"changedFiles":5,"additions":541,"deletions":9,"baseRepository":{"name":"sda-2-online-javascript-typescript-banking-app","url":"https://github.com/Integrify-Finland/sda-2-online-javascript-typescript-banking-app","owner":{"avatarUrl":"https://avatars.githubusercontent.com/u/34094527?v=4","login":"Integrify-Finland","url":"https://github.com/Integrify-Finland"}}},{"id":"PR_kwDOLUSfqM5nVNz7","title":"Enas\'s Todo App","url":"https://github.com/Integrify-Finland/sda-2-online-javascript-todo-app/pull/15","state":"OPEN","mergedBy":null,"createdAt":"2024-02-19T21:35:17Z","number":15,"changedFiles":4,"additions":428,"deletions":10,"baseRepository":{"name":"sda-2-online-javascript-todo-app","url":"https://github.com/Integrify-Finland/sda-2-online-javascript-todo-app","owner":{"avatarUrl":"https://avatars.githubusercontent.com/u/34094527?v=4","login":"Integrify-Finland","url":"https://github.com/Integrify-Finland"}}},{"id":"PR_kwDOLUHOmc5nNtRz","title":"Header and hero","url":"https://github.com/RawGate/restaurant/pull/4","state":"MERGED","mergedBy":{"avatarUrl":"https://avatars.githubusercontent.com/u/51794132?v=4","url":"https://github.com/ibrahemDev","login":"ibrahemDev"},"createdAt":"2024-02-18T12:03:28Z","number":4,"changedFiles":6,"additions":203,"deletions":33,"baseRepository":{"name":"restaurant","url":"https://github.com/RawGate/restaurant","owner":{"avatarUrl":"https://avatars.githubusercontent.com/u/90130046?u=5108bab38f2b61a86444c1586bf6ecf822b2e7ec&v=4","login":"RawGate","url":"https://github.com/RawGate"}}},{"id":"PR_kwDOLRpVO85myC_F","title":"Enas\'s Cosmetics website","url":"https://github.com/Integrify-Finland/sda-2-online-html-css-ecommerce-landing-page/pull/23","state":"OPEN","mergedBy":null,"createdAt":"2024-02-13T18:04:19Z","number":23,"changedFiles":11,"additions":515,"deletions":13,"baseRepository":{"name":"sda-2-online-html-css-ecommerce-landing-page","url":"https://github.com/Integrify-Finland/sda-2-online-html-css-ecommerce-landing-page","owner":{"avatarUrl":"https://avatars.githubusercontent.com/u/34094527?v=4","login":"Integrify-Finland","url":"https://github.com/Integrify-Finland"}}},{"id":"PR_kwDOLQ0kws5mk1uY","title":"Enas Batarfi Intro","url":"https://github.com/Integrify-Finland/sda-2-online-git/pull/22","state":"OPEN","mergedBy":null,"createdAt":"2024-02-11T12:30:50Z","number":22,"changedFiles":1,"additions":16,"deletions":0,"baseRepository":{"name":"sda-2-online-git","url":"https://github.com/Integrify-Finland/sda-2-online-git","owner":{"avatarUrl":"https://avatars.githubusercontent.com/u/34094527?v=4","login":"Integrify-Finland","url":"https://github.com/Integrify-Finland"}}}],"open":10,"closed":0,"merged":12,"totalCount":22}'
      );

      /***/
    },

    /***/ oncg: /***/ function (module, exports) {
      module.exports = require("react-router-dom");

      /***/
    },

    /***/ sosd: /***/ function (module, exports) {
      /***/
    },

    /***/ "t+/5": /***/ function (module, exports) {
      /***/
    },

    /***/ t3hY: /***/ function (module, exports) {
      module.exports = require("react-chartjs-2");

      /***/
    },

    /***/ "ur+B": /***/ function (module, exports) {
      /***/
    },

    /***/ vIAb: /***/ function (module, exports) {
      /***/
    },

    /***/ ye91: /***/ function (module, exports) {
      /***/
    },

    /***/ zIXN: /***/ function (module, exports) {
      module.exports = require("react-helmet");

      /***/
    },

    /******/
  }
);
