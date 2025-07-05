import type { COUNTRIES_QUERY_RESPONSE } from "@/interfaces/get-paises.response";
import { COUNTRIES_QUERY } from "@/services/paises/queries/queries";
import { useQuery } from "@apollo/client";
import { useState } from "react";

export const usePaisesPage = () => {
  const { data, error, loading, refetch } = useQuery<COUNTRIES_QUERY_RESPONSE>(
    COUNTRIES_QUERY,
    {
      notifyOnNetworkStatusChange: true,
    }
  );
  const [filtroQuery, setFiltroQuery] = useState("");
  const [nombreFiltro, setNombreFiltro] = useState<string>("");
  const [errorFiltro, setErrorFiltro] = useState<string>("");

  const searchCountriesByFilter = () => {
    setErrorFiltro("");
    if (!nombreFiltro || filtroQuery === "") {
      setErrorFiltro("No se han completado los parametros necesarios");
      return;
    }

    refetch({
      filter: {
        [nombreFiltro]: {
          eq: filtroQuery.trim().toUpperCase(),
        },
      },
    });
  };

  return {
    data,
    error,
    errorFiltro,
    filtroQuery,
    loading,
    nombreFiltro,
    searchCountriesByFilter,
    setFiltroQuery,
    setNombreFiltro,
  }

};

