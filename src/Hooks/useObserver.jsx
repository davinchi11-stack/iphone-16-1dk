

export function useObserver () {
   
   
    const inView = (items , options) => {
        return new Promise((resolve) => {
            const observer = new window.IntersectionObserver((entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        resolve();
                    }
                });
            }, options);
            observer.observe(items);
        });
    }

    return {inView}
}