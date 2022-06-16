import { links } from "./links";
import { Link } from "react-router-dom";
import { Banner, ListItem, Wrapper } from "./styles";
import React from "react";
import { useSelector } from "react-redux";

function Navigation() {
  const showNav = useSelector((state) => state.menu.value);

  return (
    showNav && (
      <Wrapper>
        <ul>
          <Banner>
            <h1>testandooo</h1>
          </Banner>
          {links.map((link) => {
            const Icon = link.icon;
            return (
              <li>
                <Link to={link.path.toLowerCase()}>
                  <Icon fontSize="large" />
                  <p className="text">{link.name}</p>
                </Link>
              </li>
            );
          })}
        </ul>
      </Wrapper>
    )
  );
}

export default Navigation;
