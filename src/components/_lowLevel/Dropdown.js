import React, {
  Fragment,
  createContext,
  useEffect,
  useState,
  useContext,
} from "react";
import {
  Accordion,
  Col,
  Form,
  Row,
  Button,
  Nav,
  AccordionCollapse,
} from "react-bootstrap";
import { ExtensionContext } from "@looker/extension-sdk-react";
import { Switch } from "@mui/material";

const Dropdown = ({
  fieldOptions,
  setFieldOptions,
  selectedFields,
  setSelectedFields,
  fieldNameSuggestions3,
  setFieldNameSuggestions3,
  setFieldNameSuggestions,
  selectedCheckboxes,
  setSelectedCheckboxes,
  boardTitle,
  setBoardTitle,
  filter,
  expression,
  onChange,
}) => {
  const { core40SDK: sdk, extensionSDK } = useContext(ExtensionContext);

  const handleFieldSelection = (field, value) => {
    let _selectedCheckboxes = { ...selectedCheckboxes };
    let { title } = field;
    _selectedCheckboxes[title] = value;

    setSelectedCheckboxes(_selectedCheckboxes);
  };

  const handleSelectAll = (field) => {
    const allOptions = field.suggestions;
    const allSelected = allOptions.every((option) =>
      selectedCheckboxes[field.name]?.includes(option)
    );
    setSelectedCheckboxes((prevCheckboxes) => ({
      ...prevCheckboxes,
      [field.name]: allSelected ? [] : [...allOptions],
    }));
  };

  const [show5, setShow5] = React.useState();

   const wrapperRef = React.useRef(null);

   React.useEffect(() => {
     document.addEventListener("click", handleClickOutside, false);
     return () => {
       document.removeEventListener("click", handleClickOutside, false);
     };
   }, []);

   const handleClickOutside = (event) => {
     if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
       setShow5(true);

     }
   };

  const [open, setOpen] = React.useState(false);


const [selectedValue, setSelectedValue] = useState(null);
  return (
    <Fragment>
      <div className="d-flex justify-content-start align-items-center flex-wrap custom">
        {fieldNameSuggestions3.map((field, index) => (
          <Row key={index}>
            <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="1">
                <Accordion.Header>{field.name}</Accordion.Header>

                <Accordion.Body>

                  <div class="scrollInside">
      
                  {field.suggestions.map((option, optionIndex) => (
                    <Form.Group key={optionIndex}>
                      <Form.Check
                        onChange={() => {
                          setSelectedValue(option); // Update state for selected value
                          handleFieldSelection(field, option); // Call your selection handler
                        }}
                        type="radio"
                        className=""
                        label={option}
                        checked={selectedValue === option} // Check based on state
                        name="accountGroups" // Common name for radio group
                        id={`id_${index}_${optionIndex}`}
                        value={option}
                      />
                    </Form.Group>
                  ))}

                  </div>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Row>
        ))}
      </div>
    </Fragment>
  );
};

export default Dropdown;
