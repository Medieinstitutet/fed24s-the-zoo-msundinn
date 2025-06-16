import { useRouteError } from "react-router";

export const ErrorPage = () => {
  const error = useRouteError() as Error;
  return (
    <div>
      <h1>Oj då!</h1>
      <p>{error.message}</p>
    </div>
  );
};
