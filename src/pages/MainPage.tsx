import { Link } from "react-router-dom";

export const MainPage = () => {
  return (
    <div className="flex min-h-svh flex-col bg-gray-300 p-5">
      <h1 className="text-4xl">Inicio</h1>
      <ul className="list-disc">
        <li className="ml-5">
          <Link className="underline" to="/paises">Lista de Paises</Link>
        </li>
      </ul>
    </div>
  );
};
