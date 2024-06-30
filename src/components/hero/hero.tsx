import Image from "next/image";
import { Button } from "../ui";

export const Hero = () => {
  return (
    <section className="py-8">
      <article className="flex flex-wrap justify-between gap-y-8">
        <div className="overflow-hidden rounded-lg lg:order-2 lg:basis-[45%]">
          <Image
            alt="hero doctor image"
            width={800}
            height={800}
            src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=2370&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
        </div>
        <div className=" lg:basis-[55%] self-center">
          <h2 className="text-3xl font-bold sm:text-4xl">Grow your audience</h2>

          <p className="mt-4 text-gray-600 text-balance">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut qui hic atque tenetur quis
            eius quos ea neque sunt, accusantium soluta minus veniam tempora deserunt? Molestiae eius
            quidem quam repellat.
          </p>

          <Button className="mt-8">Get Started</Button>
        </div>
      </article>
    </section>
  )
};