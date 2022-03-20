
import {useState, useEffect} from 'react';
import {csv} from 'd3';

export const useCSV = (url: string) => {
	const [data, setData] = useState(null);

	useEffect(() => {
		csv(url).then((data: any) => {
			setData(data);
		});
	}, []);

	return data;
};
