import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { Country } from "@/interfaces/pais.interface";

interface Props {
  country: Country;
}

export const CountryCard = ({ country }: Props) => {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>
          {country.name} - {country.code}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div>
          <p>Moneda: {country.currency}</p>
          <p>Continente: {country.continent.name}</p>
          <p>
            Lenguajes:{" "}
            {country.languages.map((language) => `${language.name},`)}
          </p>
          <p>Capital: {country.capital}</p>
        </div>
      </CardContent>
    </Card>
  );
};
