import  {useEffect,useState} from 'react';
import axios from 'axios';

const useGetProducts = (API) => {
	const [products, setProducts] = useState([]);
    useEffect( () => {
		async function fetchData() {
			const response = await axios.get(API);
			setProducts(response.data);
		}
		fetchData();
	},[API]);

    return products;
}

export default useGetProducts;