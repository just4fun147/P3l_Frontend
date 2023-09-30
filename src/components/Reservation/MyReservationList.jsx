import MyReservationItem from "./MyReservationItem";
const MyReservationList = (props) => {
  return (
    <>
      <p>{props.list}</p>
      <MyReservationItem />
      <MyReservationItem />
      <MyReservationItem />
    </>
  );
};

export default MyReservationList;
