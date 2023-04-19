import React from "react";
import CarouselMovie from "../../Component/CarouselMovie/CarouselMovie";
import TabsMovie from "../TabsMovie/TabsMovie";
import Footer from "../../Component/Footer/Footer";
import ListMovie from "../../Component/ListMovie/ListMovie";

export default function HomePage() {
  return (
    <div>
      <CarouselMovie />
      <ListMovie />
      <TabsMovie />
      <Footer />
    </div>
  );
}
