import {React, useState} from "react";
import { Card } from "semantic-ui-react";

function YGOCard({card}) {
  // console.log(card)

  // const [mainPic, setMainPic] = useState(true) //front = main, back = !main
  // function renderClick () {
  //   setMainPic(!mainPic)
  // }

  return (
    <Card>
      <div>
        <div className="image">
          <img src = {card.card_images[0].image_url_cropped} width = '150' max-height = '150' alt="oh no!" />
        </div>
        <div className="content">
          <h3 className="header">{card.name}</h3>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {card.type}
          </span>
        </div>
      </div>
    </Card>
  );
}

export default YGOCard;
