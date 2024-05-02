import React from "react";
import "./Footer.css";
import { Paragraph } from "../paragraph/Paragraph";
import { dataFooter } from "../../dataFooter";

export const Footer = () => {
  return (
    <div className="containerfooter">
      <div className="paragraph">
      <Paragraph data={dataFooter[0]} className="text" />
      <Paragraph data={dataFooter[1]} className="text" />
      <Paragraph data={dataFooter[2]} className="text" />
      <Paragraph data={dataFooter[3]} className="text" />
      </div>
      <div className="link-footer">
          <a href="https://vk.com/spbgupget">
            <i class="fab fa-vk"></i>
          </a>
          <a href="https://t.me/getspb">
            <i class="fa-brands fa-telegram"></i>
          </a>
          <a href="https://feeds.feedburner.com/spbgupget">
            <i class="fas fa-wifi"></i>
          </a>
        </div>
    </div>
  );
};
