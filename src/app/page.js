import Image from 'next/image'

export default function Home() {
  return (
    <main>
      <img className="relative mx-auto" src="./swgtbanner.svg" alt="Shadow Wizard Technology Group" width="512" height="256"/>
      <section className="relative text-center p-10">
        <h2>Bringing magical solutions to your wicked problems</h2>
        <h2>Tomes coming soon</h2>
        <h2>Contact: admin@shadowwizardtechnologygroup.com</h2>
      </section>
    </main>
  )
}
