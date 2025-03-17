(window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
  [3],
  {
    "3X8q": function (e, t, o) {
      "use strict";
      o.d(t, "a", function () {
        return s;
      });
      var a = o("q1tI"),
        n = o.n(a),
        i = (o("bOmX"), n.a.createElement);
      function s(e) {
        let { theme: t } = e;
        window.onscroll = function () {
          document.body.scrollTop > 30 ||
          document.documentElement.scrollTop > 30
            ? (document.getElementById("topButton").style.visibility =
                "visible")
            : (document.getElementById("topButton").style.visibility =
                "hidden");
        };
        return i(
          "div",
          {
            onClick: function () {
              (document.body.scrollTop = 0),
                (document.documentElement.scrollTop = 0);
            },
            id: "topButton",
            style: {
              color: t.body,
              backgroundColor: t.text,
              border: "solid 1px " + t.text,
            },
            title: "Go up",
            onMouseEnter: () =>
              ((e, t) => {
                const o = document.getElementById("topButton");
                (o.style.color = e), (o.style.backgroundColor = t);
                const a = document.getElementById("arrow");
                (a.style.color = e), (a.style.backgroundColor = t);
              })(t.text, t.body),
            onMouseLeave: () =>
              ((e, t) => {
                const o = document.getElementById("topButton");
                (o.style.color = e), (o.style.backgroundColor = t);
                const a = document.getElementById("arrow");
                (a.style.color = e), (a.style.backgroundColor = t);
              })(t.body, t.text),
          },
          i("i", {
            className: "fas fa-arrow-up",
            id: "arrow",
            "aria-hidden": "true",
          })
        );
      }
    },
    QjGT: function (e, t, o) {
      "use strict";
      o.d(t, "i", function () {
        return a;
      }),
        o.d(t, "h", function () {
          return n;
        }),
        o.d(t, "f", function () {
          return i;
        }),
        o.d(t, "k", function () {
          return s;
        }),
        o.d(t, "j", function () {
          return r;
        }),
        o.d(t, "b", function () {
          return l;
        }),
        o.d(t, "d", function () {
          return c;
        }),
        o.d(t, "a", function () {
          return d;
        }),
        o.d(t, "e", function () {
          return m;
        }),
        o.d(t, "g", function () {
          return u;
        }),
        o.d(t, "c", function () {
          return p;
        });
      const a = { isSplash: !1 },
        n = {
          title: "Enas's Portfolio",
          description:
            "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
          og: {
            title: "Enas Batarfi Portfolio",
            type: "website",
            url: "http://ashutoshhathidara.com/",
          },
        },
        i = {
          title: "Enas Batarfi",
          logo_name: "EnasBatarfi",
          nickname: "Data Scientist",
          subTitle:
            "Passionate professional focused on creating innovative, data-driven, and software development solutions that transform challenges into scalable, impactful, and sustainable systems.",
          resumeLink:
            "https://drive.google.com/file/d/1oCy_g10VF65jFx6DDitTEcako3_iT8QB/view?usp=sharing",
          portfolio_repository:
            "https://github.com/ashutosh1919/masterPortfolio",
          githubProfile: "https://github.com/EnasBatarfi",
        },
        s = [
          {
            name: "Github",
            link: "https://github.com/EnasBatarfi",
            fontAwesomeIcon: "fa-github",
            backgroundColor: "#181717",
          },
          {
            name: "LinkedIn",
            link: "https://www.linkedin.com/in/enas-batarfi/",
            fontAwesomeIcon: "fa-linkedin-in",
            backgroundColor: "#0077B5",
          },
          {
            name: "Gmail",
            link: "mailto:EnasMBatarfi@gmail.com",
            fontAwesomeIcon: "fa-google",
            backgroundColor: "#D14836",
          },
        ],
        r = {
          data: [
            {
              title: "Data Science & AI",
              fileName: "DataScienceImg",
              skills: [
                "\u26a1 Developing scalable AI and machine learning models",
                "\u26a1 Experience in Deep Learning, Computer Vision, and Data Analysis",
                "\u26a1 Building interactive and dynamic data visualization dashboards",
                "\u26a1 Implementing machine learning algorithms for classification and prediction tasks",
                "\u26a1 Data preprocessing, feature engineering, and model optimization",
              ],
              softwareSkills: [
                {
                  skillName: "Tensorflow",
                  fontAwesomeClassname: "logos-tensorflow",
                  style: { backgroundColor: "transparent" },
                },
                {
                  skillName: "Keras",
                  fontAwesomeClassname: "simple-icons:keras",
                  style: { backgroundColor: "white", color: "#D00000" },
                },
                {
                  skillName: "OpenCV",
                  fontAwesomeClassname: "devicon:opencv",
                  style: { backgroundColor: "transparent" },
                },
                {
                  skillName: "Python",
                  fontAwesomeClassname: "ion-logo-python",
                  style: { backgroundColor: "transparent", color: "#3776AB" },
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
                "\u26a1 Designing and managing relational databases with PostgreSQL and Entity Framework Core",
                "\u26a1 Building responsive and dynamic web applications using React.js and Redux",
                "\u26a1 Implementing type-safe, maintainable code using TypeScript and JavaScript",
                "\u26a1 Developing scalable backend systems with .NET Framework and C#",
                "\u26a1 Version control and collaboration using GitHub",
              ],
              softwareSkills: [
                {
                  skillName: "PostgreSQL",
                  fontAwesomeClassname: "simple-icons:postgresql",
                  style: { color: "#336791" },
                },
                {
                  skillName: "NPM",
                  fontAwesomeClassname: "simple-icons:npm",
                  style: { color: "#CB3837" },
                },
                {
                  skillName: ".NET Framework",
                  fontAwesomeClassname: "simple-icons:dotnet",
                  style: { color: "#512BD4" },
                },
                {
                  skillName: "TypeScript",
                  fontAwesomeClassname: "simple-icons:typescript",
                  style: { color: "#3178C6" },
                },
                {
                  skillName: "ReactJS",
                  fontAwesomeClassname: "simple-icons:react",
                  style: { color: "#61DAFB" },
                },
                {
                  skillName: "Redux",
                  fontAwesomeClassname: "simple-icons:redux",
                  style: { color: "#764ABC" },
                },
                {
                  skillName: "GitHub",
                  fontAwesomeClassname: "simple-icons:github",
                  style: { color: "#181717" },
                },
              ],
            },
          ],
        },
        l = { competitiveSites: [] },
        c = {
          degrees: [
            {
              title: "King Abdulaziz University",
              subtitle: "Bachelor of Science in Computer Science",
              logo_path: "KAU.svg",
              alt_name: "King Abdulaziz University",
              duration: "2018 - 2023",
              descriptions: [
                "\u26a1 I have taken varity of courses related to Artificial Intelligence which correspond to Explainable AI, Graph Machine Learning, Computer Vision etc.",
                "\u26a1 Apart from this, I have also done research assistantship. As part of it, I have worked on creating new algorithms in Graph ML and Network Science.",
                "\u26a1 During my time at university, I was also associated with multimedia department. As part of it, I have worked on some documentry films and interviews.",
              ],
              website_link: "https://www.kau.edu.sa/home_english.aspx",
            },
          ],
        },
        d = {
          certifications: [
            {
              title: "Data Science",
              subtitle: "- Learning Space",
              logo_path: "learningspace.png",
              certificate_link:
                "https://drive.google.com/file/d/1JZ8WiQW_VmDx_YOA64ovj9EGRzzR9qJY/view?usp=drivesdk",
              alt_name: "Learning Space",
              color_code: "#FFEB99",
            },
            {
              title: "Introduction to Artificial Intelligence",
              subtitle: "- KAUST",
              logo_path: "KAUST.png",
              certificate_link:
                "https://drive.google.com/file/d/1uSQ0VAvmI4yovEWHpgRIPu-HYKD5iQCZ/view",
              alt_name:
                "King Abdullah University of Science and Technology (KAUST)",
              color_code: "#B5D8FF",
            },
            {
              title: "Advanced Artificial Intelligence",
              subtitle: "- KAUST",
              logo_path: "KAUST.png",
              certificate_link:
                "https://drive.google.com/file/d/1uSQ0VAvmI4yovEWHpgRIPu-HYKD5iQCZ/view",
              alt_name:
                "King Abdullah University of Science and Technology (KAUST)",
              color_code: "#A8D0E6",
            },
            {
              title: "Network Security",
              subtitle: "- KAUST Cybersecurity Prerequisite Course",
              logo_path: "ISC2.png",
              certificate_link:
                "https://www.coursera.org/account/accomplishments/certificate/EH6J2KFTBAA9",
              alt_name:
                "Cybersecurity Certifications and Continuing Education (ISC2)",
              color_code: "#A9E4B8",
            },
            {
              title: "Cryptography",
              subtitle: "- KAUST Cybersecurity Prerequisite Course",
              logo_path: "ISC2.png",
              certificate_link:
                "https://www.coursera.org/account/accomplishments/records/VXDZPLJY7TPJ",
              alt_name:
                "Cybersecurity Certifications and Continuing Education (ISC2)",
              color_code: "#C1E6B7",
            },
            {
              title: "Access Control Concepts",
              subtitle: "- KAUST Cybersecurity Prerequisite Course",
              logo_path: "ISC2.png",
              certificate_link:
                "https://www.coursera.org/account/accomplishments/certificate/CF353PWKRGVD",
              alt_name:
                "Cybersecurity Certifications and Continuing Education (ISC2)",
              color_code: "#F8C8D8",
            },
            {
              title: "Security Principles",
              subtitle: "- KAUST Cybersecurity Prerequisite Course",
              logo_path: "ISC2.png",
              certificate_link:
                "https://www.coursera.org/account/accomplishments/certificate/CGJD3WJVXZ9F",
              alt_name:
                "Cybersecurity Certifications and Continuing Education (ISC2)",
              color_code: "#D4A6E1",
            },
            {
              title:
                "Applied Mathematics and Computational Science and Statistics School",
              subtitle: "- Advanced Topics Mathematics and Statistics",
              logo_path: "KAUST.png",
              certificate_link: "",
              alt_name:
                "King Abdullah University of Science and Technology (KAUST)",
              color_code: "#FFDFD3",
            },
            {
              title: "McKinsey Forward Program",
              subtitle: "- Critical Practical Skills for Professionals",
              logo_path: "Mc.png",
              certificate_link:
                "https://www.credly.com/badges/817a2aef-22eb-4c0f-90b2-c8f5373fa8af/linked_in_profile",
              alt_name: "IBM",
              color_code: "#D2B19D",
              logo_style: { width: "250px" },
            },
            {
              title: "C# Full-Stack Development Bootcamp",
              subtitle: "- Provided by SDA in partnership with Integrify",
              logo_path: "integrify.png",
              certificate_link: "",
              alt_name: "Integrify",
              color_code: "#F4B8A2",
              logo_style: { width: "280px" },
            },
          ],
        },
        m = {
          title: "Experience",
          subtitle: "Work, Internship and Volunteership",
          description:
            "I have worked with many evolving startups as ML and DL Developer, Designer and Software Architect. I have also worked with some well established companies mostly as AI Developer. I love organising events and that is why I am also involved with many opensource communities as a representative.",
          header_image_path: "experience.svg",
          sections: [
            {
              title: "Work",
              work: !0,
              experiences: [
                {
                  title: "Training Assistant",
                  company: "Institution of Public Administration (IPA)",
                  company_url: "https://www.ipa.edu.sa/",
                  logo_path: "IPA.png",
                  duration: "Jun 2024 \u2013 Present",
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
                  duration: "Oct 2023 \u2013 Nov 2023",
                  location: "Jeddah, Kingdom of Saudi Arabia",
                  description:
                    "I conducted thorough software testing to improve system efficiency. In addition, I analyzed e-invoice systems to ensure compliance with ZATCA standards. This allowed me to contribute to refining the application design, optimizing its overall functionality.",
                  color: "#0879bf",
                },
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
                  duration: "Jul 2023 \u2013 Aug 2023",
                  location: "Dhahran, Kingdom of Saudi Arabia",
                  description:
                    "I contributed to the development and enhancement of web-based gamification features designed to support the business mathematics curriculum. I also assisted in troubleshooting technical challenges and configuring iPads for student acceptance tests, ensuring a smooth and efficient deployment for educational use.",
                  color: "#000000",
                },
              ],
            },
          ],
        },
        u = {
          title: "Projects",
          description:
            "My projects cover a wide range of areas, including machine learning, full-stack development, and various technical fields. I have worked with different technologies to develop and solve real-world problems, enhancing my technical expertise and skills along the way.",
          avatar_image_path: "projects_image.svg",
        },
        p = {
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
          phoneSection: { title: "", subtitle: "" },
        };
    },
    bOmX: function (e, t) {
      throw new Error(
        "Module build failed: Error: Final loader (./node_modules/next/dist/build/webpack/loaders/error-loader.js) didn't return a Buffer or String\n    at C:\\Users\\Enas\\Downloads\\masterPortfolio-master\\masterPortfolio-master\\node_modules\\next\\node_modules\\webpack\\lib\\NormalModule.js:333:18\n    at C:\\Users\\Enas\\Downloads\\masterPortfolio-master\\masterPortfolio-master\\node_modules\\loader-runner\\lib\\LoaderRunner.js:373:3\n    at iterateNormalLoaders (C:\\Users\\Enas\\Downloads\\masterPortfolio-master\\masterPortfolio-master\\node_modules\\loader-runner\\lib\\LoaderRunner.js:214:10)\n    at iterateNormalLoaders (C:\\Users\\Enas\\Downloads\\masterPortfolio-master\\masterPortfolio-master\\node_modules\\loader-runner\\lib\\LoaderRunner.js:221:10)\n    at C:\\Users\\Enas\\Downloads\\masterPortfolio-master\\masterPortfolio-master\\node_modules\\loader-runner\\lib\\LoaderRunner.js:236:3\n    at runSyncOrAsync (C:\\Users\\Enas\\Downloads\\masterPortfolio-master\\masterPortfolio-master\\node_modules\\loader-runner\\lib\\LoaderRunner.js:124:12)\n    at iterateNormalLoaders (C:\\Users\\Enas\\Downloads\\masterPortfolio-master\\masterPortfolio-master\\node_modules\\loader-runner\\lib\\LoaderRunner.js:232:2)\n    at Array.<anonymous> (C:\\Users\\Enas\\Downloads\\masterPortfolio-master\\masterPortfolio-master\\node_modules\\loader-runner\\lib\\LoaderRunner.js:205:4)\n    at Storage.finished (C:\\Users\\Enas\\Downloads\\masterPortfolio-master\\masterPortfolio-master\\node_modules\\enhanced-resolve\\lib\\CachedInputFileSystem.js:55:16)\n    at C:\\Users\\Enas\\Downloads\\masterPortfolio-master\\masterPortfolio-master\\node_modules\\enhanced-resolve\\lib\\CachedInputFileSystem.js:91:9"
      );
    },
  },
]);
