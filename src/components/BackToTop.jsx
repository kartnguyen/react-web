import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const BackToTop = () => {
  return (
    <Link className="back-to-top" to={"#"} title="Lên đầu trang">
      <FontAwesomeIcon icon={faChevronUp} style={{ color: "#fff" }} />
    </Link>
  );
};

export default BackToTop;
