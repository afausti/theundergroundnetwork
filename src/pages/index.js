import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <h3>Monitoring gopher activity at Las Milpitas community farm</h3>

    <p>You can join us by observing and <a href="https://forms.gle/3cVEw7Dy2jsCbkiV8">collecting data about the plots using this form</a>. You can do that at any time and for as many plots as you like. The more data we collect the better!</p>
    <h3>A note about traps</h3>

    <p>Traps are very effective in killing gophers, but they are not effective in preventing gophers from making damage to our gardens. More gophers will come, and when you feel that you need to install a trap it is probably too late!</p>

    <p>The underground network project aims to find preventive solutions that are more humane and sustainable.</p>

    <p>By collecting data throughout the seasons our goal is to test the effectiveness of these solutions.</p>

    <h3>Results</h3>
    <ul>
      <li>
        <p><Link to="/fall-2021/">Fall 2021</Link></p>
      </li>
      <li>
        <p>Spring 2022</p>
      </li>
    </ul>
    <h3>Gallery</h3>
    <StaticImage
      src="../images/gopher2.jpg"
      height={200}
      quality={95}
      formats={["auto", "webp", "avif"]}
      alt="Gopher (profile)"
      style={{ marginBottom: `1.45rem` }}
    />

    <StaticImage
      src="../images/gopher.jpg"
      height={200}
      quality={95}
      formats={["auto", "webp", "avif"]}
      alt="Gopher (front)"
      style={{ marginBottom: `1.45rem` }}
    />

    <StaticImage
      src="../images/hole.jpg"
      height={200}
      quality={95}
      formats={["auto", "webp", "avif"]}
      alt="Gopher hole"
      style={{ marginBottom: `1.45rem` }}
    />

    <StaticImage
      src="../images/red_shard.jpg"
      height={200}
      quality={95}
      formats={["auto", "webp", "avif"]}
      alt="Red Shard"
      style={{ marginBottom: `1.45rem` }}
    />

    <StaticImage
      src="../images/bok_choy.jpg"
      height={200}
      quality={95}
      formats={["auto", "webp", "avif"]}
      alt="Bok Choy"
      style={{ marginBottom: `1.45rem` }}
    />

  </Layout>
)

export default IndexPage
