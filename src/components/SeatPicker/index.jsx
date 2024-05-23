import { Seat } from "../Seat";
import { SeatRow } from "../SeatRow";
import "./style.css";

export const SeatPicker = ({ seats }) => {
  return (
    <div className="seat-picker container">
      <h2>Vyberte sedadlo</h2>
      <div className="seats">
        {seats.map((seatRow, index) => {
          return <SeatRow key={index} row={seatRow} />;
        })}
      </div>
    </div>
  );
};
