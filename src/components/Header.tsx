import { Navigation } from "./Navigation";

export const Header = () => {
  return (
    <header className="header">
      <div className="logo-left">
        <img src="/logo.png" alt="Majas Zoo logotyp" />
      </div>
      <Navigation />
    </header>
  );
};
