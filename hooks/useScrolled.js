import { useState, useEffect } from 'react';
//this hook triggers when the page scroll is initiated
export function useScrolled() {
	const [isScrolled, setIsScrolled] = useState();
	useEffect(() => {
		window.addEventListener('scroll', () =>
			window.pageYOffset > 60 ? setIsScrolled(true) : setIsScrolled(false)
		);
	});
	return isScrolled;
}
