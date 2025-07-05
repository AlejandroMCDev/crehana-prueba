import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const filtros = [
  { value: "currency", name: "Moneda" },
  { value: "continent", name: "Continente" },
];

interface Props {
  nombreFiltro: string;
  setNombreFiltro: React.Dispatch<React.SetStateAction<string>>;
  filtroQuery: string;
  setFiltroQuery: React.Dispatch<React.SetStateAction<string>>;
  searchCountriesByFilter: () => void;
}

export const CountriesSearchBar = ({
  nombreFiltro,
  setNombreFiltro,
  filtroQuery,
  searchCountriesByFilter,
  setFiltroQuery,
}: Props) => {
  return (
    <div className="flex flex-row items-center gap-5">
      <Select
        value={nombreFiltro}
        onValueChange={(value) => setNombreFiltro(value)}
      >
        <SelectTrigger className="w-[180px] bg-background">
          <SelectValue placeholder="Selecciona filtro" />
        </SelectTrigger>
        <SelectContent>
          {filtros.map((filtro) => (
            <SelectItem key={filtro.value} value={filtro.value}>
              {filtro.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <Input
        value={filtroQuery}
        onChange={(e) => setFiltroQuery(e.target.value)}
        className="w-1/5 bg-background"
      />
      <Button onClick={searchCountriesByFilter} className="cursor-pointer">
        Buscar
      </Button>
    </div>
  );
};
