import Hero from "@/components/hero";
import PageTransition from "@/components/PageTransition";


const Home = () => {
  return (
    <>
    <PageTransition>
      <div>
        <Hero/>
      </div>
    </PageTransition>
    </>
  );
};

export default Home;
