import React from "react";

const Section = () => {
  return (
    <div>
      <section className=" px-20 ">
        <div className="grid grid-cols-2 mb-10">
          <div className=" w-full">
            <img
              src="https://th.bing.com/th/id/OIP.wTtSygxTVhznbtSI_4J-twHaEo?w=277&h=180&c=7&r=0&o=5&cb=10&dpr=1.3&pid=1.7"
              alt=""
              className=" w-11/12 object-cover"
            />
          </div>
          <div>
            <h2 className=" text-2xl font-bold uppercase">
              Virat Kohli-The inspiration to many
            </h2>
            <p className=" text-xl text-gray-800 mt-4">
              He is a right-handed batsman and an occasional medium-fast bowler.
              He currently represents Royal Challengers Bangalore in the IPL and
              Delhi in domestic cricket. Kohli is widely regarded as one of the
              greatest batsmen in the history of cricket and the best of the
              21st century.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Section;
