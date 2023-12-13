import Image from 'next/image';
import Heroes from './_components/heroes';

export default function Home() {


  return (
    <main className='container max-w-lg min-w-md mx-auto px-4'>
      <Heroes />
    </main>
  )
}
