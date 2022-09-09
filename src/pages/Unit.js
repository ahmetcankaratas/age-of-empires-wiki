import { StyledEngineProvider } from "@mui/material";
import MainFilter from "../components/MainFilter/MainFilter";
import UnitTable from "../components/UnitTable/UnitTable";

const Unit = () => {
  return (
    <StyledEngineProvider injectFirst>
      <MainFilter />
      <UnitTable />
    </StyledEngineProvider>
  );
};

export default Unit;
