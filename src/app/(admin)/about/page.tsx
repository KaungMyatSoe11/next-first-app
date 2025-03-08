import Image from "next/image";
import React from "react";
import image from "../../../assets/images/Frame 22-2.png";

const AboutPage = () => {
  return (
    <div className="h-[80vh] flex justify-center items-center">
      <h1 className="text-2xl font-bold">About Page</h1>
      <Image
        src={
          "https://media.daily.dev/image/upload/f_auto,q_auto/v1/posts/fba03173857b9ecad8d0ec6b27ca96d8?_a=AQAEuj9"
        }
        alt="about"
        width={2000}
        height={2000}
        placeholder="blur"
        blurDataURL="data:placeholder/blur"
        className="h-[500px] w-[500px]"
      />
    </div>
  );
};

export default AboutPage;
