export const SITE = {
  website: "https://suyashnagumalli.com/", // replace this with your deployed domain
  author: "Suyash Nagumalli",
  profile: "https://suyashnagumalli.com/",
  desc: "Find everything there is to know about Suyash Nagumalli on his personal website.",
  title: "Suyash!",
  ogImage: "astropaper-og.jpg",
  lightAndDarkMode: true,
  postPerIndex: 4,
  postPerPage: 4,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
  showArchives: false,
  showBackButton: true, // show back button in post detail
  editPost: {
    url: "https://open.substack.com/pub/suyashnagumalli/p/",
    text: "Write a comment",
    appendFilePath: true,
  },
  dynamicOgImage: true,
  resume_filename: "Suyash_Nagumalli_Resume_Jun_25.pdf",
} as const;
