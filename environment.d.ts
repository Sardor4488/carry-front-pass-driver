declare global {
  namespace NodeJS {
    interface ProcessEnv {
      readonly NODE_ENV: "development" | "production" | "test";
      readonly NEXT_PUBLIC_BASE_URL: "https://jsonplaceholder.typicode.com";
    }
  }
}

export {};
