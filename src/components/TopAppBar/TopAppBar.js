import React, { Fragment, useState, useContext, useEffect } from "react";
import { AppBar, Box, IconButton, Toolbar } from "@mui/material";
import { Button, Container, Nav, Navbar, Header } from "react-bootstrap";
import MenuIcon from "@mui/icons-material/Menu";
import defaultLogo from "../../assets/BytecodeLogo.png";
import { defaultLogoHeight } from "../../utils/constants";
import { CompanyLogo } from "../_lowLevel/CompanyLogo";
import { ExtensionContext } from "@looker/extension-sdk-react";
import Checkbox from "../../components/_lowLevel/Checkbox.js";

import Radio from "../../components/_lowLevel/Radio.js";
import Dropdown from "../../components/_lowLevel/Dropdown.js";

export const TopAppBar = ({ appConfig, onMenuClick, toolbarHeight,props, ref, boardTitle, filter, expression, onChange,fieldNameSuggestions,fieldNameSuggestions2, fieldNameSuggestions3, setSelectedCheckboxes,selectedCheckboxes }) => {
  const { core40SDK } = useContext(ExtensionContext);
  const [message, setMessage] = useState();

  useEffect(() => {
    const initialize = async () => {
      try {
        const value = await core40SDK.ok(core40SDK.me());
        setMessage(`${value.display_name}`);
      } catch (error) {
        setMessage("Error occured getting information about me!");
        console.error(error);
      }
    };
    initialize();
  }, []);


    let filters = JSON.parse(JSON.stringify(fieldNameSuggestions));

  return (
<Fragment>
    <Container fluid className="padding-0">
        <div className="inner_page_block white_option"></div>

        <Navbar collapseOnSelect expand="lg">
          <Container fluid>

          <img
           src={appConfig.logoDataURL ? appConfig.logoDataURL : defaultLogo}
           alt="company logo"
           
           height={
             appConfig.logoHeight
               ? `${appConfig.logoHeight}px`
               : `${defaultLogoHeight}px`
           }
           />


            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto"></Nav>
              <Nav className="align-items-center">


                {/*<Checkbox
                fieldNameSuggestions={fieldNameSuggestions}
                setSelectedCheckboxes={setSelectedCheckboxes}
                selectedCheckboxes={selectedCheckboxes}
              />

              <Dropdown
              fieldNameSuggestions3={fieldNameSuggestions3}
              setSelectedCheckboxes={setSelectedCheckboxes}
              selectedCheckboxes={selectedCheckboxes}
            />



                <Radio
                fieldNameSuggestions2={fieldNameSuggestions2}
                setSelectedCheckboxes={setSelectedCheckboxes}
                selectedCheckboxes={selectedCheckboxes}
              />


            {filters?.some((filter) => filter.ui_config.type === "radio_buttons") && ( // Use && for conditional rendering
                console.log(filters, "filters1 is true")
              )}


                {filters?.some((filter) => filter.ui_config.type === "checkboxes") && ( // Use && for conditional rendering
                              console.log(filters, "filters2 is true")
              )}

              {filters?.some((filter) => filter.ui_config.type === "radio_buttons") && (
                <Radio
                  fieldNameSuggestions={fieldNameSuggestions}
                  setSelectedCheckboxes={setSelectedCheckboxes}
                  selectedCheckboxes={selectedCheckboxes}
                />
              )}

              {filters?.some((filter) => filter.ui_config.type === "checkboxes") && (


                <Checkbox
                  fieldNameSuggestions={fieldNameSuggestions}
                  setSelectedCheckboxes={setSelectedCheckboxes}
                  selectedCheckboxes={selectedCheckboxes}
                />
              )}*/}


              {/*{fieldNameSuggestions?.map((filter) => {
                   return filter.ui_config.type === "radio_buttons" ? (

                     <Radio
                       fieldNameSuggestions={fieldNameSuggestions}
                       setSelectedCheckboxes={setSelectedCheckboxes}
                       selectedCheckboxes={selectedCheckboxes}
                     />

                   ) : (
                           <Checkbox
                             fieldNameSuggestions={fieldNameSuggestions}
                             setSelectedCheckboxes={setSelectedCheckboxes}
                             selectedCheckboxes={selectedCheckboxes}
                           />

               );
             })}*/}

                <Navbar.Text>

                <span style={{color:"#076284", fontSize:"15px", fontWeight:"300", marginLeft: "1.5em"}}><i class="fal fa-user me-1"></i><a style={{fontWeight:"300"}} href="#login">{message}</a></span>

                </Navbar.Text>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Container>



    </Fragment>
  );
};
