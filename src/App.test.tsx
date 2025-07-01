import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";
import * as githubApi from "@/services/githubApi";
import { Provider } from "react-redux";
import { store } from "@/store";

vi.mock("@/services/githubApi", async () => {
  const actual = await vi.importActual<typeof githubApi>(
    "@/services/githubApi"
  );
  return {
    ...actual,
    useSearchUsersQuery: vi.fn(),
    useGetUserReposQuery: vi.fn(),
  };
});

describe("App Integration", () => {
  beforeEach(() => {
    vi.resetAllMocks();
  });

  it("shows users after search and shows repos when user is expanded", async () => {
    const mockSearchUsers = githubApi.useSearchUsersQuery as unknown as vi.Mock;
    const mockGetRepos = githubApi.useGetUserReposQuery as unknown as vi.Mock;

    mockSearchUsers.mockReturnValue({
      data: [
        { id: 1, login: "john" },
        { id: 2, login: "jane" },
      ],
      isLoading: false,
      error: null,
    });

    mockGetRepos.mockImplementation((username: string) => ({
      data: [
        {
          id: 101,
          name: `${username}-repo1`,
          description: "desc",
          stargazers_count: 3,
        },
        {
          id: 102,
          name: `${username}-repo2`,
          description: "desc",
          stargazers_count: 7,
        },
      ],
      isLoading: false,
    }));

    render(
      <Provider store={store}>
        <App />
      </Provider>
    );

    // Type in search input
    const input = screen.getByPlaceholderText(/enter username/i);
    fireEvent.change(input, { target: { value: "dev" } });

    // Click Search
    fireEvent.click(screen.getByRole("button", { name: /search/i }));

    // Expect both users to show
    expect(await screen.findByText("john")).toBeInTheDocument();
    expect(await screen.findByText("jane")).toBeInTheDocument();

    // Expand "john"
    fireEvent.click(screen.getByText("john"));

    // Expect john's repos to appear
    expect(await screen.findByText("john-repo1")).toBeInTheDocument();
    expect(await screen.findByText("john-repo2")).toBeInTheDocument();
  });
});
