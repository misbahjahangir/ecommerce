import React from "react";
import Image from "next/image";

function Page() {
  return (
    <div>
      <div className="h-[286] w-full bg-[#F6F5FF] px-4 sm:px-8 md:px-16 lg:px-20">
        <h2 className="text-[36px] font-bold text-[#1D3178] pt-20">
          Shop List
        </h2>
        <p className='text-[15px] pl-1 text'>Home. Pages.<span className='text-pink-500'>Shop Grid Default </span></p>
      
        </div>
       <div className="flex flex-col sm:flex-row justify-between items-center py-3 px-4 sm:px-8 md:px-16 lg:px-20">
        <div>
          <h2 className="text-lg sm:text-xl lg:text-2xl text-[#1D3178]">
            Ecommerce Accessories & Fashion Items
          </h2>
          <p className="text-sm sm:text-base lg:text-lg">
            About 9,620 results (0.62 seconds)
          </p>
        </div>
        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 mt-4 sm:mt-0">
          <div className="flex gap-4">
            <label className="flex items-center gap-2">
              <span>Per Page:</span>
              <input
                type="number"
                className="border px-2 py-1 w-20 sm:w-24 lg:w-28"
              />
            </label>
            <label className="flex items-center gap-2">
              <span>Sort By:</span>
              <select className="border px-2 py-1">
                <option>Best Match</option>
              </select>
            </label>
          </div>
          <div className="flex gap-2 sm:gap-3">
            <button className="border px-3 py-1">🔲</button>
            <button className="border px-3 py-1">☰</button>
            <input
              type="text"
              className="outline-none border px-2 py-1 w-32 sm:w-36 lg:w-48"
            />
          </div>
        </div>
      </div>
      <br></br>

      <div className="flex flex-col gap-6 px-10 md:px-16 lg:px-20 my-8 mr-10 mx-60">
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <Image
            src="/shop1.png"
            alt=""
            height={1000}
            width={1000}
            className="h-40 w-48"
          />
          <div>
            <h1 className="flex gap-3 items-center text-lg sm:text-xl lg:text-2xl">
              Accumsan tincidunt
              <div className="flex gap-1">
                <div className="h-3 w-3 bg-yellow-500 rounded-full"></div>
                <div className="h-3 w-3 bg-pink-500 rounded-full"></div>
                <div className="h-3 w-3 bg-blue-700 rounded-full"></div>
              </div>
            </h1>
            <div className="flex gap-5 items-center mt-2">
              <span className="flex gap-3 items-center text-sm sm:text-base lg:text-lg">
                <h2 className="text-[#111C85]">$26.00</h2>
                <h3 className="text-[#FF2AAA] line-through">$52.00</h3>
              </span>
              <span className="flex items-center gap-1">
                <Image
                  src="/star.png"
                  alt=""
                  width={100}
                  height={100}
                  className="h-4 w-4"
                />
                <Image
                  src="/star.png"
                  alt=""
                  width={100}
                  height={100}
                  className="h-4 w-4"
                />
                <Image
                  src="/star.png"
                  alt=""
                  width={100}
                  height={100}
                  className="h-4 w-4"
                />
                <Image
                  src="/star.png"
                  alt=""
                  width={100}
                  height={100}
                  className="h-4 w-4"
                />
                <Image
                  src="/star2.png"
                  alt=""
                  width={100}
                  height={100}
                  className="h-4 w-4"
                />
              </span>
            </div>
            <p className="text-sm sm:text-base lg:text-lg mt-2 max-w-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in
              est adipiscing in phasellus non in justo.
            </p>
            <div className="flex items-center gap-3 mt-3">
              <Image
                src="/cart.png"
                alt=""
                width={100}
                height={100}
                className="h-6 w-6"
              />
              <Image
                src="/heart.png"
                alt=""
                width={100}
                height={100}
                className="h-6 w-6"
              />
              <Image
                src="/search.png"
                alt=""
                width={100}
                height={100}
                className="h-6 w-6"
              />
            </div>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <Image
            src="/shop2.png"
            alt=""
            height={1000}
            width={1000}
            className="h-40 w-48"
          />
          <div>
            <h1 className="flex gap-3 items-center text-lg sm:text-xl lg:text-2xl">
              Accumsan tincidunt
              <div className="flex gap-1">
                <div className="h-3 w-3 bg-yellow-500 rounded-full"></div>
                <div className="h-3 w-3 bg-pink-500 rounded-full"></div>
                <div className="h-3 w-3 bg-blue-700 rounded-full"></div>
              </div>
            </h1>
            <div className="flex gap-5 items-center mt-2">
              <span className="flex gap-3 items-center text-sm sm:text-base lg:text-lg">
                <h2 className="text-[#111C85]">$26.00</h2>
                <h3 className="text-[#FF2AAA] line-through">$52.00</h3>
              </span>
              <span className="flex items-center gap-1">
                <Image
                  src="/star.png"
                  alt=""
                  width={100}
                  height={100}
                  className="h-4 w-4"
                />
                <Image
                  src="/star.png"
                  alt=""
                  width={100}
                  height={100}
                  className="h-4 w-4"
                />
                <Image
                  src="/star.png"
                  alt=""
                  width={100}
                  height={100}
                  className="h-4 w-4"
                />
                <Image
                  src="/star.png"
                  alt=""
                  width={100}
                  height={100}
                  className="h-4 w-4"
                />
                <Image
                  src="/star2.png"
                  alt=""
                  width={100}
                  height={100}
                  className="h-4 w-4"
                />
              </span>
            </div>
            <p className="text-sm sm:text-base lg:text-lg mt-2 max-w-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in
              est adipiscing in phasellus non in justo.
            </p>
            <div className="flex items-center gap-3 mt-3">
              <Image
                src="/cart.png"
                alt=""
                width={100}
                height={100}
                className="h-6 w-6"
              />
              <Image
                src="/heart.png"
                alt=""
                width={100}
                height={100}
                className="h-6 w-6"
              />
              <Image
                src="/search.png"
                alt=""
                width={100}
                height={100}
                className="h-6 w-6"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <Image
            src="/shop3.png"
            alt=""
            height={1000}
            width={1000}
            className="h-40 w-48"
          />
          <div>
            <h1 className="flex gap-3 items-center text-lg sm:text-xl lg:text-2xl">
              Accumsan tincidunt
              <div className="flex gap-1">
                <div className="h-3 w-3 bg-yellow-500 rounded-full"></div>
                <div className="h-3 w-3 bg-pink-500 rounded-full"></div>
                <div className="h-3 w-3 bg-blue-700 rounded-full"></div>
              </div>
            </h1>
            <div className="flex gap-5 items-center mt-2">
              <span className="flex gap-3 items-center text-sm sm:text-base lg:text-lg">
                <h2 className="text-[#111C85]">$26.00</h2>
                <h3 className="text-[#FF2AAA] line-through">$52.00</h3>
              </span>
              <span className="flex items-center gap-1">
                <Image
                  src="/star.png"
                  alt=""
                  width={100}
                  height={100}
                  className="h-4 w-4"
                />
                <Image
                  src="/star.png"
                  alt=""
                  width={100}
                  height={100}
                  className="h-4 w-4"
                />
                <Image
                  src="/star.png"
                  alt=""
                  width={100}
                  height={100}
                  className="h-4 w-4"
                />
                <Image
                  src="/star.png"
                  alt=""
                  width={100}
                  height={100}
                  className="h-4 w-4"
                />
                <Image
                  src="/star2.png"
                  alt=""
                  width={100}
                  height={100}
                  className="h-4 w-4"
                />
              </span>
            </div>
            <p className="text-sm sm:text-base lg:text-lg mt-2 max-w-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in
              est adipiscing in phasellus non in justo.
            </p>
            <div className="flex items-center gap-3 mt-3">
              <Image
                src="/cart.png"
                alt=""
                width={100}
                height={100}
                className="h-6 w-6"
              />
              <Image
                src="/heart.png"
                alt=""
                width={100}
                height={100}
                className="h-6 w-6"
              />
              <Image
                src="/search.png"
                alt=""
                width={100}
                height={100}
                className="h-6 w-6"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <Image
            src="/shop4.png"
            alt=""
            height={1000}
            width={1000}
            className="h-40 w-48"
          />
          <div>
            <h1 className="flex gap-3 items-center text-lg sm:text-xl lg:text-2xl">
              Accumsan tincidunt
              <div className="flex gap-1">
                <div className="h-3 w-3 bg-yellow-500 rounded-full"></div>
                <div className="h-3 w-3 bg-pink-500 rounded-full"></div>
                <div className="h-3 w-3 bg-blue-700 rounded-full"></div>
              </div>
            </h1>
            <div className="flex gap-5 items-center mt-2">
              <span className="flex gap-3 items-center text-sm sm:text-base lg:text-lg">
                <h2 className="text-[#111C85]">$26.00</h2>
                <h3 className="text-[#FF2AAA] line-through">$52.00</h3>
              </span>
              <span className="flex items-center gap-1">
                <Image
                  src="/star.png"
                  alt=""
                  width={100}
                  height={100}
                  className="h-4 w-4"
                />
                <Image
                  src="/star.png"
                  alt=""
                  width={100}
                  height={100}
                  className="h-4 w-4"
                />
                <Image
                  src="/star.png"
                  alt=""
                  width={100}
                  height={100}
                  className="h-4 w-4"
                />
                <Image
                  src="/star.png"
                  alt=""
                  width={100}
                  height={100}
                  className="h-4 w-4"
                />
                <Image
                  src="/star2.png"
                  alt=""
                  width={100}
                  height={100}
                  className="h-4 w-4"
                />
              </span>
            </div>
            <p className="text-sm sm:text-base lg:text-lg mt-2 max-w-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in
              est adipiscing in phasellus non in justo.
            </p>
            <div className="flex items-center gap-3 mt-3">
              <Image
                src="/cart.png"
                alt=""
                width={100}
                height={100}
                className="h-6 w-6"
              />
              <Image
                src="/heart.png"
                alt=""
                width={100}
                height={100}
                className="h-6 w-6"
              />
              <Image
                src="/search.png"
                alt=""
                width={100}
                height={100}
                className="h-6 w-6"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <Image
            src="/shop5.png"
            alt=""
            height={1000}
            width={1000}
            className="h-40 w-48"
          />
          <div>
            <h1 className="flex gap-3 items-center text-lg sm:text-xl lg:text-2xl">
              Accumsan tincidunt
              <div className="flex gap-1">
                <div className="h-3 w-3 bg-yellow-500 rounded-full"></div>
                <div className="h-3 w-3 bg-pink-500 rounded-full"></div>
                <div className="h-3 w-3 bg-blue-700 rounded-full"></div>
              </div>
            </h1>
            <div className="flex gap-5 items-center mt-2">
              <span className="flex gap-3 items-center text-sm sm:text-base lg:text-lg">
                <h2 className="text-[#111C85]">$26.00</h2>
                <h3 className="text-[#FF2AAA] line-through">$52.00</h3>
              </span>
              <span className="flex items-center gap-1">
                <Image
                  src="/star.png"
                  alt=""
                  width={100}
                  height={100}
                  className="h-4 w-4"
                />
                <Image
                  src="/star.png"
                  alt=""
                  width={100}
                  height={100}
                  className="h-4 w-4"
                />
                <Image
                  src="/star.svg"
                  alt=""
                  width={100}
                  height={100}
                  className="h-4 w-4"
                />
                <Image
                  src="/star.png"
                  alt=""
                  width={100}
                  height={100}
                  className="h-4 w-4"
                />
                <Image
                  src="/star2.png"
                  alt=""
                  width={100}
                  height={100}
                  className="h-4 w-4"
                />
              </span>
            </div>
            <p className="text-sm sm:text-base lg:text-lg mt-2 max-w-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in
              est adipiscing in phasellus non in justo.
            </p>
            <div className="flex items-center gap-3 mt-3">
              <Image
                src="/cart.png"
                alt=""
                width={100}
                height={100}
                className="h-6 w-6"
              />
              <Image
                src="/heart.png"
                alt=""
                width={100}
                height={100}
                className="h-6 w-6"
              />
              <Image
                src="/search.png"
                alt=""
                width={100}
                height={100}
                className="h-6 w-6"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <Image
            src="/shop6.png"
            alt=""
            height={1000}
            width={1000}
            className="h-40 w-48"
          />
          <div>
            <h1 className="flex gap-3 items-center text-lg sm:text-xl lg:text-2xl">
              Accumsan tincidunt
              <div className="flex gap-1">
                <div className="h-3 w-3 bg-yellow-500 rounded-full"></div>
                <div className="h-3 w-3 bg-pink-500 rounded-full"></div>
                <div className="h-3 w-3 bg-blue-700 rounded-full"></div>
              </div>
            </h1>
            <div className="flex gap-5 items-center mt-2">
              <span className="flex gap-3 items-center text-sm sm:text-base lg:text-lg">
                <h2 className="text-[#111C85]">$26.00</h2>
                <h3 className="text-[#FF2AAA] line-through">$52.00</h3>
              </span>
              <span className="flex items-center gap-1">
                <Image
                  src="/star.png"
                  alt=""
                  width={100}
                  height={100}
                  className="h-4 w-4"
                />
                <Image
                  src="/star.png"
                  alt=""
                  width={100}
                  height={100}
                  className="h-4 w-4"
                />
                <Image
                  src="/star.png"
                  alt=""
                  width={100}
                  height={100}
                  className="h-4 w-4"
                />
                <Image
                  src="/star.png"
                  alt=""
                  width={100}
                  height={100}
                  className="h-4 w-4"
                />
                <Image
                  src="/star2.png"
                  alt=""
                  width={100}
                  height={100}
                  className="h-4 w-4"
                />
              </span>
            </div>
            <p className="text-sm sm:text-base lg:text-lg mt-2 max-w-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in
              est adipiscing in phasellus non in justo.
            </p>
            <div className="flex items-center gap-3 mt-3">
              <Image
                src="/cart.png"
                alt=""
                width={100}
                height={100}
                className="h-6 w-6"
              />
              <Image
                src="/heart.png"
                alt=""
                width={100}
                height={100}
                className="h-6 w-6"
              />
              <Image
                src="/search.png"
                alt=""
                width={100}
                height={100}
                className="h-6 w-6"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <Image
            src="/shop7.png"
            alt=""
            height={1000}
            width={1000}
            className="h-40 w-48"
          />
          <div>
            <h1 className="flex gap-3 items-center text-lg sm:text-xl lg:text-2xl">
              Accumsan tincidunt
              <div className="flex gap-1">
                <div className="h-3 w-3 bg-yellow-500 rounded-full"></div>
                <div className="h-3 w-3 bg-pink-500 rounded-full"></div>
                <div className="h-3 w-3 bg-blue-700 rounded-full"></div>
              </div>
            </h1>
            <div className="flex gap-5 items-center mt-2">
              <span className="flex gap-3 items-center text-sm sm:text-base lg:text-lg">
                <h2 className="text-[#111C85]">$26.00</h2>
                <h3 className="text-[#FF2AAA] line-through">$52.00</h3>
              </span>
              <span className="flex items-center gap-1">
                <Image
                  src="/star.png"
                  alt=""
                  width={100}
                  height={100}
                  className="h-4 w-4"
                />
                <Image
                  src="/star.png"
                  alt=""
                  width={100}
                  height={100}
                  className="h-4 w-4"
                />
                <Image
                  src="/star.png"
                  alt=""
                  width={100}
                  height={100}
                  className="h-4 w-4"
                />
                <Image
                  src="/star.png"
                  alt=""
                  width={100}
                  height={100}
                  className="h-4 w-4"
                />
                <Image
                  src="/star2.png"
                  alt=""
                  width={100}
                  height={100}
                  className="h-4 w-4"
                />
              </span>
            </div>
            <p className="text-sm sm:text-base lg:text-lg mt-2 max-w-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in
              est adipiscing in phasellus non in justo.
            </p>
            <div className="flex items-center gap-3 mt-3">
              <Image
                src="/cart.png"
                alt=""
                width={100}
                height={100}
                className="h-6 w-6"
              />
              <Image
                src="/heart.png"
                alt=""
                width={100}
                height={100}
                className="h-6 w-6"
              />
              <Image
                src="/search.png"
                alt=""
                width={100}
                height={100}
                className="h-6 w-6"
              />
            </div>
           
        </div>
        </div>

          </div>
        
          </div>
      
        
  );
}
 export default Page;