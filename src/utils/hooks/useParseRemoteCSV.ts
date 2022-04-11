import {useState, useEffect} from 'react';
import {csv} from 'd3';

export const useParseRemoteCSV = <T>(url: string) => {
	const [data, setData] = useState<Array<T> | []>([]);

	useEffect(() => {
		csv(url).then((data: any) => {
			setData(data);
		});
	}, []);

	return data;
};
