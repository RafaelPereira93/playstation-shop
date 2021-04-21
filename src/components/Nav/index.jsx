import React from "react";
import * as styles from "./NavStyles";
import formatTextLink from "../../utils/formatTextLink";

const linksText = ["Games", "Controllers", "Consoles and Acessories"];

const Nav = ({ currentTab, setCurrentTab }) => {
  const handleClick = ({ target }) => {
    const innerTextList = formatTextLink(target.innerText);
    setCurrentTab(innerTextList);
  };

  return (
    <>
      <styles.WrapperNav>
        <styles.NavWrapper>
          <ul>
            {linksText.map((linkText) => (
              <styles.LinkNav
                key={linkText}
                onClick={handleClick}
                current={currentTab === formatTextLink(linkText)}
              >
                {linkText}
              </styles.LinkNav>
            ))}
          </ul>
        </styles.NavWrapper>
      </styles.WrapperNav>
    </>
  );
};

export default Nav;
