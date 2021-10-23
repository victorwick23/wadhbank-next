import styled from "styled-components";

const Wrapper = styled.div`
  overflow: visible;
  .swiper {
    padding-bottom: 80px;
  }
  .swiper-button-prev,
  .swiper-button-next {
    display: none;
  }

  .swiper-pagination {
    bottom: 0;
    .swiper-pagination-bullet {
      background-color: #fff;
      opacity: 0.6;
      &.swiper-pagination-bullet-active {
        opacity: 1;
      }
    }
  }
`;

export default Wrapper;
