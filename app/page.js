import Link from "next/link";
import Button from "./components/Button";
import Navbar from "./components/Navbar";

export default async function Home() {
  const data = await fetch('https://api.imgflip.com/get_memes')
  const res = await data.json()
  const getData = res.data.memes
  console.log(getData)
  return (
    <>
    <Navbar/>
      <div className=" flex justify-center	    flex-wrap ">

        {
          getData && getData.map((item) => {
            return <div key={item.id} className=" card bg-base-100 w-96 hover:bg-blue-100 shadow-xl m-2 p-2">
              <figure className="px-10 pt-10">
                <img
                  src={item.url}
                  alt="Shoes"
                  className="rounded-xl" />
              </figure>
              <div className="card-body items-center text-center">
                <p>{item.name}</p>
                <div className="card-actions">
                
                <Link href={{
                    pathname: "creatememes",
                    query: {
                      url: item.url,
                      id: item.id
                    }
                }}>
                <button className="btn btn-neutral">Generate this Meme</button>
                
                </Link>

                </div>
              </div>
            </div>
          })
        }
      </div>
    </>

  );
}
