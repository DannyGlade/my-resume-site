export type Skill = {
   name: string;
   type: string;
   colored: boolean;
   category: FilterKey[] | FilterKey;
};

export enum FilterKey {
   "*",
   "frontend",
   "backend",
   "design",
   "framework",
   "database",
   "tools",
   //    "other",
}

const skills: Skill[] = [
   {
      name: "JavaScript",
      type: "plain",
      colored: true,
      category: FilterKey.frontend,
   },
   {
      name: "TypeScript",
      type: "plain",
      colored: true,
      category: FilterKey.frontend,
   },
   {
      name: "NodeJS",
      type: "plain",
      colored: true,
      category: FilterKey.backend,
   },
   {
      name: "React",
      type: "plain",
      colored: true,
      category: FilterKey.frontend,
   },
   {
      name: "NextJS",
      type: "plain",
      colored: false,
      category: [FilterKey.frontend, FilterKey.framework],
   },
   {
      name: "Express",
      type: "original",
      colored: false,
      category: [FilterKey.backend, FilterKey.framework],
   },
   {
      name: "Php",
      type: "plain",
      colored: true,
      category: FilterKey.backend,
   },
   {
      name: "Laravel",
      type: "plain",
      colored: true,
      category: [FilterKey.backend, FilterKey.framework],
   },
   {
      name: "Kotlin",
      type: "plain",
      colored: true,
      category: [FilterKey.frontend, FilterKey.backend],
   },
   {
      name: "Java",
      type: "plain",
      colored: true,
      category: [FilterKey.frontend, FilterKey.backend],
   },
   {
      name: "Swift",
      type: "plain",
      colored: true,
      category: [FilterKey.frontend, FilterKey.backend],
   },
   { name: "Git", type: "plain", colored: true, category: FilterKey.tools },
   {
      name: "Docker",
      type: "plain",
      colored: true,
      category: FilterKey.tools,
   },
   {
      name: "DigitalOcean",
      type: "plain",
      colored: true,
      category: FilterKey.tools,
   },
   {
      name: "MongoDB",
      type: "plain",
      colored: true,
      category: FilterKey.database,
   },
   {
      name: "MySQL",
      type: "plain",
      colored: true,
      category: FilterKey.database,
   },
   {
      name: "SQLite",
      type: "plain",
      colored: true,
      category: FilterKey.database,
   },
   {
      name: "Firebase",
      type: "plain",
      colored: true,
      category: FilterKey.database,
   },
   {
      name: "Figma",
      type: "plain",
      colored: true,
      category: FilterKey.design,
   },
   {
      name: "Xd",
      type: "plain",
      colored: true,
      category: FilterKey.design,
   },
   {
      name: "HTML5",
      type: "plain",
      colored: true,
      category: FilterKey.frontend,
   },
   {
      name: "CSS3",
      type: "plain",
      colored: true,
      category: FilterKey.frontend,
   },
   {
      name: "Bootstrap",
      type: "plain",
      colored: true,
      category: FilterKey.frontend,
   },
   {
      name: "TailwindCSS",
      type: "plain",
      colored: true,
      category: FilterKey.frontend,
   },
   {
      name: "SASS",
      type: "plain",
      colored: true,
      category: FilterKey.frontend,
   },
   {
      name: "MaterialUI",
      type: "plain",
      colored: true,
      category: FilterKey.frontend,
   },
];

export default skills;
