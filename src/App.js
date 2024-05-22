import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Index from "./places/pages/index";
import WebDev from "./places/pages/WebDev";
import ComNet from "./places/pages/ComNet";
import OpeSys from "./places/pages/OpeSys";
import CldCom from "./places/pages/CldCom";
import Error from "./shared/components/Error/Error";

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/cs-notes" element={<Index />} />

				<Route path="web" element={<WebDev />} />
				<Route path="cn" element={<ComNet />} />
				<Route path="os" element={<OpeSys />} />
				<Route path="cloud" element={<CldCom />} />

				<Route path="*" element={<Error />} />
			</Routes>
		</BrowserRouter>
	);
};

export default App;
