import { useState } from "react";
import { JourneyPicker } from "../../components/JourneyPicker";
import { JourneyDetail } from "../../components/JourneyDetail";
import { SelectedSeat } from "../../components/SelectedSeat";

export const HomePage = () => {
  const [journey, setJourney] = useState(null);

  const handleJourneyChange = (journeyData) => {
    setJourney(journeyData);
  };

  return (
    <main>
      <JourneyPicker onJourneyChange={handleJourneyChange} />
      {journey !== null && <JourneyDetail journey={journey} />}
      {journey !== null && <SelectedSeat number={journey.autoSeat} />}
    </main>
  );
};
