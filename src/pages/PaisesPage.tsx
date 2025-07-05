import { Label } from "@/components/ui/label";
import { usePaisesPage } from "@/hooks/paises/usePaisesPage";
import { CountriesSearchBar } from "@/components/paises/CountriesSearchBar";
import { CountryLink } from "@/components/paises/CountryLink";

export const PaisesPage = () => {
  const {
    data,
    error,
    errorFiltro,
    loading,
    searchCountriesByFilter,
    setFiltroQuery,
    setNombreFiltro,
    nombreFiltro,
    filtroQuery,
  } = usePaisesPage();

  if (loading)
    return (
      <div className="flex min-h-svh items-center justify-center">
        <p className="text-lg text-gray-600">Recuperando países...</p>
      </div>
    );

  if (error) {
    return (
      <div className="flex min-h-svh items-center justify-center">
        <p className="text-red-600">Error: {error.message}</p>
      </div>
    );
  }

  return (
    <section className="bg-gray-300 p-4 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Listado de Países</h1>

      <Label className="mb-1 text-lg">Filtros</Label>

      <CountriesSearchBar
        filtroQuery={filtroQuery}
        nombreFiltro={nombreFiltro}
        searchCountriesByFilter={searchCountriesByFilter}
        setFiltroQuery={setFiltroQuery}
        setNombreFiltro={setNombreFiltro}
      />

      {errorFiltro.length > 0 && <p className="text-red-600">{errorFiltro}</p>}

      <div className="grid grid-cols-5 gap-4 max-w-full mt-5">
        {data?.countries.length !== 0 ? (
          data?.countries.map((pais) => (
            <CountryLink key={pais.code} pais={pais} />
          ))
        ) : (
          <p>No hay datos</p>
        )}
      </div>
    </section>
  );
};
