import React from "react"
import styled from "@emotion/styled"
import { Link } from "gatsby"

const Root = styled.div`
  font-family: sans-serif;
`

const LinkGrid = styled.div`
  padding: 30px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  @media only screen and (min-width: 700px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`

const BottomSection = styled.div`
  margin: auto;
  padding: 70px 20px;
  background: #f5f6f8;
  font-family: sans-serif;
  color: #00324d;
  font-size: 14px;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media only screen and (min-width: 700px) {
    justify-content: space-between;
    flex-direction: row-reverse;
    align-items: flex-start;
  }
`
const AddressSection = styled.div`
  min-width: 220px;
`

const PaidForSection = styled.div``

const BoxedSpan = styled.span`
  display: inline-block;
  margin: auto;
  padding: 10px 15px;
  border: solid 1px black;
  text-align: center;
`

const RotatedSpan = styled.span`
  display: block;
  margin-top: 10px;
  margin-bottom: 20px;
  font-size: 18px;
  text-align: center;
  transform: rotate(-2deg);
  color: #005f92;
`

export default () => {
  return (
    <Root>
      <Links />
      <BottomSection>
        <PaidForSection>
          <BoxedSpan>PAID FOR BY BERNIE 2020</BoxedSpan>
          <RotatedSpan>(not the billionaires)</RotatedSpan>
        </PaidForSection>

        <AddressSection>
          Bernie 2020
          <br />
          PO Box 391
          <br />
          Burlington, VT 0f402
          <br />
          <br />© Bernie 2020
        </AddressSection>
      </BottomSection>
    </Root>
  )
}

const links = [
  {
    title: "Learn",
    links: [
      {
        text: "Meet Bernie",
        internal: "#",
      },
      {
        text: "Issues",
        internal: "#",
      },
      {
        text: "Hear The Bern",
        internal: "#",
      },
      {
        text: "En Espanol",
        internal: "#",
      },
    ],
  },
  {
    title: "Organize",
    links: [
      {
        text: "Volunteer",
        internal: "#",
      },
      {
        text: "Contribute",
        internal: "#",
      },
      {
        text: "Events",
        internal: "#",
      },
      {
        text: "Store",
        internal: "#",
      },
    ],
  },
  {
    title: "Social Media",
    links: [
      {
        text: "Facebook",
        external: "https://www.facebook.com/berniesanders",
      },
      {
        text: "Twitter",
        external: "https://twitter.com/berniesanders",
      },
      {
        text: "Youtube",
        external: "https://www.youtube.com/channel/UCH1dpzjCEiGAt8CXkryhkZg",
      },
      {
        text: "Instagram",
        external: "https://instagram.com/berniesanders/",
      },
    ],
  },
  {
    title: "About",
    links: [
      {
        text: "Jobs",
        internal: "#",
      },
      {
        text: "Accessibility",
        internal: "#",
      },
      {
        text: "Privacy Policy",
        internal: "#",
      },
      {
        text: "Taxes",
        internal: "#",
      },
      {
        text: "Diversity",
        internal: "#",
      },
      {
        text: "Contact Us",
        internal: "#",
      },
    ],
  },
]

const Links = () => {
  const data = links // inject via graphql eventually

  return (
    <LinkGrid>
      {data.map(section => {
        return <LinkList content={section} />
      })}
    </LinkGrid>
  )
}

const NoBulletUnorderedList = styled.ul`
  list-style: none;
`

const LinkListTitle = styled.h3`
  text-transform: uppercase;
  font-size: 16px;
  color: #005f92;
`

const LinkListItem = styled.li`
  margin: 9px 0px;
  a,
  link {
    color: #2b9cd9;
    font-size: 14px;
    text-decoration: none;
  }
`

const LinkList = props => {
  const content = props.content
  return (
    <NoBulletUnorderedList>
      <li>
        <LinkListTitle>{content.title}</LinkListTitle>
      </li>
      {content.links.map(link => {
        return (
          <LinkListItem>
            {link.external ? (
              <a href={link.external}>{link.text}</a>
            ) : (
              <Link to={link.internal}>{link.text}</Link>
            )}
          </LinkListItem>
        )
      })}
    </NoBulletUnorderedList>
  )
}
