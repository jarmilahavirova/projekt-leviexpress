import { Seat } from "../Seat";
import "./style.css";

export const SeatRow = ({ row, rowSelectedSeat, onSeatSelected }) => {
  return (
    <div className="seat-row">
      {row.map((row) => {
        return (
          <Seat
            key={row.number}
            number={row.number}
            isOccupied={row.isOccupied}
            isSelected={row.number === rowSelectedSeat ? true : false}
            onSelect={onSeatSelected}
          />
        );
      })}
    </div>
  );
};
