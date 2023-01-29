import React from 'react'


export const getStaticPaths = async () => {

	const res = await fetch('http://localhost:3000/productions');	
	const data = await res.json();
	const paths = data.map(prod => {
		return {
			params: { id: prod.id.toString() }
		}
	})
	
	return {
		paths: paths,
		fallback: false
	}
}

export const getStaticProps = async (context) => {
    const id = context.params.id;
    const res = await fetch(`http://localhost:3000/productions/${id}`)
    const data = await res.json();

    return {
        props: {prod: data}
    }
}




const ProductionDetail = ({prod}) => {
  return (
    <div>
        <h1>ProductionDetail</h1>
        <h1>{prod.title}</h1>
        <p>{prod.genre}</p>
        <p>{prod.budget}</p>
        <p>{prod.description}</p>
        <p>{prod.director}</p>
        <p>{prod.ongoing}</p>
        <img src={prod.image} alt='production image'/>
    </div>
  )
}

export default ProductionDetail; 