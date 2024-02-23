import SectionTop from "./components/sections/SectionTop";
import SectionCurrentlyWorkingOn from "./components/sections/SectionCurrentlyWorkingOn";
import SectionFooter from "./components/sections/SectionFooter";


export default function Home() {
  return (
    <>

      <section>
        <SectionTop />
      </section>

      <main>
        <SectionCurrentlyWorkingOn />
      </main>

      <footer>
        <SectionFooter />
      </footer>

    </>
  );
}
