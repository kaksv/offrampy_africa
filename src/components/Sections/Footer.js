import React from "react"
import styled from "styled-components"
import { Link } from "react-scroll"
// Assets
import LogoIcon from "../../assets/svg/logo-light.svg"

import { Box } from "@mui/material"

export default function Contact() {
  const getCurrentYear = () => {
    return new Date().getFullYear()
  }

  return (
    <Wrapper id='about'>
      <div className='darkBg'>
        <div className='container'>
          <InnerWrapper
            className='flexSpaceCenter'
            style={{ padding: "30px 0" }}
          >
            <Link
              className='flexCenter animate pointer'
              to='home'
              smooth={true}
              offset={-80}
            >
              <Box component='img' src={LogoIcon} sx={{ height: 45, m: 1 }} />
            </Link>
            <StyleP className='whiteColor font13'>
              © {getCurrentYear()} -{" "}
              <span className='purpleColor font13'>OneRamp</span> All Right
              Reserved
            </StyleP>

            <Link
              className='whiteColor animate pointer font13'
              to='home'
              smooth={true}
              offset={-80}
            >
              Back to Top
            </Link>
          </InnerWrapper>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 100%;
`
const InnerWrapper = styled.div`
  @media (max-width: 550px) {
    flex-direction: column;
  }
`
const StyleP = styled.p`
  @media (max-width: 550px) {
    margin: 20px 0;
  }
`
