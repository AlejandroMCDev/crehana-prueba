import { useParams } from "react-router";
import { usePaisDetalle } from "@/hooks/paises/usePaisDetalle";
import { CountryCard } from "@/components/paises/CountryCard";

export const PaisDetalle = () => {
  const params = useParams<{ id: string }>();

  const { data, error, loading } = usePaisDetalle(params.id!);

  if (loading)
    return (
      <div className="flex min-h-svh items-center justify-center">
        <p className="text-lg text-gray-600">Cargando país...</p>
      </div>
    );

  if (error) {
    return (
      <div className="flex min-h-svh items-center justify-center">
        <p className="text-red-600">Error: {error.message}</p>
      </div>
    );
  }

  if (!data?.country) {
    return (
      <div className="flex min-h-svh items-center justify-center">
        <p className="text-red-600">El pais con el id "{params.id}" no existe</p>
      </div>
    )
  }

  return (
    <section className="flex items-center justify-center bg-gray-300 p-4 min-h-screen">
      <CountryCard country={data!.country}/>
    </section>
  );
};
