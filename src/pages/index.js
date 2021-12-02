import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="The underground network" />
    <h3>Monitoring gopher activity at Las Milpitas community farm</h3>

    <p>Gophers are cute animals, but they have a destructive appetite.
    In a matter of days, they can create a network of tunnels under the farm to collect food from our gardens.</p>

    <p>Traps are a reactive solution, they are effective in reducing the gopher population, but they are not effective in preventing them from making damage to our gardens. If there's food new gophers will come. </p>

    <p>The underground network aims to find preventive solutions and test their effectiveness by collecting data about the gopher's activity at Las Milpitas community farm.</p>

    <p>You can join us by observing our gardens and <a href="https://forms.gle/3cVEw7Dy2jsCbkiV8">filling this form</a> at any time. The more data we collect the better!</p>


    <h3>Results</h3>
    <ul>
      <li>
        <p><Link to="/fall-2021/">Fall 2021</Link></p>
      </li>
      <li>
        <p>Spring 2022</p>
      </li>
    </ul>

    <h3>Resources</h3>


    <iframe height="281" width="500" src="https://www.youtube.com/embed/GVlyY5V6lAQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    <ul>
      <li>
      <p><Link to="https://www.havahart.com/gopher-facts">Gopher facts</Link></p>
      </li>
      <li>
        <p><Link to="https://smithspestmanagement.com/blog/post/how-to-get-rid-of-gophers-in-your-yard-garden/">How to get rid of gophers in your garden</Link></p>
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

  <h3>Join us</h3>

  Join the <Link to="https://groups.google.com/g/theundergroundnetworkcontact">The underground network</Link> and share your ideas.

  </Layout>
)

export default IndexPage
