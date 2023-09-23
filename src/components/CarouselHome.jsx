import { MDBCarousel, MDBCarouselItem } from "mdb-react-ui-kit";
import c1 from "../assets/c1.jpg";
import c2 from "../assets/c2.jpg";
import c3 from "../assets/c3.jpg";
import c4 from "../assets/c4.jpg";
import c5 from "../assets/c5.jpg";
const CarouselHome = () => {
  return (
    <div className="container-carousel" style={{ borderRadius: "25px" }}>
      <MDBCarousel showControls delay={3000} style={{ borderRadius: "25px" }}>
        <MDBCarouselItem
          className="w-100 d-block"
          itemId={1}
          src={c1}
          alt="..."
          style={{ borderRadius: "25px", height: "324px", objectFit: "cover" }}
        />
        <MDBCarouselItem
          className="w-100 d-block"
          itemId={2}
          src={c2}
          alt="..."
          style={{ borderRadius: "25px", height: "324px", objectFit: "cover" }}
        />
        <MDBCarouselItem
          className="w-100 d-block"
          itemId={3}
          src={c3}
          alt="..."
          style={{ borderRadius: "25px", height: "324px", objectFit: "cover" }}
        />
        <MDBCarouselItem
          className="w-100 d-block"
          itemId={4}
          src={c4}
          alt="..."
          style={{ borderRadius: "25px", height: "324px", objectFit: "cover" }}
        />
        <MDBCarouselItem
          className="w-100 d-block"
          itemId={5}
          src={c5}
          alt="..."
          style={{ borderRadius: "25px", height: "324px", objectFit: "cover" }}
        />
      </MDBCarousel>
    </div>
  );
};

export default CarouselHome;
