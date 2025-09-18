import { router } from "@inertiajs/react";
import SuccessContent from "@/Components/RegisterForm/Success/SuccessContent";
import SuccessHeader from "../Success/SuccessHeader";

interface RegisterSuccessProps {
    onFinish?: () => void;
}

const RegisterSuccess = ({ onFinish }: RegisterSuccessProps = {}) => {
    const handleFinish = () => {
        localStorage.removeItem("registrationData");

        if (onFinish) {
            onFinish();
        } else {
            router.visit("/", {
                method: "get",
            });
        }
    };

    return (
        <div className="relative min-h-screen min-h-[100svh] min-h-[100dvh] grid grid-rows-[auto,1fr] px-2 py-0 text-center sm:px-4 sm:py-0 md:px-6 md:py-0 pt-[env(safe-area-inset-top)] pb-[env(safe-area-inset-bottom)]">
            <SuccessHeader />
            <div className="flex items-center justify-center w-full">
                <SuccessContent onFinish={handleFinish} />
            </div>
        </div>
    );
};

export default RegisterSuccess;
