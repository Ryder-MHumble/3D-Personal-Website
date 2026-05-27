export const social = [
  { url: "mailto:mhumble010221@gmail.com", name: "mail" },
  { url: "https://github.com/Ryder-MHumble", name: "github" },
  { url: "https://www.linkedin.com/in/ryder-sun/?locale=en", name: "linkedin" },
  { url: "https://space.bilibili.com/296920670", name: "bilibili" },
] as const satisfies {
  url: string;
  name: "mail" | "github" | "instagram" | "linkedin" | "x" | "bilibili";
}[];
