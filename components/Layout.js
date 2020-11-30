import styled from 'styled-components';
import GlobalStyles from 'styles/GlobalStyles';
import Header from './Header';
import Nav from './Nav';
import Email from './Email';
import Social from './Social';
import Footer from './Footer';



const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export default function Layout ({children}) {


  return (
    <>
        <GlobalStyles />
        <StyledContent>
          <Header />
          <Nav />
          <Social />
          <Email />
          <div id="content">
              {children}
            <Footer />
          </div>
        
        </StyledContent>
    </>
  )
}
