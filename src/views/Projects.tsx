// react
import { useState } from "react";

// assets
import projectsPageImg from "../assets/projects-page.svg";

// components
import { Button, Card, Reveal } from "../components";

// data
import { projects, ProjectType, Category } from "../data";

// framer-motion
import { motion } from "framer-motion";

// utils
import { fadeIn } from "../utils/variants";
import { transition } from "../utils/transition";

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState<Category>("web");

  const filteredProjects = () => {
    if (activeCategory === "uiUx") {
      return projects.filter((item) => item.category === "uiUx");
    }
    if (activeCategory === "web") {
      return projects.filter((item) => item.category === "web");
    } else {
      return projects.filter((item) => item.category === "apps");
    }
  };

  return (
    <div
      id="projects"
      className="min-h-screen flex item-center justify-center relative"
      style={{
        background: `url(${projectsPageImg})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="max-w-screen-2xl w-full py-16 px-12 mx-auto">
        <div className="flex-1 flex flex-col gap-4">
          <Reveal>
            <h2 className="text-center xl:text-start text-4xl sm:text-5xl lg:text-[60px] font-bold text-textPrimary">
              My recent <span className="text-secondary">projects</span>
            </h2>
          </Reveal>
          `
          <motion.div
            variants={fadeIn("up")}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            transition={transition()}
            className="flex items-center gap-4 justify-center xl:justify-start flex-col sm:flex-row"
          >
            {ProjectType.map((item: Category) => {
              return (
                <Button
                  secondary={activeCategory === item ? true : false}
                  onClick={() => setActiveCategory(item)}
                >
                  <span className="uppercase"> {item}</span>
                </Button>
              );
            })}
          </motion.div>
          <motion.div
            variants={fadeIn("up")}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            transition={transition()}
            className="flex gap-12 mt-12 flex-wrap justify-start"
          >
            {filteredProjects().map((item) => (
              <Card
                imgSrc={item.img}
                title={item.title}
                projectLink={item.projectLink ? item.projectLink : undefined}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
