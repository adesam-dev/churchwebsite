import Hero from "../components/Hero";
import EventsCard from "../components/EventsCard";
import SermonCard from "../components/SermonCard";
import Sermons from "./Sermons";

export default function Home() {
  return (
    <>
      <Hero />
      <div className="content">
        <EventsCard />
        <SermonCard />
        <Sermons />
      </div>
    </>
  );
}
