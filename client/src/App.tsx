import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import Roadmap from "./pages/Roadmap";
import Frameworks from "./pages/Frameworks";
import Certifications from "./pages/Certifications";
import Training from "./pages/Training";
import Regions from "./pages/Regions";


function Router() {
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/roadmap"} component={Roadmap} />
      <Route path={"/frameworks"} component={Frameworks} />
      <Route path={"/certifications"} component={Certifications} />
      <Route path={"/training"} component={Training} />
      <Route path={"/regions"} component={Regions} />
      <Route path={"/404"} component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

// NOTE: About Theme
// - First choose a default theme according to your design style (dark or light bg), than change color palette in index.css
//   to keep consistent foreground/background color across components
// - If you want to make theme switchable, pass `switchable` ThemeProvider and use `useTheme` hook

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider
        defaultTheme="light"
        // switchable
      >
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
