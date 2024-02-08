import Dashboard from "./components/Dashboard";
import { OverviewIA } from "./components/OverviewIA";
import { Quotes } from "./components/Quotes";

function App() {
  return (
    <div className="w-full">
      <OverviewIA />
      <Quotes />
      <Dashboard/>
    </div>
  );
}

export { App };
