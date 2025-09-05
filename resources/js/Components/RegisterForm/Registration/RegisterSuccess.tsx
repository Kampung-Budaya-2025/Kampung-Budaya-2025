import { router } from "@inertiajs/react";
import SuccessTitle from "@/Components/RegisterForm/Success/SuccessTitle";
import SuccessMascots from "@/Components/RegisterForm/Success/SuccessMascots";
import SuccessContent from "@/Components/RegisterForm/Success/SuccessContent";

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
        <div className="flex flex-col items-center justify-center min-h-screen px-2 py-12 text-center sm:px-4 sm:py-16 md:px-6 md:py-20">
            <SuccessTitle />
            <SuccessMascots />
            <SuccessContent onFinish={handleFinish} />
        </div>
    );
};

export default RegisterSuccess;