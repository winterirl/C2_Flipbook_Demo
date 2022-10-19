import "./styles.css";
import $ from "jquery";
import "slick-slider";

$(".slider").slick({
  centerMode: true,
  centerPadding: "0px",
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: true,
  focusOnSelect: true,
  adaptiveHeight: true,
  mobileFirst: true
});
