export const SITE = {
  website: "https://suyashnagumalli.com/", // replace this with your deployed domain
  author: "Suyash Nagumalli",
  profile: "https://suyashnagumalli.com/",
  desc: "Personal website with SEO - Suyash Nagumalli",
  title: "Suyash!",
  ogImage: "astropaper-og.jpg",
  lightAndDarkMode: true,
  postPerIndex: 4,
  postPerPage: 4,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
  showArchives: false,
  showBackButton: true, // show back button in post detail
  editPost: {
    url: "https://github.com/satnaing/astro-paper/edit/main/src/data/blog",
    text: "Suggest Changes",
    appendFilePath: true,
  },
  dynamicOgImage: true,
} as const;
