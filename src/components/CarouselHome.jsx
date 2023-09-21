import { MDBCarousel, MDBCarouselItem } from "mdb-react-ui-kit";

const CarouselHome = () => {
  return (
    <div className="container-carousel" style={{ borderRadius: "25px" }}>
      <MDBCarousel showControls delay={3000} style={{ borderRadius: "25px" }}>
        <MDBCarouselItem
          className="w-100 d-block"
          itemId={1}
          src="https://picsum.photos/id/0/1208/302"
          alt="..."
          style={{ borderRadius: "25px" }}
        />
        <MDBCarouselItem
          className="w-100 d-block"
          itemId={2}
          src="https://picsum.photos/id/1/1208/302"
          alt="..."
          style={{ borderRadius: "25px" }}
        />
        <MDBCarouselItem
          className="w-100 d-block"
          itemId={3}
          src="https://picsum.photos/id/2/1208/302"
          alt="..."
          style={{ borderRadius: "25px" }}
        />
        <MDBCarouselItem
          className="w-100 d-block"
          itemId={4}
          src="https://picsum.photos/id/3/1208/302"
          alt="..."
          style={{ borderRadius: "25px" }}
        />
        <MDBCarouselItem
          className="w-100 d-block"
          itemId={5}
          src="https://picsum.photos/id/4/1208/302"
          alt="..."
          style={{ borderRadius: "25px" }}
        />
      </MDBCarousel>
    </div>
  );
};

export default CarouselHome;
