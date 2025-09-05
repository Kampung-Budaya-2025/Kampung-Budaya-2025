import SuccessDecorativeHeader from "@/Components/RegisterForm/Layout/SuccessDecorativeHeader";

const SuccessTitle = () => {
    return (
        <SuccessDecorativeHeader
            title="Pendaftaran Berhasil"
            titleClassName="mb-0 font-samsktrigrama font-normal leading-normal tracking-[-0.03125rem] text-5xl sm:text-6xl md:text-7xl lg:text-7xl xl:text-8xl 2xl:text-9xl"
            titleStyle={{
                background: 'linear-gradient(180deg, #FFC411 0%, #CD9C1A 15%, #BD6229 35%, #5D2F24 55%, #3D1F16 75%, #2A1510 85%, #1A0F0B 95%, #0F0805 100%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                color: 'transparent'
            }}
        />
    );
};

export default SuccessTitle;