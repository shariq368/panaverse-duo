import Button from "../shared/Button"
import Image from "next/image"
import Link from "next/link"
import con from '../../../../public/assets/image/Content3.png'
import Wrapper from "../shared/Wrapper"

const Content = () => {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <Wrapper>
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <Image
              className="object-cover object-center rounded mx-auto w-[25rem]"
              width={500}
              height={500}
              alt="Content Pic"
              src={con}
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h2 className="title-font sm:text-5xl text-3xl mb-4 font-bold text-[#480048]">
              The Outcome for Participants
              <br className="hidden lg:inline-block" />
              of the Program
            </h2>
            <p className="mb-8 leading-relaxed">
              As a graduate of this program you will own valuable products such as Full-Stack App Templates AR and VR Experiences and APIs that are marketed globally by the Panaverse DAO. You will also have the opportunity to offer your services at a rate of $50 per hour providing a path to financial stability while contributing to the growth of Pakistan software exports.
            </p>
            <div className="flex justify-center">
              <Link href={'https://portal.piaic.org/'}>
                <Button text="Join Now" />
              </Link>


            </div>
          </div>
        </div>
        </Wrapper>
      </section>

    </div>
  )
}

export default Content