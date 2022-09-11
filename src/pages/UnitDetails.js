import UnitDetail from "../components/UnitDetail/UnitDetail";
import { StyledEngineProvider } from "@mui/material";

const UnitDetails = () => {
  return (
    <StyledEngineProvider injectFirst>
      <UnitDetail />
    </StyledEngineProvider>
  );
};

export default UnitDetails;
