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
        try {
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

            if (!page) {
                console.error(`Page component not found: ./Pages/${name}.tsx`);
                // Fallback to a basic error component
                page = {
                    default: () =>
                        React.createElement(
                            "div",
                            {
                                style: {
                                    padding: "20px",
                                    textAlign: "center",
                                    fontFamily: "Arial, sans-serif",
                                },
                            },
                            `Page not found: ${name}`
                        ),
                };
            }

            if (page && typeof page === "object" && "default" in page) {
                // Add layout to all pages
                page.default.layout =
                    page.default.layout ||
                    ((page: React.ReactNode) => <Layout>{page}</Layout>);
            }

            return page;
        } catch (error) {
            console.error("Error resolving page component:", error);
            // Return a basic error component
            return {
                default: () =>
                    React.createElement(
                        "div",
                        {
                            style: {
                                padding: "20px",
                                textAlign: "center",
                                fontFamily: "Arial, sans-serif",
                                color: "red",
                            },
                        },
                        `Error loading page: ${name}`
                    ),
            };
        }
    },
    setup({ el, App, props }) {
        if (!el) {
            console.error("Target element not found");
            return;
        }

        try {
            const root = createRoot(el);
            root.render(<App {...props} />);
        } catch (error) {
            console.error("Error setting up React app:", error);
            // Fallback rendering
            el.innerHTML =
                '<div style="padding: 20px; text-align: center; font-family: Arial, sans-serif; color: red;">Application failed to load. Please check the console for errors.</div>';
        }
    },
    progress: {
        color: "#4B5563",
    },
});
