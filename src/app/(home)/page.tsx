import Advantages from "@/components/home/advantages";
import Card from "@/components/home/card";
import Contacts from "@/components/home/contacts";
import Services from "@/components/home/services";

export default function Home() {
  return (
    <div>
      <Services />
      <Card />
      <Advantages />
      <Contacts />
    </div>
  );
}
