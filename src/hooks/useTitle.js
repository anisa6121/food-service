import { useEffect } from "react";

const useTitle = (title) => {
	useEffect(() => {
		document.title = `${title} - Our Online Food Service`;
	}, [title]);
};
export default useTitle;
