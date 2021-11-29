import * as React from "react"
import { Link } from "gatsby"

import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"

const SecondPage = () => (
  <Layout>
    <h3>Fall 2021</h3>

    <p>During this season as soon as our plants started to grow, we noticed Gopher activity on November 20 at the Jojobas and Jaguars neighborhoods, on plots 16, 20, 21, 29 and 45.</p>

    <p>On November 24 gopher activity was reported on a new plot on Jojobas (plot 28), Sandias (plots 56 and 59), Cukes (plots 70, 71, 72) and on The OGs (plot 86).</p>

    <p>We are testing a <a href="https://www.amazon.com/gp/product/B08KGZSJQW/ref=ppx_yo_dt_b_asin_title_o01_s00?ie=UTF8&psc=1">solar sonic repeller</a> that vibrates at 400Hz for 3 seconds every 20 seconds. Two of these repllers were initially installed at the Jojobas neighborhood on November 23 on plots 21 and 24.</p>

    <h3>Gopher activity</h3>

    Gopher activity and location of the sonic repellers as of November 24.

    <StaticImage
      src="../images/map-nov24.png"
      width={800}
      quality={95}
      formats={["auto", "webp", "avif"]}
      alt="Gopher activity"
      style={{ marginBottom: `1.45rem` }}
    />
    <br/>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
