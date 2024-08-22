export const runtime = "edge";

import Link from "next/link";
import { ArrowRightIcon } from '@radix-ui/react-icons';
import { Card, CardHeader, CardBody, CardFooter, Image, Button } from "@nextui-org/react";

export default function Home() {
  return (
    <main className="flex flex-col">
      <section className="h-screen">
        {/* <Image src="https://cdn.pixabay.com/photo/2018/09/20/02/39/kitchen-3689917_1280.jpg" className={"-z-10 w-full h-screen object-center brightness-75"} alt="Kitchen Design" width={1000} /> */}
        <Image
          radius="none"
          width={10000}
          alt="Kitchen Design"
          src="https://cdn.pixabay.com/photo/2018/09/20/02/39/kitchen-3689917_1280.jpg"
          className={"absolute w-full h-screen object-center brightness-75"}
        />
        <div className="relative z-10 w-full h-screen text-7xl text-center content-center text-white">
          <h1 className="font-bold text-7xl">
            Innovative Kitchen <br />Design Solutions
          </h1>
          <h2 className="text-2xl mt-6">
            Transforming Kitchens With Expertise
          </h2>
          <Button radius="none" variant="ghost" className="bg-white text-black" >
            <Link href="https://santiago-lara.dev" target="_blank">Check Out</Link>
          </Button>
        </div>
      </section>

      <section className=" bg-white text-[#23262f] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-center content-center mx-36 gap-6 my-16">
        <div className="text-xl w-full border-8 border-[#cfa164]/40 content-center text-[#cfa164]">
          <div className="m-5">
            <h2 className="text-9xl m">15+</h2>
            <h3 className="text-[#23262f]">Years of experience</h3>
          </div>
        </div>
        <div className="text-[#23262f] text-xl w-full content-center text-left">
          <h2 className="text-[#cfa164]">About Us</h2>
          <h3 className="text-4xl text-[#23262f]">Masterful designers for creative solutions</h3>
        </div>
        <div className="text-[#23262f]/60 text-xl col-span1 md:col-span-2 lg:col-span-1 w-full object-center content-center text-left">
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi totam quia nesciunt cumque ullam at!</p>
          <Link href="https://santiago-lara.dev" target="_blank">
            <Button radius="none" className="my-5 gap-2 bg-black text-white" endContent={
              <ArrowRightIcon />
            }>
              Check Out
            </Button>
          </Link>
        </div>
      </section>

      <section className="text-white text-2xl font-medium text-center content-center mx-12 gap-6 mb-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        <Card className="h-[450px] group">
          <CardHeader className="absolute z-10 top-1 flex-col !items-start">
            <p className="text-tiny text-white/60 uppercase font-bold">Check Out</p>
            <h4 className="text-white font-medium text-large">Eternal Collection</h4>
          </CardHeader>
          <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between backdrop-blur-3xl">
            <div>
              <p className="text-white text-sm">Now Available.</p>
            </div>
            <Button className="text-tiny" color="secondary" radius="full" size="sm" href="#">
              View Collection
            </Button>
          </CardFooter>

          <Image
            removeWrapper
            alt="Card background"
            className="z-0 w-full h-full object-cover group-hover:brightness-75 transition-all ease-in-out hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer brightness-90"
            src="https://cdn.pixabay.com/photo/2018/09/20/02/39/kitchen-3689917_1280.jpg"
          />
        </Card>

        <Card className="h-[450px] group">
          <CardHeader className="absolute z-10 top-1 flex-col !items-start">
            <p className="text-tiny text-white/60 uppercase font-bold">Check Out</p>
            <h4 className="text-white font-medium text-large">Vintage Collection</h4>
          </CardHeader>
          <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between backdrop-blur-3xl">
            <div>
              <p className="text-white text-sm">Now Available.</p>
            </div>
            <Button className="text-tiny" color="secondary" radius="full" size="sm" href="#">
              View Collection
            </Button>
          </CardFooter>
          <Image
            removeWrapper
            alt="Card background"
            className="z-0 w-full h-full object-cover group-hover:brightness-75 transition-all ease-in-out hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer brightness-90"
            src="https://cdn.pixabay.com/photo/2017/07/09/03/19/home-2486092_1280.jpg"
          />
        </Card>

        <Card className="h-[450px] group">
          <CardHeader className="absolute z-10 top-1 flex-col !items-start">
            <p className="text-tiny text-white/60 uppercase font-bold">Check Out</p>
            <h4 className="text-white font-medium text-large">Antique Collection</h4>
          </CardHeader>
          <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between backdrop-blur-3xl">
            <div>
              <p className="text-white text-sm">Now Available.</p>
            </div>
            <Button className="text-tiny" color="secondary" radius="full" size="sm" href="#">
              View Collection
            </Button>
          </CardFooter>
          <Image
            removeWrapper
            alt="Card background"
            className="z-0 w-full h-full object-cover group-hover:brightness-75 transition-all ease-in-out hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer brightness-90"
            src="https://cdn.pixabay.com/photo/2019/12/01/16/57/kitchen-4665913_1280.jpg"
          />
        </Card>

        <Card className="h-[450px] group">
          <CardHeader className="absolute z-10 top-1 flex-col !items-start">
            <p className="text-tiny text-white/60 uppercase font-bold">Check Out</p>
            <h4 className="text-white font-medium text-large">Historic Collection</h4>
          </CardHeader>
          <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between backdrop-blur-3xl">
            <div>
              <p className="text-white text-sm">Now Available.</p>
            </div>
            <Button className="text-tiny" color="secondary" radius="full" size="sm" href="#">
              View Collection
            </Button>
          </CardFooter>
          <Image
            removeWrapper
            alt="Card background"
            className="z-0 w-full h-full object-cover group-hover:brightness-75 transition-all ease-in-out hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer brightness-90"
            src="https://cdn.pixabay.com/photo/2017/08/01/12/43/kitchen-2565105_1280.jpg"
          />
        </Card>


      </section>

    </main>
  );
}
