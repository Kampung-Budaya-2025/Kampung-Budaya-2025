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
            window.location.href = "/";
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen px-4 py-8 text-center">
            <SuccessTitle />
            <SuccessMascots />
            <SuccessContent onFinish={handleFinish} />
        </div>
    );
};

export default RegisterSuccess;