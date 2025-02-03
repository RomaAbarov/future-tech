import Image from "next/image";
import Img1 from "/public/images/team/1.png";
import Img2 from "/public/images/team/2.png";
import Img3 from "/public/images/team/3.png";
import Img4 from "/public/images/team/4.png";
import "./Team.scss";

export function Team() {
  return (
    <div className="resources-preview__team team">
      <Image
        src={Img1}
        alt=""
        className="team__person"
        width="60"
        height="60"
      />
      <Image
        src={Img2}
        alt=""
        className="team__person"
        width="60"
        height="60"
      />
      <Image
        src={Img3}
        alt=""
        className="team__person"
        width="60"
        height="60"
      />
      <Image
        src={Img4}
        alt=""
        className="team__person"
        width="60"
        height="60"
      />
    </div>
  );
}
