import { useEffect } from "react";
import "./Pageload.css";
import $ from "jquery";

const Pageload = () => {
  useEffect(() => {
    $(window).on("load", function () {
      setTimeout(function () {
        $(".page-load").fadeOut("slow");
      }, 3000);
    });
  }, []);

  return (
    <div className="page-load">
      <h1>Suzuki Iwao</h1>
    </div>    
  );
}

export default Pageload;
