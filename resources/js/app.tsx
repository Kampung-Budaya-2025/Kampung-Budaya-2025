import React from "react";
import { createRoot } from "react-dom/client";
import { createInertiaApp } from "@inertiajs/react";
import Layout from "./Layouts/Layout";

import "./bootstrap";
import "../css/app.css";

const appName = "Kampung Budaya";

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => {
        const pages = import.meta.glob("./Pages/**/*.tsx", {
            eager: true,
        }) as Record<
            string,
            {
                default: React.ComponentType & {
                    layout?: (page: React.ReactNode) => React.ReactNode;
                };
            }
        >;
        let page = pages[`./Pages/${name}.tsx`];

        if (page && typeof page === "object" && "default" in page) {
            // Add layout to all pages
            page.default.layout =
                page.default.layout ||
                ((page: React.ReactNode) => <Layout>{page}</Layout>);
        }

        return page;
    },
    setup({ el, App, props }) {
        const root = createRoot(el);
        root.render(<App {...props} />);
    },
    progress: {
        color: "#4B5563",
    },
});
