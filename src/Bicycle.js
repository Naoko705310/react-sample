import React from "react";

function Bicycle() {
  return (
    <section id="bicycle" className="max-w-custom mx-auto text-center mt-20 px-4 md:px-5">
      <h2 className="text-2xl font-bold inline-block border-b border-black pb-2.5 text-[32px] font-hiragino">Bicycle</h2>
      {/* カード群 */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-7.5 mt-[60px] md:mt-[74px]">
        <div>
          <img src="/images/bicycle1.jpg" alt="Bike 1" className="w-full" />
          <h3 className="font-hiragino font-bold mt-2.5">タイトルタイトル</h3>
          <p className="font-hiragino mt-2.5">テキストテキストテキスト</p>
        </div>
        <div>
          <img src="/images/bicycle2.jpg" alt="Bike 2" className="w-full" />
          <h3 className="font-hiragino font-bold mt-2.5">タイトルタイトル</h3>
          <p className="font-hiragino mt-2.5">テキストテキストテキスト</p>
        </div>
        <div>
          <img src="/images/bicycle3.jpg" alt="Bike 3" className="w-full" />
          <h3 className="font-hiragino font-bold mt-2.5">タイトルタイトル</h3>
          <p className="font-hiragino mt-2.5">テキストテキストテキスト</p>
        </div>
      </div>
    </section>
  );
}

export default Bicycle;