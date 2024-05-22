import "./style.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export const ReservationPage = () => {
  const [reservation, setReservation] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `https://apps.kodim.cz/daweb/leviexpress/api/reservation?id=${id}`
      );
      const json = await response.json();
      setReservation(json.results);
    };

    fetchData();
  }, []);

  return (
    reservation !== null && (
      <div className="reservation container">
        <h2>Vaše e-jízdenka č. {reservation.reservationId}</h2>
        <div className="reservation__body">
          <div className="reservation__headings">
            <p>Datum cesty:</p>
            <p>Odjezd:</p>
            <p>Příjezd:</p>
            <p>Sedadlo:</p>
          </div>
          <div className="reservation__info">
            <p>{reservation.date}</p>
            <p>
              {reservation.fromCity.name}, {reservation.fromCity.time}
            </p>
            <p>
              {reservation.toCity.name}, {reservation.toCity.time}
            </p>
            <p>{reservation.seatNumber}</p>
          </div>
        </div>
      </div>
    )
  );
};
