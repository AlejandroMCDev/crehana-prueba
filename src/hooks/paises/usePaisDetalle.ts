import type { COUNTRY_QUERY_RESPONSE } from "@/interfaces/get-pais-by-code.response";
import { COUNTRY_QUERY } from "@/services/paises/queries/queries";
import { useQuery } from "@apollo/client";

export const usePaisDetalle = (paisCode: string) => {
  const { data, error, loading } = useQuery<COUNTRY_QUERY_RESPONSE>(
    COUNTRY_QUERY,
    {
      variables: {
        code: paisCode,
      },
    }
  );

  return {
    data,
    error,
    loading,
  };
};

