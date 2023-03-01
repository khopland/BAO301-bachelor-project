import { ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/material";
import Components from "./Components";

const theme = createTheme({
	palette: {
		primary: {
			main: "#7500c0",
			light: "#a100ff",
			dark: "#460073",
		},
		secondary: {
			main: "#a055f5",
			light: "#be82ff",
			dark: "#b455aa",
		},
		error: {
			main: "#ff3246",
		},
		warning: {
			main: "#ff7800",
		},
		info: {
			main: "#0041f0",
		},
		success: {
			main: "#64ff50",
		},
	},
});

function App() {
		return (
		<>
				<ThemeProvider theme={theme}>
					<Components />
				</ThemeProvider>
		</>
	);
}

export default App;
