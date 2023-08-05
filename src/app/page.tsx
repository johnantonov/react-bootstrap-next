import { AboutUs } from "./components/sections/AboutUs/AboutUs";
import { Announce } from "./components/sections/Announce/Announce";
import Hero from "./components/sections/Hero/Hero";
import { HowWeWork } from "./components/sections/HowWeWork/HowWeWork";
import { PowerIsland } from "./components/sections/PowerIsland/PowerIsland";
import { Read } from "./components/sections/Read/Read";
import { Testimonials } from "./components/sections/Testimonials/Testimonials";
import { GetJournal } from "./components/sections/sectionGet/GetJournal";

export default function Home() {
  return (
    <main>
      <Hero />
      <AboutUs />
      <PowerIsland />
      <Announce />
      <HowWeWork />
      <Read />
      <Testimonials />
      <GetJournal />
    </main>
  )
}