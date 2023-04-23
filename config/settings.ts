const settings = {
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  requestTimeout: 15000,
  rowsPerPage: 10,
  defaultLanguage: "en",
  staleTime: 120000,
  idleTimeout: 3000,
  project: {
    logo: "",
  },
} as const;

export default settings;
