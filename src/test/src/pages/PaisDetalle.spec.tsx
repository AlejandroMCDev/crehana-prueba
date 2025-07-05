import "@testing-library/jest-dom";

import { render, screen } from "@testing-library/react";
import { MockedProvider } from "@apollo/client/testing";
import { COUNTRY_QUERY } from "@/services/paises/queries/queries";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { PaisDetalle } from "@/pages/PaisDetalle";

describe("Test de paises detalle page", () => {
  it("El componente debe mostrar el pais", async () => {
    const mock = {
      request: {
        query: COUNTRY_QUERY,
        variable: {
          code: "AE",
        },
      },
      result: {
        data: {
          country: {
            capital: "Abu Dabhi",
            code: "AE",
            continent: {
              name: "Asia",
              __typename: "Continent",
            },
            currency: "AED",
            languages: [{ name: "Arabic", __typename: "Language" }],
            name: "United Arab Emirates",
            __typename: "Country",
          },
        },
      },
    };

    render(
      <MockedProvider addTypename={false} mocks={[mock]}>
        <MemoryRouter>
          <PaisDetalle />
        </MemoryRouter>
      </MockedProvider>
    );

    const paisDetalleText = await screen.findByText(
      "United Arab Emirates - AE"
    );

    expect(paisDetalleText).toBeInTheDocument();
  });

  it("El componente debe mostrar el loading", async () => {
    const mock = {
      delay: 30,
      request: {
        query: COUNTRY_QUERY,
        variable: {
          code: "AE",
        },
      },
      result: {
        data: {
          country: {
            capital: "Abu Dabhi",
            code: "AE",
            continent: {
              name: "Asia",
              __typename: "Continent",
            },
            currency: "AED",
            languages: [{ name: "Arabic", __typename: "Language" }],
            name: "United Arab Emirates",
            __typename: "Country",
          },
        },
      },
    };

    render(
      <MockedProvider addTypename={false} mocks={[mock]}>
        <MemoryRouter>
          <PaisDetalle />
        </MemoryRouter>
      </MockedProvider>
    );

    const loadingText = await screen.findByText("Cargando país...");

    expect(loadingText).toBeInTheDocument();
  });

  it("El componente debe mostrar el error", async () => {
    const mock = {
      request: {
        query: COUNTRY_QUERY,
        variables: {
          code: "TEST",
        },
      },
      error: new Error("Ha sucedido un error inesperado."),
    };

    render(
      <MockedProvider addTypename={false} mocks={[mock]}>
        <MemoryRouter initialEntries={["/paises/TEST"]}>
          <Routes>
            <Route path="/paises/:id" element={<PaisDetalle />} />
          </Routes>
        </MemoryRouter>
      </MockedProvider>
    );

    const errorText = await screen.findByText(
      "Error: Ha sucedido un error inesperado."
    );

    expect(errorText).toBeInTheDocument();
  });

  it("El componente debe mostrar el mensaje que no hay datos", async () => {
    const mock = {
      request: {
        query: COUNTRY_QUERY,
        variables: {
          code: "TEST",
        },
      },
      result: {
        data: {
          country: null,
        },
      },
    };

    render(
      <MockedProvider addTypename={false} mocks={[mock]}>
        <MemoryRouter initialEntries={["/paises/TEST"]}>
          <Routes>
            <Route path="/paises/:id" element={<PaisDetalle />} />
          </Routes>
        </MemoryRouter>
      </MockedProvider>
    );

    const emptyDataText = await screen.findByText(
      `El pais con el id "TEST" no existe`
    );

    expect(emptyDataText).toBeInTheDocument();
  });
});
