import Image from "next/image";
import Card from "./components/Card";

export default function Home() {
  return (
      <header className="flex flex-col justify-center items-center">
        <h1 className="font-montserrat text-4xl p-8">Blog Today</h1>
        <div className="description font-montserrat">
          <p className="text-xl">Hi, Welcome to my Blog!</p>
          <p className="text-xl">Here you will find articles about programming and technology.</p>
        </div>
        <Card />
      </header>
  );
}
