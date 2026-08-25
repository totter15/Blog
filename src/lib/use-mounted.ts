import { useSyncExternalStore } from 'react';

const emptySubscribe = () => () => {};

/** True once the component has hydrated on the client. Avoids SSR/client mismatches for things like theme-dependent UI. */
export function useMounted() {
	return useSyncExternalStore(
		emptySubscribe,
		() => true,
		() => false
	);
}
