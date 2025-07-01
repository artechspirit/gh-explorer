import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface Props {
  value: string;
  onChange: (v: string) => void;
  onSearch: () => void;
}

export default function SearchBar({ value, onChange, onSearch }: Props) {
  return (
    <div className="flex flex-col gap-2 max-w-md mx-auto">
      <Input
        placeholder="Enter username"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") onSearch();
        }}
      />
      <Button className="bg-blue-600 hover:bg-blue-700" onClick={onSearch}>
        Search
      </Button>
    </div>
  );
}
