import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'

// allows overridding default material themes. In this case, makes app use dark mode.
const theme = createMuiTheme({
  palette: {
    mode: 'dark',
  },
})

// children is a special prop used for child components
const CustomTheme = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}

export default CustomTheme
