import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import { Layout } from "./components/common/layout";
import { QueryClient, QueryClientProvider } from "react-query";
import Gallery from "./components/gallery/gallery.component";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
const queryClient = new QueryClient();
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Layout>
        <Gallery />
      </Layout>
    </QueryClientProvider>
  </React.StrictMode>
);
reportWebVitals();
