import React from "react";
import FooterComponent from "../components/components/FooterComponent/FooterComponent";
import HeaderComponent from "../components/components/HeaderComponent/HeaderComponent";
import SignInLayOut from "../components/components/SignInComponent/SignInLayOut";
import MainPageComponent from "../components/renderings/MainPageComponent/MainPageComponent";
import { FormProvider } from "../Provider/FormProvider";
const Layout = () => {
  return (
    <div className="h-full">
      <HeaderComponent />
      {/* <FormProvider>
        <SignInLayOut />
      </FormProvider> */}
      <MainPageComponent />
      <FooterComponent />
    </div>
  );
};

export default Layout;
