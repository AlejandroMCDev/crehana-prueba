import "@testing-library/jest-dom";

import { render, screen } from "@testing-library/react";
import { MockedProvider } from "@apollo/client/testing";
import { PaisesPage } from "@/pages/PaisesPage";
import { COUNTRIES_QUERY } from "@/services/paises/queries/queries";
import { MemoryRouter } from "react-router-dom";

describe("Test de paises page", () => {
  it("El componente debe mostrar el listado de paises", async () => {
    const mock = {
      request: {
        query: COUNTRIES_QUERY,
      },
      result: {
        data: {
          countries: [
            { __typename: "Country", code: "AD", emoji: "🇦🇩", name: "Andorra" },
          ],
        },
      },
    };

    render(
      <MockedProvider addTypename={false} mocks={[mock]}>
        <MemoryRouter>
          <PaisesPage />
        </MemoryRouter>
      </MockedProvider>
    );

    const paisText = await screen.findByText("Listado de Países");

    expect(paisText).toBeInTheDocument();
  });

  it("El componente debe mostrar el loading", async () => {
    const mock = {
      delay: 30,
      request: {
        query: COUNTRIES_QUERY,
      },
      result: {
        data: {
          countries: [
            { __typename: "Country", code: "AD", emoji: "🇦🇩", name: "Andorra" },
          ],
        },
      },
    };

    render(
      <MockedProvider addTypename={false} mocks={[mock]}>
        <MemoryRouter>
          <PaisesPage />
        </MemoryRouter>
      </MockedProvider>
    );

    const loadingText = await screen.findByText("Recuperando países...");

    expect(loadingText).toBeInTheDocument();
  });

  it("El componente debe mostrar el error", async () => {

    const mock = {
      request: {
        query: COUNTRIES_QUERY,
      },
      error: new Error("Ha sucedido un error inesperado.")
    };

    render(
      <MockedProvider addTypename={false} mocks={[mock]}>
        <MemoryRouter>
          <PaisesPage />
        </MemoryRouter>
      </MockedProvider>
    );

    const errorText = await screen.findByText("Error: Ha sucedido un error inesperado.");

    expect(errorText).toBeInTheDocument();
  });

  it("El componente debe mostrar el mensaje que no hay datos", async () => {

    const mock = {
      request: {
        query: COUNTRIES_QUERY,
      },
      result: {
        data: {
          countries: []
        }
      }
    };

    render(
      <MockedProvider addTypename={false} mocks={[mock]}>
        <MemoryRouter>
          <PaisesPage />
        </MemoryRouter>
      </MockedProvider>
    );

    const emptyDataText = await screen.findByText("No hay datos");

    expect(emptyDataText).toBeInTheDocument();
  });
});
