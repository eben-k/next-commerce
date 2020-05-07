import Header from "../components/Header";
import Footer from "../components/Footer";
import ProductList from "../components/ProductList";
import { IProduct } from "../components/Product";

import Head from "next/head";
import { NextPage } from "next";

// import "../styles.scss";

interface IIndexProps {
  products: IProduct[];
}

const Index: NextPage<IIndexProps> = (props: IIndexProps) => {
  return (
    <div className="app">
      <Head>
        Head>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.2/jquery.min.js"></script>
        <script
          src="https://cdn.snipcart.com/scripts/2.0/snipcart.js"
          data-api-key="ZWNkMjNhMzYtZjVlYi00MTJkLWIxOTctOWI2M2IzZDFkOTRlNjM3MjQ0NDkzNjg4ODM2NDE2
"
          id="snipcart"
        ></script>
        <link
          href="https://cdn.snipcart.com/themes/2.0/base/snipcart.min.css"
          rel="stylesheet"
          type="text/css"
        />
      </Head>
      <Header />
      <main>
        <ProductList products={props.products} />
      </main>
      <Footer />
    </div>
  );
};

Index.getInitialProps = async ({ req }) => {
  return {
    products: [
      {
        id: "nextjs_halfmoon",
        name: "Halfmoon Betta",
        price: 25.0,
        image: "../static/halfmoon.jpg",
        description:
          "The Halfmoon betta is arguably one of the prettiest betta species. It is recognized by its large tail that can flare up to 180 degrees.",
      } as IProduct,
    ],
  };
};

export default Index;
