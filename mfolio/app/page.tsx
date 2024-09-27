import Loader from "./components/Loader";
import Image from "next/image";
import ProfilePicture from "./assets/KameHouse.jpg";

export default function Home() {
  return (
    <div className="bg-stone-800 m-0 p-0 w-screen h-screen">
      <div className="flex justify-center items-center w-full h-full">
        <Image src={ProfilePicture} alt="Photos" width={500} height={500} />
      </div>
      <Loader />
    </div>
  );
}
