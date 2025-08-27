import RegisterHero from "@/Components/RegisterEvent/RegisterHero/page";
import ListLomba from "@/Components/RegisterEvent/ListLomba/page";
import React from "react";



const RegisterEventPage: React.FC = () => {
    return (
        <>
           <RegisterHero/>
           <ListLomba/>
        </>
    );
};

export default RegisterEventPage;
