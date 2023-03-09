import React from "react";
import FooterComponent from "../components/components/FooterComponent/FooterComponent";
import HeaderComponent from "../components/components/HeaderComponent/HeaderComponent";
import SignInComponent from "../components/components/SignInComponent/SignInComponent";
import { FormProvider } from "../Provider/FormProvider";
const Layout = () => {
  return (
    <div className="h-full">
      {/* <HeaderComponent /> */}
      <FormProvider>
        <SignInComponent />
      </FormProvider>
      {/* <FooterComponent /> */}
    </div>
  );
};

export default Layout;
