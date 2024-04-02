import Image from "next/image";

export default function Home() {
  return (
    <header className="flex justify-center">
      <h1 className="font-montserrat">Blog Today</h1>
      <div className="description font-montserrat">
        <p>Hi, Welcome to my Blog!</p>
        <p>Here you will find articles about programming and technology.</p>
      </div>
    </header>
  );
}
