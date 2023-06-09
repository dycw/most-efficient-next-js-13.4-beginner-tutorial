"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Nav, Container, Navbar, NavDropdown } from "react-bootstrap";

export default function NavBar() {
  const pathname = usePathname();

  return (
    <Navbar
      bg="primary"
      variant="dark"
      sticky="top"
      expand="sm"
      collapseOnSelect
    >
      <Container>
        <Navbar.Brand as={Link} href="/">
          NextJS 13.4 Image Gallery
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="main-navbar" />
        <Navbar.Collapse id="main-navbar">
          <Nav>
            <Nav.Link active={pathname === "/static"} href="/static" as={Link}>
              Static
            </Nav.Link>
            <Nav.Link
              active={pathname === "/dynamic"}
              href="/dynamic"
              as={Link}
            >
              Dynamic
            </Nav.Link>
            <Nav.Link active={pathname === "/isr"} href="/isr" as={Link}>
              ISR
            </Nav.Link>
            <NavDropdown title="Topics" id="topics-dropdown">
              <NavDropdown.Item as={Link} href="/topics/health">
                Health
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} href="/topics/fitness">
                Fitness
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} href="/topics/coding">
                Coding
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link active={pathname === "/search"} href="/search" as={Link}>
              Search
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
