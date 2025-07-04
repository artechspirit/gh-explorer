import { useState } from "react";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { setQuery } from "@/features/searchSlice";
import { useSearchUsersQuery } from "@/services/githubApi";
import SearchBar from "@/components/SearchBar";
import UserCard from "@/components/UserCard";
import { Spinner } from "./components/ui/ios-spinner";

export default function App() {
  const dispatch = useAppDispatch();
  const query = useAppSelector((state) => state.search.query);

  const [searchInput, setSearchInput] = useState("");

  const {
    data: users,
    isLoading,
    error,
  } = useSearchUsersQuery(query, {
    skip: query === "",
  });

  const handleSearch = () => {
    dispatch(setQuery(searchInput.trim()));
  };

  return (
    <main className="min-h-screen p-6 bg-gray-50">
      <SearchBar
        value={searchInput}
        onChange={setSearchInput}
        onSearch={handleSearch}
      />

      {isLoading && (
        <div className="flex justify-center mt-4">
          <Spinner size="lg" />
        </div>
      )}
      {error && (
        <p className="text-center mt-4 text-red-500">Failed to fetch users.</p>
      )}

      {users && (
        <div className="mt-6 max-w-md mx-auto">
          <p className="text-sm text-gray-600 mb-2">
            Showing users for "{query}"
          </p>
          {users.map((user) => (
            <UserCard key={user.id} username={user.login} />
          ))}
        </div>
      )}
    </main>
  );
}
