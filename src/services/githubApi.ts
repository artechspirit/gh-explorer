import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// GitHub User type for search results
interface GitHubUser {
  login: string;
  id: number;
  avatar_url: string;
  html_url: string;
}

// GitHub Repository type
interface GitHubRepo {
  id: number;
  name: string;
  full_name: string;
  html_url: string;
  description: string | null;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
}

// Response shape for search/users endpoint
interface GitHubUserSearchResponse {
  items: GitHubUser[];
}

const GITHUB_TOKEN = import.meta.env.VITE_GITHUB_TOKEN;

export const githubApi = createApi({
  reducerPath: "githubApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.github.com/",
    prepareHeaders: (headers) => {
      if (GITHUB_TOKEN) {
        headers.set("Authorization", `Bearer ${GITHUB_TOKEN}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    searchUsers: builder.query<GitHubUser[], string>({
      query: (query) => `search/users?q=${query}&per_page=5`,
      transformResponse: (res: GitHubUserSearchResponse) => res.items,
    }),
    getUserRepos: builder.query<GitHubRepo[], string>({
      query: (username) => `users/${username}/repos`,
    }),
  }),
});

export const { useSearchUsersQuery, useGetUserReposQuery } = githubApi;
