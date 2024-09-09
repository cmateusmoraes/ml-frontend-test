import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";

import SearchForm from "../components/SearchForm";

describe("SearchForm Component", () => {
  test("renders input field and submit button", () => {
    render(
      <SearchForm query="" setQuery={jest.fn()} handleSearch={jest.fn()} />,
    );

    const inputElement = screen.getByPlaceholderText("Buscar productos...");
    const buttonElement = screen.getByRole("button", {
      name: /Buscar productos/i,
    });

    expect(inputElement).toBeInTheDocument();
    expect(buttonElement).toBeInTheDocument();
  });

  test("calls setQuery on input change", () => {
    const mockSetQuery = jest.fn();

    render(
      <SearchForm query="" setQuery={mockSetQuery} handleSearch={jest.fn()} />,
    );

    const inputElement = screen.getByPlaceholderText("Buscar productos...");

    fireEvent.change(inputElement, { target: { value: "Test search" } });

    expect(mockSetQuery).toHaveBeenCalledWith("Test search");
  });

  test("calls handleSearch on form submit", () => {
    const mockHandleSearch = jest.fn();

    render(
      <SearchForm
        query="Test search"
        setQuery={jest.fn()}
        handleSearch={mockHandleSearch}
      />,
    );

    const formElement = screen.getByRole("search", {
      name: /Formulario de búsqueda de productos/i,
    });

    fireEvent.submit(formElement);

    expect(mockHandleSearch).toHaveBeenCalled();
  });
});
