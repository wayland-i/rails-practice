import React from 'react'
import Link from 'next/link';


export const getStaticProps = async () => {

	const res = await fetch('http://localhost:3000/productions');
	const data = await res.json();
  
	return {
		props: { productions: data}
	}
}


const Productions = ({ productions }) => {
  return (
    <div>
        <h1>Producitons</h1>
        {productions.map(prod => (
            <div key={prod.id}>
                <Link href={`/productions/${prod.id}`}>{prod.title}</Link>
            </div>
        ))}
    </div>
  )
}

export default Productions;