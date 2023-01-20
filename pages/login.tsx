import Head from "next/head"
import Image from "next/legacy/image"

function login() {
  return (
    <div>
        <Head>
        <title>Netflix</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Image
        src="https://rb.gy/p2hphi"
        layout="fill"
        className="-z-10 !hidden opacity-60 sm:!inline"
        objectFit="cover"
      />
      <img
        src="https://rb.gy/ulxxee"
        className="absolute left-4 top-4 cursor-pointer object-contain md:left-10 md:top-6"
        width={150}
        height={150}
      />

      <form action="" className="relative mt-24 space-y-8 rounded bg-black/75 py-10 px-6 md:max-w-md md:mt-0 md:px-14">
        <h1 className="font-semibold text-4xl">Sign In</h1>
        <div className="space-y-4">
            <label htmlFor="" className="w-full inline-block">
                <input type="email" className="input" placeholder="Email"/></label>
            <label htmlFor=""className="w-full inline-block">
                <input type="password" className="input" placeholder="Password"/></label>
        </div>

        <button className="bg-red-500 w-full rounded py-3 font-semibold">
            Sign In
        </button>

        <div className="text-[grey]">
            New to Nexflix? {' '}
            <button className="text-white hover:underline">Sing Up</button>
        </div>
      </form>

      {/* <div className="relative top-[100px] py-4 px-4 ">
        <p className="font-semibold text-2xl py-2.5">Sing In</p>
        <form action="post" className="flex flex-col space-y-2">
            <input type="email" placeholder="Email" className= {'input'} />
            <input type="password" placeholder="Password" className={'input'}/>
            <input type="submit" value="Sing In" 
            className="bg-red-600 w-full py-2"/>
        </form>
        <div className="flex">
            <p className="text-[#918f8f]">
                New to Netflix? {' '}
            </p>
            <button className="hover:underline">Sing Up</button>
        </div>
      </div> */}
    </div>
  )
}

export default login