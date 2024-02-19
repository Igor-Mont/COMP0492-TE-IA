import Dashboard from "./components/Dashboard";
import { OverviewIA } from "./components/OverviewIA";
import { Quotes } from "./components/Quotes";
import { DiscussionAI } from "./components/DiscussionsAI";

function App() {
  return (
    <div className="w-full">
      <OverviewIA />
      <DiscussionAI />
      <Quotes />
      <Dashboard/>
    </div>
  );
}

export { App };
