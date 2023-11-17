// assets
import aboutPageImg from "../assets/about-me-page.svg";
import aboutIllustration from "../assets/about-illustration.svg";
import facebookIcon from "../assets/facebook-icon.svg";
import instagramIcon from "../assets/instagram-icon.svg";
import twitterIcon from "../assets/twitter-icon.svg";
import youtubeIcon from "../assets/youtube-icon.svg";

// components
import { SocialMediaIcon, Reveal } from "../components";

// framer-motion
import { motion } from "framer-motion";

// utils
import { fadeIn, scale } from "../utils/variants";
import { transition } from "../utils/transition";

const About = () => {
  return (
    <div
      id="about"
      className="min-h-screen flex items-center justify-center relative"
      style={{
        background: `url(${aboutPageImg})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="max-w-screen-2xl flex flex-col xl:flex-row xl:justify-beteen items-center xl:items-start gap-12 w-full py-16 px-12">
        <div className="flex-1 flex flex-col gap-4">
          <Reveal>
            <h2 className="text-center xl:text-start text-4xl sm:text-5xl lg:text-[60px] font-bold text-textPrimary">
              About <span className="text-secondary">me</span>
            </h2>
          </Reveal>
          <Reveal>
            <p className="text-center xl:text-start text-base sm:text-lg text-textSecondary">
              Hello! I'm <span className="text-secondary">Surya Pratap</span>,
              Welcome to my corner of the digital universe! I'm a Frontend web
              Developer passionate about crafting sleek, responsive interfaces
              that redefine user experiences. Proficient in HTML5, CSS3, and
              JavaScript frameworks like React.js, my focus is on transforming
              designs into dynamic, engaging applications. Proficient in Adobe
              Photoshop, Adobe XD, and Adobe Illustrator, I merge creativity
              with code. Let's explore my portfolio together and shape the
              future of the web.
            </p>
          </Reveal>
          <motion.div
            variants={fadeIn("up")}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            transition={transition()}
            className="flex items-center justify-center xl:justify-start gap-6"
          >
            <SocialMediaIcon imgSrc={facebookIcon} title="Facebook" />
            <SocialMediaIcon imgSrc={instagramIcon} title="Instagram" />
            <SocialMediaIcon imgSrc={twitterIcon} title="Twitter" />
            <SocialMediaIcon
              imgSrc={youtubeIcon}
              title="Youtube"
              link="https://www.youtube.com/channel/UCzl6g-dG9i_HM9EqQ0_F1wA"
            />
          </motion.div>
        </div>
        <div className="flex-1 flex items-center justify-center">
          <motion.img
            variants={scale()}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            transition={transition()}
            src={aboutIllustration}
            alt=""
            className="max-w-full sm:max-w-[401px]"
          />
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-divider" />
    </div>
  );
};

export default About;
