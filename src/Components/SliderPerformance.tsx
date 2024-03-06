import { NoteSVG } from "../Resources/Svg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
};

<Carousel
  swipeable={false}
  draggable={false}
  showDots={true}
  responsive={responsive}
  ssr={true} // means to render carousel on server-side.
  infinite={true}
//   autoPlay={this.props.deviceType !== "mobile" ? true : false}
  autoPlaySpeed={1000}
  keyBoardControl={true}
  customTransition="all .5"
  transitionDuration={500}
  containerClass="carousel-container"
  removeArrowOnDeviceType={["tablet", "mobile"]}
//   deviceType={this.props.deviceType}
  dotListClass="custom-dot-list-style"
  itemClass="carousel-item-padding-40-px"
>
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
  <div>Item 4</div>
</Carousel>;



function SliderPerformance() {
  return (
    <div>
        
    </div>
  );
}

export default SliderPerformance;

<div className="flex  justify-start p-4 gap-3 rounded-xl w-[50%] my-4 bg-[#E8F4FD]">
        <div>
          <NoteSVG />
        </div>
        <div className="flex flex-col gap-2">
          <div className="text-sm font-medium text-[#191C1F] ">
            Lorem ipsum dolor sit amet consectetur. Dui vel quis dignissim
            mattis enim tincidunt.
          </div>
          <div className="text-sm font-medium text-[#3E5765]">
            Lorem ipsum dolor sit amet consectetur. Ac phasellus risus est
            faucibus metus quis. Amet sapien quam viverra adipiscing
            condimentum. Ac consectetur et pretium in a bibendum in. Sed vitae
            sit nisi viverra natoque lacinia libero enim.
          </div>
        </div>
</div>