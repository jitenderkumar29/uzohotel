import './UzoNavbar.css';


const UzoNavbar = () => {
  return (
    <>
      <header className="uzo-header">
        <div className="header-container">
          <div className="logo">
            <h1>UZO</h1>
          </div>

          <nav className="nav-links">
            <div className="nav-item hover-effect">
              {/* <FaHotel /> */}
              <h2>Become a member</h2>
              <p>Trusted by 5000 Corporates</p>
            </div>

            <div className="nav-item hover-effect">
              <h2>Corporate Member</h2>
              {/* <p>Start earning in 30 mins</p> */}
            </div>

            <div className="nav-item hover-effect">
              <h2>List your property</h2>
              {/* <p>Start earning in 30 mins</p> */}
            </div>

            <div className="nav-item hover-effect">
              <h2>9267958302</h2>
              <p>Call us to Book now</p>
            </div>

            <div className="nav-item hover-effect">
              <h2>English ▼</h2>
            </div>

            <div className="nav-item user-profile hover-effect">
              <h2>LogIn/SignUp</h2>
            </div>
          </nav>
        </div>
      </header>
    </>
    //   <>
    //     <Navbar bg="white" expand="lg" className="uzo-header">
    //   <Container>
    //     <Navbar.Brand href="#" className="uzo-logo">UZO</Navbar.Brand>

    //     <Navbar.Toggle aria-controls="basic-navbar-nav" />

    //     <Navbar.Collapse id="basic-navbar-nav">
    //       <Nav className="ms-auto">
    //         <Nav.Link href="#" className="header-link business-link">
    //           <div className="link-title">Become a member</div>
    //           {/* <div className="link-subtitle">Trusted by 5000 Corporates</div> */}
    //         </Nav.Link>
    //         <Nav.Link href="#" className="header-link business-link">
    //           <div className="link-title">Corporate Member</div>
    //           {/* <div className="link-subtitle">Trusted by 5000 Corporates</div> */}
    //         </Nav.Link>

    //         <Nav.Link href="#" className="header-link list-property-link">
    //           <div className="link-title">List your property</div>
    //           {/* <div className="link-subtitle">Start earning in 30 mins</div> */}
    //         </Nav.Link>

    //         <Nav.Link href="#" className="header-link call-us-link">
    //           <div className="link-title">9267958302</div>
    //           <div className="link-subtitle">Call us to Book now</div>
    //         </Nav.Link>

    //         <Dropdown as={Nav.Item} className="language-dropdown">
    //           <Dropdown.Toggle as={Nav.Link} className="header-link">
    //             English ▼
    //           </Dropdown.Toggle>
    //           <Dropdown.Menu>
    //             <Dropdown.Item>English</Dropdown.Item>
    //             <Dropdown.Item>हिंदी</Dropdown.Item>
    //             {/* <Dropdown.Item>Español</Dropdown.Item> */}
    //           </Dropdown.Menu>
    //         </Dropdown>

    //         <Nav.Link href="#" className="header-link welcome-link">
    //           LogIn/SignUp
    //         </Nav.Link>
    //       </Nav>
    //     </Navbar.Collapse>
    //   </Container>
    // </Navbar>
    // </>
  )
}

export default UzoNavbar
