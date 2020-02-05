import React from "react"
import Layout from "../components/layout"
import styled from "@emotion/styled"

const Root = styled.div`
  padding: 30px;
  color: #00324d;
  font-family: sans-serif;
  max-width: 800px;
  margin: 0 auto;
`

const VideoContainer = styled.div`
  margin: auto;
`

export default () => {
  return (
    <Layout>
      <Root>
        <VideoContainer>
          <iframe
            width="346"
            height="220"
            src="https://www.youtube.com/embed/2O-iLk1G_ng"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </VideoContainer>
        <h1>Meet Bernie</h1>
        <p>
          Bernie Sanders is a U.S. Senator from Vermont and candidate to become
          the next President of the United States. In 2006, he was elected to
          the U.S. Senate after 16 years as Vermont’s sole congressman in the
          House of Representatives. Bernie is now serving his third term in the
          U.S. Senate after winning re-election in 2018 with 67 percent of the
          vote. Born in Brooklyn, New York, he attended James Madison High
          School, Brooklyn College, and the University of Chicago. After
          graduating, he moved to Vermont where he worked as a carpenter and
          documentary filmmaker. In 1981, he was elected as mayor of Burlington,
          the state’s largest city, by a mere 10 votes.
        </p>
        <p>
          As mayor, Bernie’s leadership helped transform Burlington into one of
          the most exciting and livable small cities in America. Under his
          administration, the city made major strides in affordable housing,
          progressive taxation, environmental protection, child care, women’s
          rights, youth programs and the arts.
        </p>
        <p>
          In Congress, Bernie has fought tirelessly for working families,
          focusing on the shrinking middle class and growing gap between the
          rich and everyone else. Bernie has been called a “practical and
          successful legislator” and he was dubbed the “amendment king” in the
          House of Representatives for passing more amendments than any other
          member of Congress. As chairman of the Senate Committee on Veterans’
          Affairs, Bernie worked across the aisle to “bridge Washington’s toxic
          partisan divide and cut one of the most significant deals in years.”
          In 2015, Democratic leadership tapped Bernie to serve as the caucus’
          ranking member on the Senate Budget Committee.
        </p>
        <p>
          Bernie lives in Burlington, Vermont with his wife Jane. He has four
          children and seven grandchildren.
        </p>
      </Root>
    </Layout>
  )
}
