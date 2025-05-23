import Image from "next/image";
import { Footer } from "../components/footer/Footer";
import { Header } from "../components/header/Header";
import { DoctorCard } from "../components/DoctorCard";




export default function Home() {
  return (
 <div className="grid grid-rows-[auto_1fr_auto] min-h-screen p-8 pb-20 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Header />

      <main className="row-start-2 flex flex-col items-center sm:items-start gap-8 w-full">
        <h1 className="text-3xl font-bold text-center sm:text-left">Our Doctors</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full justify-items-center">
          <DoctorCard
            name="Dr. Imalsha Perera"
            specialization="Cardiologist"
            description="Specialist in heart and blood vessel disorders with 15+ years of experience."
          />
          <DoctorCard
            name="Dr. Chamara Silva"
            specialization="Neurologist"
            description="Expert in diagnosing and treating disorders of the nervous system."
          />
          <DoctorCard
            name="Dr. Nishadi Fernando"
            specialization="Pediatrician"
            description="Experienced in child health and developmental care."
          />
                    <DoctorCard
            name="Dr. Imalsha Perera"
            specialization="Cardiologist"
            description="Specialist in heart and blood vessel disorders with 15+ years of experience."
          />
          <DoctorCard
            name="Dr. Chamara Silva"
            specialization="Neurologist"
            description="Expert in diagnosing and treating disorders of the nervous system."
          />
          <DoctorCard
            name="Dr. Nishadi Fernando"
            specialization="Pediatrician"
            description="Experienced in child health and developmental care."
          />
                    <DoctorCard
            name="Dr. Imalsha Perera"
            specialization="Cardiologist"
            description="Specialist in heart and blood vessel disorders with 15+ years of experience."
          />
          <DoctorCard
            name="Dr. Chamara Silva"
            specialization="Neurologist"
            description="Expert in diagnosing and treating disorders of the nervous system."
          />
          <DoctorCard
            name="Dr. Nishadi Fernando"
            specialization="Pediatrician"
            description="Experienced in child health and developmental care."
          />
                    <DoctorCard
            name="Dr. Nishadi Fernando"
            specialization="Pediatrician"
            description="Experienced in child health and developmental care."
          />
          
        </div>
      </main>
<br/>
      <Footer />
    </div>

  );
}
