import { useState } from "react";
import { useGetUserReposQuery } from "@/services/githubApi";
import { ChevronDown, ChevronUp, Star } from "lucide-react";
import { Spinner } from "./ui/ios-spinner";

export default function UserCard({ username }: { username: string }) {
  const [expanded, setExpanded] = useState(false);
  const { data: repos = [], isLoading } = useGetUserReposQuery(username, {
    skip: !expanded,
  });

  return (
    <div className="bg-white border rounded p-3 mb-3">
      <div
        className="flex justify-between cursor-pointer"
        onClick={() => setExpanded(!expanded)}
      >
        <span>{username}</span>
        {expanded ? <ChevronUp /> : <ChevronDown />}
      </div>

      {expanded && (
        <div className="mt-3">
          {isLoading ? (
            <div className="flex justify-center">
              <Spinner size="lg" />
            </div>
          ) : (
            repos.map((repo) => (
              <div key={repo.id} className="bg-gray-100 p-2 rounded mb-2">
                <div className="flex justify-between">
                  <strong>{repo.name}</strong>
                  <span className="flex items-center gap-1 text-sm">
                    {repo.stargazers_count} <Star size={14} />
                  </span>
                </div>
                <p className="text-gray-600 text-sm">{repo.description}</p>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
}
