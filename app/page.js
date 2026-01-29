import Image from "next/image";

export default function Home() {
  return (
    <div className="w-screen min-h-screen item-center justify-center">

      <div className=" flex  ">

        <div className="bg-blue-600 w-1/2">
          <h1>Caixa 1</h1>
        </div>

        <div className="bg-red-600">
          <h1>Caixa 2</h1>
          <h1></h1>
        </div>


      </div>


      <div className="flex flex-col border-4 border-white text-center text-white  p-4 m-6 rounded ">

        {/* IMAGEM  1 */}
        <Image
          src="/hp.webp"
          alt="Senac"
          width={200}
          height={200}
        />
        {/* IMAGEM  2 */}
        <Image
          src="/hp.webp"
          alt="Senac"
          width={200}
          height={200}
        />
        {/* IMAGEM  3 */}
        <Image
          src="/hp.webp"
          alt="Senac"
          width={200}
          height={200}
        />


      </div>

    </div>

  );
}
