import React from 'react';
import styled from 'styled-components';

import theme from '../utils/theme';

const Wrapper = styled.nav`
  background-color: transparent;
  .navbar-burger {
    height: 4.25rem;
  }
  .navbar-burger:hover {
    background-color: transparent;
  }
`;

const NavBarContainer = styled.div`
  padding-top: 2%;
  padding-bottom: 2%;
  .navbar-item img {
    max-height: 2.125rem !important;
  }
`;

const LogoTextStyled = styled.span`
  font-size: 1.875rem;
  padding-left: 1.5625rem;
  font-weight: ${theme.fontRegular};
  color: ${theme.textColorBlack};
`;

const LinkStyled = styled.a`
  color: ${theme.textColorBlack};
  padding-left: 1.5rem;
`;
class TopHeader extends React.Component {
  constructor(props) {
    super(props);

    this.toggleMobileMenu = this.toggleMobileMenu.bind(this);
    this.state = {
      isActive: false,
    };
  }

  toggleMobileMenu() {
    const { isActive } = this.state;
    this.setState({
      isActive: !isActive,
    });
  }

  render() {
    const { isActive } = this.state;
    return (
      <Wrapper className="navbar is-transparent">
        <NavBarContainer className="container">
          <div className="navbar-brand">
            <a className="navbar-item">
              <img src="/images/DexWallet_Icon@2x.png" alt="DexWallet" />
              <LogoTextStyled>DexWallet</LogoTextStyled>
            </a>
            <a
              role="button"
              className={isActive ? 'navbar-burger is-active' : 'navbar-burger'}
              aria-label="menu"
              aria-expanded="false"
              onClick={this.toggleMobileMenu}
            >
              <span aria-hidden="true" />
              <span aria-hidden="true" />
              <span aria-hidden="true" />
            </a>
          </div>

          <div id="navbarExampleTransparentExample" className="navbar-menu">
            <div className="navbar-end  is-size-6">
              <div className="navbar-item">
                <LinkStyled>About</LinkStyled>
              </div>
              <div className="navbar-item">
                <LinkStyled>Features</LinkStyled>
              </div>
              <div className="navbar-item">
                <LinkStyled>Blog</LinkStyled>
              </div>
              <div className="navbar-item">
                <LinkStyled>Contact Us</LinkStyled>
              </div>
            </div>
          </div>
        </NavBarContainer>
      </Wrapper>
    );
  }
}

export default TopHeader;