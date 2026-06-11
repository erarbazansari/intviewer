import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import "./index.css";
import { ProfileCollector } from "./components/ProfileCollector";

export function App() {
  return (
    <div className="container mx-auto p-8 text-center relative z-10">
      <Card>
        <CardHeader className="gap-4">
          <CardTitle className="text-3xl font-bold">IntViewer</CardTitle>
          <CardDescription>
            Give your interview with interviewer online.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ProfileCollector />
        </CardContent>
      </Card>
    </div>
  );
}

export default App;
