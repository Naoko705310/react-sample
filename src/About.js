import React from "react";

function About() {
  return (
    <section id="about" className="max-w-custom mx-auto text-center mt-20 px-4 md:px-5">
      <h2 className="text-2xl font-bold inline-block border-b border-black pb-2.5 text-[32px] font-hiragino">About</h2>
      <div className="flex flex-col md:flex-row items-center justify-center mt-70 gap-2.5 md:gap-7.5">
        <div className="rounded-full w-[100px] h-[100px] 2xl:w-[200px] 2xl:h-[200px]">
          <img src="/images/about.jpg" alt="Profile" className="rounded-full w-full h-full" />
        </div>
        <div className="text-left">
          <h3 className="font-hiragino text-lg font-bold">KAKERU MIYACHI</h3>
          <p className="font-hiragino mt-2">テキストテキストテキストテキストテキストテキスト</p>
          <p className="font-hiragino mt-2">テキストテキストテキストテキストテキストテキスト</p>
          <p className="font-hiragino mt-2">テキストテキストテキストテキストテキストテキスト</p>
        </div>
      </div>
    </section>
  );
}

export default About;