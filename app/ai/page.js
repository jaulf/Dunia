"use client";
import Link from "next/link";
import Image from "next/image";
// Images
import star from "@/public/images/ai/star.svg";
import logo from "@/public/images/ai/logo.png";
import send from "@/public/images/ai/send.svg";
import plus from "@/public/images/ai/plus.svg";
import clock from "@/public/images/ai/clock.svg";
import peep from "@/public/images/ai/chat-peep.png";
import ai from "@/public/images/ai/chat-ai.png";

export default function DuniaAi() {
  return (
    <>
      <section className="bg-[#090F09] relative setbody">
        <Image
          fill
          sizes="100vw"
          className="w-full h-auto object-cover object-center"
          src={star}
          alt="Starry Background"
        />
        <div>
          <div className="relative ai px-6 lg:px-0">
            <h1>Dunia.ai</h1>

            <div className="bg-[#0B130B] max-w-[770px] mt-8 mb-12 lg:mt-11 lg:mb-20 rounded-[20px] w-full flex flex-col ">
              <div className="atop1 w-full flex justify-end items-end py-6 pr-7 border-b border-[#111D11]">
                <div class="toTheRight self-end inline-flex gap-2">
                  <div className="p-3 bg-[#111D11] rounded-[20px] inline-block cursor-pointer hover:opacity-80">
                    <Image src={clock} alt="clock" />
                  </div>
                  <div className="p-3 bg-[#111D11] rounded-[20px] inline-block cursor-pointer hover:opacity-80">
                    <Image src={plus} alt="plus" />
                  </div>
                </div>
              </div>

              <div className="h-[466px] overflow-auto pb-4">
                <div class="chat-cont">
                  <div
                    id="chat-peep"
                    className="flex items-start justify-start gap-4"
                  >
                    <div className="shrink-0">
                      <Image className="w-4 h-4" src={peep} alt="user memoji" />
                    </div>
                    <div className="chat-peep">
                      <h4>YOU</h4>
                      <p>What is climate education?</p>
                    </div>
                    <div></div>
                  </div>
                  <div
                    id="chat-ai"
                    className="flex items-start justify-start gap-4"
                  >
                    <div className="shrink-0">
                      <Image className="w-4 h-4" src={ai} alt="Dunia" />
                    </div>
                    <div className="chat-ai">
                      <h4>Dunia</h4>
                      <p>
                        Climate education refers to the process of teaching
                        individuals about climate science, environmental issues,
                        and the impacts of human activities on the planet&apos;s
                        climate systems. It aims to raise awareness, promote
                        understanding, and encourage sustainable actions to
                        mitigate and adapt to climate change. This education can
                        occur at various levels, from schools and universities
                        to community programs and online resources.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex gap-2 px-5 pt-4 pb-8">
                <div className="input-cont">
                  <input
                    className="ai-input"
                    type="text"
                    placeholder="What would you like to know?"
                  />
                </div>

                <div class="bg-[#009F00] shrink-0 flex justify-center items-center h-12 w-12 lg:w-auto lg:h-auto lg:py-3 cursor-pointer lg:px-6 rounded-full hover:opacity-80">
                  <Image
                    className="shrink-0 w-5 h-5 lg:w-auto lg:h-auto"
                    src={send}
                    alt="send"
                  />
                </div>
              </div>
            </div>

            <Link href="/" className="block">
              <article className="footer text-center">
                <p>powered by</p>
                <Image
                  className="w-[100px] h-auto shrink-0"
                  src={logo}
                  alt="Dunia Logo"
                />
              </article>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
