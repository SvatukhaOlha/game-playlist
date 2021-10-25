import { useState, useEffect } from 'react'

export default function GetData() {

    const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);
	const [result, setResult] = useState([])

	useEffect(() => {
		const returnData = async () => {
		setLoading(true);
		await fetch('http://jsonplaceholder.typicode.com/todos')
			.then(response => response.json())
			.then((data) => {
				setResult(data);
				setLoading(false);
			})
			.catch((error) => {
				console.log('Something went happen', error);
				setLoading(false);
				setError(error);
				console.error(error);
			});
		}
		returnData()		
	}, []);

	return { result, error, loading };
}