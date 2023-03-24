import React from "react";
import FooterComponent from "../components/components/FooterComponent/FooterComponent";
import HeaderComponent from "../components/components/HeaderComponent/HeaderComponent";
import SignInComponent from "../components/components/SignInComponent/SignInComponent";
import MainPageComponent from "../components/renderings/MainPageComponent/MainPageComponent";
import { FormProvider } from "../Provider/FormProvider";
const Layout = () => {
  return (
    <div className="h-full">
      {/* <HeaderComponent /> */}
      <FormProvider>
        <SignInComponent />
      </FormProvider>
      {/* <MainPageComponent />
      <FooterComponent /> */}
    </div>
  );
};

export default Layout;
