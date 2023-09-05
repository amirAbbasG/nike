import {
  Hero,
  CustomerReviews,
  Footer,
  PopularProducts,
  Services,
  SpecialOffers,
  Subscribe,
  SuperQuality,
} from "./sections";
import Nav from "./components/Nav";

function App() {
  return (
    <main>
      <Nav />
      <section className="xl:padding-l wide:padding-r padding-b">
        <Hero />
      </section>
      <section className="padding">
        <PopularProducts />
      </section>
      <section className="padding">
        <SuperQuality />
      </section>
      <section className="padding-x py-10">
        <Services />
      </section>
      <section className="padding">
        <SpecialOffers />
      </section>
      <section className="padding bg-pale-blue">
        <CustomerReviews />
      </section>
      <section className="padding-x w-full py-16 sm:py-32">
        <Subscribe />
      </section>
      <section className="padding-x padding-t pb-6 bg-black">
        <Footer />
      </section>
    </main>
  );
}

export default App;
