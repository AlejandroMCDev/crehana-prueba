import type { Country } from "@/interfaces/pais.interface";
import { Link } from "react-router-dom";

interface Props {
  pais: Country;
}

export const CountryLink = ({ pais }: Props) => {
  return (
    <Link
      className="bg-white p-4 rounded shadow cursor-pointer hover:bg-white/70"
      to={`/paises/${pais.code}`}
    >
      <div>
        <p className="text-xl">
          {pais.emoji} {pais.name}
        </p>
        <p className="text-sm text-gray-500">Código: {pais.code}</p>
      </div>
    </Link>
  );
};
