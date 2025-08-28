import { lazy } from "react";

// Lazy load heavy components untuk mengurangi bundle size awal
export const LazyRegisterUpload = lazy(
    () => import("../Registration/RegisterUpload")
);
export const LazyRegisterConfirmation = lazy(
    () => import("../Registration/RegisterConfirmation")
);
export const LazyRegisterSuccess = lazy(
    () => import("../Registration/RegisterSuccess")
);
