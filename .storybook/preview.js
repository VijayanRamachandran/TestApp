import { setCompodocJson } from "@storybook/addon-docs/angular";
import { themes } from "@storybook/theming";
import docJson from "../documentation.json";
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

setCompodocJson(docJson);

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  viewport: { viewports: INITIAL_VIEWPORTS },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },    
  },
  docs: { inlineStories: true,
          themes: themes.dark },
}