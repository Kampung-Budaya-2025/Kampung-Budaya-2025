// Utility functions for document handling
export const downloadDocument = {
    booklet: {
        download: () => {
            window.open("/documents/booklet/download", "_blank");
        },
        view: () => {
            window.open("/documents/booklet/view", "_blank");
        },
    },
    form: {
        download: () => {
            window.open("/documents/form/download", "_blank");
        },
        view: () => {
            window.open("/documents/form/view", "_blank");
        },
    },
};

export const openDocumentInNewTab = (
    type: "booklet" | "form",
    action: "download" | "view" = "download"
) => {
    const url = `/documents/${type}/${action}`;
    window.open(url, "_blank");
};

export const createDownloadLink = (
    type: "booklet" | "form",
    action: "download" | "view" = "download"
) => {
    return `/documents/${type}/${action}`;
};
