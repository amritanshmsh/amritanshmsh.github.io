export const BASE_URL = "https://amritanshmsh.dev" as const;

export const DATE_OF_BIRTH = new Date("2005-05-24");

export const DISCORD_USER_ID = "758517732152311859" as const;

export const LANYARD_API_URL = `https://api.lanyard.rest/v1/users/${DISCORD_USER_ID}` as const;

export const REPOSITORY_LINK = "https://github.com/amritanshmsh/amritanshmsh" as const;

export const SOCIAL_LINKS = {
  Discord: `https://discordapp.com/users/${DISCORD_USER_ID}`,
  Email: "mailto:amritanshmsh@gmail.com",
  GitHub: "https://github.com/amritanshmsh",
  Linkedin: "https://www.linkedin.com/in/amritanshmsh",
  Twitter: "https://twitter.com/amritanshmsh",
} as const;

export const TIME_FORMAT_OPTIONS = {
  timeZone: "Asia/Kolkata",
  hour: "numeric",
  minute: "numeric",
  hour12: true,
} as const satisfies Intl.DateTimeFormatOptions;
