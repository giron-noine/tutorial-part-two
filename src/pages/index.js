import React from "react"
import Layout from "../components/layout"
/*import { Link } from "gatsby"*/
import Header from "../components/header"

export default function Home() {
  return (
    <Header>
    <Layout>
      <h1>Amazing Pandas Rating Things</h1>
      <div>
      <img
          src="https://2.bp.blogspot.com/-BMP2l6Hwvp4/TiAxeGx4CTI/AAAAAAAAD_M/XlC_mY3SoEw/s1600/panda-group-eating-bamboo.jpg"
          alt="Group of pandas eating bamboo"
        />
      </div>
    </Layout>
    </Header>
  );
}
