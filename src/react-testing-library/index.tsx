import { render as translationRender } from "@testing-library/react";
import { I18nextProvider } from "react-i18next";
import i18n from "../i18n";
export * from "@testing-library/react";
export const render = (ui: React.ReactElement) =>
  translationRender(<I18nextProvider i18n={i18n}>{ui}</I18nextProvider>);
