import Map from "./Map";
import githubLogo from "./assets/github.png";
import iconbetter from "./assets/removebg.png";
import Highlights from "./components/Highlights";
import linkedIn from "./assets/linkedin480.png";
import goImg from "./assets/goImg.png";
import swift from "./assets/swift.png";

import vue from "./assets/vue.png";
import reactlogo from "./assets/react.svg";
import terminal from "./assets/terminal.png";
import gear from "./assets/gear.png";
import HomeAnimation from "./components/HomeAnimations";

export default function Home() {
  return (
    <div className="bg-card min-h-screen text-white flex flex-col items-center pt-3">
      <div className="px-6 md:w-[780px] lg:w-[780px] mt-8">
        <div className="my-10 flex items-end">
          <div className="w-2/3">
            <h2 className="text-5xl font-bold mt-32">Hey, I'm Yaw</h2>
            <br />

            <div className="text-graytext text-xl">
              I'm a software developer who makes open-source projects and writes
              about life, code, design, and more. Welcome to my digital diary.
            </div>
          </div>
          <div>
            <img
              className="rounded-full max-w-44 w-auto h-auto bg-cardalts"
              src={iconbetter}
              alt=""
            />
          </div>
        </div>

        <div className="grid md:grid-cols-3 sm:grid-cols-1 gap-4 mt-16">
          {/* <div className="col-span-2 h w-full bg-cardalts rounded-l-lg border border-cardbg flex justify-center items-center shadow-md">
                        <img
                            src="https://streak-stats.demolab.com?user=Yawowususnr&locale=en&mode=daily&theme=github_dark&hide_border=false&border_radius=5&order=3"
                            height="150"
                            alt="streak graph"
                        />
                    </div>
                    <a
                        target="_blank"
                        href="https://github.com/YawOwusuSnr"
                        className="w-full h-full bg-cardalt border-cardbg border shadow-md rounded-r-lg"
                    >
                        <div className="flex flex-col justify-center m-6">
                            <img
                                src={githubLogo}
                                alt=""
                                className="w-8 h-auto mb-3"
                            />
                            <h3 className="text-graytext">My Github</h3>
                            <p className="">All my projects!</p>
                            <br />
                            <a
                                target="_blank"
                                href="https://github.com/YawOwusuSnr"
                                className="rounded-2xl bg-[#313131] px-4 py-1 w-20 flex items-center gap-2 hover:bg-cardbg"
                            >
                                Follow
                            </a>
                        </div>
                    </a> */}
          <a
            href="https://www.linkedin.com/in/yaw-owusu-snr/"
            className="w-full h-full bg-cardalts border-cardbg border shadow-md rounded-l-lg "
          >
            <div className="flex flex-col justify-center mx-6 my-6">
              <img src={linkedIn} alt="" className="w-12 h-auto mb-2" />

              <h3 className="text-[#B4B4B4]">@yawowususnr</h3>
              <p className="">My LinkedIn</p>
              <br />
              <a
                target="_blank"
                href="https://www.linkedin.com/in/yaw-owusu-snr/"
                className="rounded-2xl bg-[#313131] px-3 py-1 w-24 flex items-center gap-2 hover:bg-cardbg"
              >
                Connect!
              </a>
            </div>
          </a>
          <div className="col-span-2 w-full h-52 bg-card border-cardbg border shadow-md rounded-r-lg">
            <Map lat={37.2296} lng={-80.4139} zoom={2} pitch={4} />
          </div>
        </div>

        <div className="mt-32">
          <h3 className="text-2xl font-semibold">About this portfolio</h3>
          <p className="mt-5">
            This portfolio showcases my journey and capabilities as a software
            engineer, with a focus on web development, dava visualisation, and
            distributed systems. Built with an intention to demonstrate my
            technical skills, this site is powered by a combination of
            cutting-edge technologies.
          </p>
          <h3 className="text-2xl font-semibold mt-8">My Tech Stack</h3>
          <div className="flex justify-center mb-4">
            <img
              className="mt-8"
              height={300}
              src="https://skillicons.dev/icons?i=py,js,java,html,docker,react,tensorflow,express,nodejs,flask,mongodb,ts,aws,bash,c&perline=5"
            />
          </div>
          <h3 className="text-2xl font-semibold my-4 flex items-center gap-2">
            My Projects
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-4"
              color="bg-card"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
              />
            </svg>
          </h3>
          <div className=" h w-full bg-cardalts rounded-lg bg-card border border-cardbg flex items-center shadow-md mb-10">
            <div className="w-2/3 text-md">
              <p className="m-4 text-graytext">
                My work showcases skills in frontend development, backend APIs,
                data analysis, and user experience enhancement.
              </p>
            </div>
            <div className="border-l border-cardbg w-1/3 h-32 flex flex-col items-center justify-center">
              <a
                target="_blank"
                className="cursor-pointer flex flex-col items-center justify-center"
                href="https://github.com/YawOwusuSnr"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-12"
                >
                  <path
                    fillRule="evenodd"
                    d="M15.22 6.268a.75.75 0 0 1 .968-.431l5.942 2.28a.75.75 0 0 1 .431.97l-2.28 5.94a.75.75 0 1 1-1.4-.537l1.63-4.251-1.086.484a11.2 11.2 0 0 0-5.45 5.173.75.75 0 0 1-1.199.19L9 12.312l-6.22 6.22a.75.75 0 0 1-1.06-1.061l6.75-6.75a.75.75 0 0 1 1.06 0l3.606 3.606a12.695 12.695 0 0 1 5.68-4.974l1.086-.483-4.251-1.632a.75.75 0 0 1-.432-.97Z"
                    clipRule="evenodd"
                  />
                </svg>

                <p>Check them out!</p>
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-3xl font-semibold mb-5">Learning Highlights</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-2 sm:grid-cols-1 gap-5 mb-20">
              <Highlights
                date={"June 2024"}
                image={swift}
                text={"Built my first SwiftUI App"}
              />
              <Highlights
                date={"June 2024"}
                image={goImg}
                text={"Built my first GO API"}
              />
              <Highlights
                date={"May 2024"}
                image={vue}
                text={"Learning Vue Framework"}
              />
              <Highlights
                date={"March 2024"}
                image={gear}
                text={"Built my first Node API"}
              />
              <Highlights
                date={"October 2023"}
                image={reactlogo}
                text={"Learning React"}
              />
              <Highlights
                date={"May 2023"}
                image={terminal}
                text={"Understanding the CLI"}
              />
            </div>
          </div>

          <footer className="flex justify-center gap-6 mb-10">
            <a
              href="https://www.linkedin.com/in/yaw-owusu-snr/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p className="hover:underline">LinkedIn</p>
            </a>
            <a
              href="https://github.com/YawOwusuSnr"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p className="hover:underline">Github</p>
            </a>

            <a
              href="https://drive.google.com/drive/folders/1imauGrV8NtuO-TqWNJkTXPHk8988LBzo?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p className="hover:underline">Resume</p>
            </a>
          </footer>
        </div>
      </div>
    </div>
  );
}
