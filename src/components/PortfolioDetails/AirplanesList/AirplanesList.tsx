import React, { useEffect, useState } from "react";
import {
  Button,
  FormControl,
  MenuItem,
  IconButton,
  InputLabel,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import useDashboardStore from "../../../store/store";
import { Airplane } from "../../../types";

interface AirplanesListProps {
  activePortfolioId: string;
}

const AirplanesList = ({ activePortfolioId }: AirplanesListProps) => {
  const addAirplaneToPortfolio = useDashboardStore(
    (state) => state.addAirplaneToPortfolio
  );
  const removeAirplaneFromPortfolio = useDashboardStore(
    (state) => state.removeAirplaneFromPortfolio
  );

  const airplanes = useDashboardStore((state) => state.airplanes);
  const portfolios = useDashboardStore((state) => state.portfolios);

  const activePortfolio = portfolios[activePortfolioId];

  const [airplanesInPortfolio, setAirplanesInPortfolio] = useState<Airplane[]>(
    []
  );
  const [selectedAirplane, setSelectedAirplane] = useState<string>("");

  useEffect(() => {
    setAirplanesInPortfolio(
      activePortfolio?.airplaneByRegistration.map(
        (registration) => airplanes[registration]
      ) || []
    );
  }, [activePortfolio, portfolios, airplanes]);

  const handleAirplaneSelection = (event: SelectChangeEvent) => {
    setSelectedAirplane(event.target.value);
  };

  return (
    <List>
      {airplanesInPortfolio.map((airplane) => (
        <ListItem
          key={airplane.registration}
          secondaryAction={
            <IconButton
              edge="end"
              aria-label="delete"
              onClick={() =>
                removeAirplaneFromPortfolio(
                  airplane.registration,
                  activePortfolioId
                )
              }
            >
              <DeleteIcon />
            </IconButton>
          }
        >
          <ListItemText
            primary={airplane.registration}
            secondary={airplane.model}
          />
        </ListItem>
      ))}
      <FormControl variant="standard">
        <InputLabel id="select-airplane">Select Airplane</InputLabel>
        <Select
          onChange={handleAirplaneSelection}
          value={selectedAirplane}
          label="Select Airplane"
          id="select-airplane"
        >
          {Object.values(airplanes)
            .filter(
              (airplane) =>
                !activePortfolio.airplaneByRegistration.includes(
                  airplane.registration
                )
            )
            .map((airplane) => {
              return (
                <MenuItem
                  key={airplane.registration}
                  value={airplane.registration}
                >
                  {airplane.registration}
                </MenuItem>
              );
            })}
        </Select>
        <Button
          disabled={!selectedAirplane}
          onClick={() => {
            addAirplaneToPortfolio(selectedAirplane, activePortfolioId);
            setSelectedAirplane("");
          }}
          variant="outlined"
        >
          Add
        </Button>
      </FormControl>
    </List>
  );
};

export default AirplanesList;
