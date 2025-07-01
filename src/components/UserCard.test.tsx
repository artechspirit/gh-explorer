import { render, screen, fireEvent } from "@testing-library/react";
import UserCard from "./UserCard";
import * as githubApi from "@/services/githubApi";

vi.mock("@/services/githubApi", async () => {
  const actual = await vi.importActual<typeof githubApi>(
    "@/services/githubApi"
  );
  return {
    ...actual,
    useGetUserReposQuery: vi.fn().mockReturnValue({
      data: [
        { id: 1, name: "repo-1", description: "desc", stargazers_count: 10 },
        { id: 2, name: "repo-2", description: "desc", stargazers_count: 5 },
      ],
      isLoading: false,
    }),
  };
});

describe("UserCard", () => {
  it("shows username", () => {
    render(<UserCard username="john" />);
    expect(screen.getByText("john")).toBeInTheDocument();
  });

  it("shows repos after expanding", () => {
    render(<UserCard username="john" />);
    fireEvent.click(screen.getByText("john"));
    expect(screen.getByText("repo-1")).toBeInTheDocument();
    expect(screen.getByText("repo-2")).toBeInTheDocument();
  });
});
