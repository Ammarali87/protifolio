export default function About() { 
  return (
    <main className="flex min-h-screen flex-col lg:flex-row items-center justify-center bg-gray-100 p-8">
      <div className="one">

      <h1 className="text-5xl mt-9">Education</h1>
      <h2 className="my-4 text-3xl"> Diploma in Frontend Development from Route Academy</h2>
      <h2 className="my-4 text-3xl">Faculty of Commerce, Cairo University</h2>
      <br />
      <p className="my-4 text-xl">Passionate about programming and problem-solving.</p>
      <p className="my-4 text-xl">Creating bots to automate work.</p>
      </div>

        <img src="/edu.jpg" className="lg:w-1/2 ms-6" alt="" />

    </main>
  );
}
