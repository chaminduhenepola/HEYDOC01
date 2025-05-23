import Image from "next/image";
import { Footer } from "../components/footer/Footer";
import { Header } from "../components/header/Header";
import { DoctorCard } from "../components/DoctorCard";
import { doctors } from "../data/DocData";



export default function Home() {
  return (
 <div className="grid grid-rows-[auto_1fr_auto] min-h-screen p-8 pb-20 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Header />

      <main className="row-start-2 flex flex-col items-center sm:items-start gap-8 w-full">
        <h1 className="text-3xl font-bold text-center sm:text-left">Our Doctors</h1>

       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full justify-items-center">
          {doctors.map((doctor, index) => (
            <DoctorCard
              key={index}
              name={doctor.name}
              specialization={doctor.specialization}
              description={doctor.description}
            />
          ))}
        </div>
      </main>
<br/>
      <Footer />
    </div>

  );
}
