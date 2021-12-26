import React, { useEffect } from "react";
import styled from "styled-components";
import i18next from "i18next";

const Select = styled.select`
  background: transparent;
  border: unset;
  border-radius: 10px;
  color: #D2CFE6;
  height: 32px;
  font-size: 14px;
  font-weight: 600;
  padding-left: 8px;
  padding-right: 8px;
`;

const Option = styled.option`
  padding: 4px;
  background: #000;
`;

const languageMap = {
  en: { label: "English", dir: "ltr", active: true },
  ru: { label: "Russian", dir: "ltr", active: false }
};

const LanguagePicker = () => {
  const selected = localStorage.getItem("i18nextLng") || "en";

  useEffect(() => {

  }, [selected]);

  const onChange = (e) => {
    e.preventDefault();
    i18next.changeLanguage(e.target.value);
    window.location.reload(false);
  }

  return (
    <Select
      onChange={onChange}
      defaultValue={selected}
    >
      {Object.keys(languageMap)?.map(item => (
        <Option
          value={item}
          key={item}
        >
          {languageMap[item].label}
        </Option>
      ))}
    </Select>
  )
};

export default LanguagePicker;
