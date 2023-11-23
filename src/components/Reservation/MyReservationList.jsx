import MyReservationItem from "./MyReservationItem";
import Empty from "./Empty";
import Pagination from "react-bootstrap/Pagination";

const MyReservationList = (props) => {
  return (
    <>
      {props.data.length == 0 ? (
        <>
          <Empty />
        </>
      ) : (
        <>
          {props.data.map((data, index) => (
            <MyReservationItem
              start={data.start_data}
              end={data.end_date}
              adult={data.adult}
              child={data.child}
              identifier={data.status}
              id={data.id}
              show={props.id_booking}
            />
          ))}
          <div>
            <Pagination>{props.item}</Pagination>
          </div>
        </>
      )}
    </>
  );
};

export default MyReservationList;
