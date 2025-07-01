import { render, screen, fireEvent } from "@testing-library/react";
import SearchBar from "./SearchBar";

describe("SearchBar", () => {
  it("renders input and button", () => {
    render(<SearchBar value="" onChange={() => {}} onSearch={() => {}} />);
    expect(screen.getByPlaceholderText(/enter username/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /search/i })).toBeInTheDocument();
  });

  it("calls onChange when input changes", () => {
    const onChange = vi.fn();
    render(<SearchBar value="" onChange={onChange} onSearch={() => {}} />);
    fireEvent.change(screen.getByPlaceholderText(/enter username/i), {
      target: { value: "john" },
    });
    expect(onChange).toHaveBeenCalledWith("john");
  });

  it("calls onSearch when button is clicked", () => {
    const onSearch = vi.fn();
    render(<SearchBar value="john" onChange={() => {}} onSearch={onSearch} />);
    fireEvent.click(screen.getByRole("button", { name: /search/i }));
    expect(onSearch).toHaveBeenCalled();
  });
});
