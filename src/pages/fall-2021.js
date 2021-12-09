import * as React from "react"
import { Link } from "gatsby"

import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"

const SecondPage = () => (
  <Layout>
    <h3>Fall 2021</h3>

    <p>During this season, as soon as our plants started to grow, we noticed Gopher activity early November at Jojobas (plots 16, 20, 21, and 29) and at Jaguars (plot 45) neighborhoods.</p>

    <p>We are testing a <a href="https://www.amazon.com/gp/product/B08KGZSJQW/ref=ppx_yo_dt_b_asin_title_o01_s00?ie=UTF8&psc=1">sonic repeller</a> initially installed at Jojobas (plots 21 and 24) on November 23.</p>

    <p>On November 24 we registered gopher activity on new plots: Jojobas (plot 28), Sandias (plots 56 and 59), Cukes (plots 70, 71, 72) and on The OGs (plot 86) a total of 12 plots.</p>

    <p>On December 04 we registered gophers activity on the Comunity plots, Jojobas (with less activity this time) and increased activity on Sandias (plots 52, 54, 56, and 59) and Cukes (plots 67, 70, 71, 72, and 73) a total of 14 plots. We installed a third sonic repeller and decided to place them on the Community plots, Jojobas and Cukes.</p>

    <p>Chard, Bok Choy, Kale, Beet, and Broccoli are the plants preferred by the gophers.</p>

    <p>Based on the holes fond outside the plots, we think that gophers live under the trees during the summer, where they have their tunnel systems for shelter, and they build new systems underground during the winter to collect food from the gardens.</p>

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
    Gopher activity and location of the sonic repellers as of December 04.
    <StaticImage
      src="../images/map-dec04.png"
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
